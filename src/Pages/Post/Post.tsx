import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetPostBySlug, GetYoastBySlug } from '../../Services/Post/Post';
import Error404Template from '../../PageTemplates/Error404Template/Error404Template';
import LoadingTemplate from './../../PageTemplates/LoadingTemplate/LoadingTemplate'
import { Helmet } from "react-helmet";
import {decode as decodeHtmlEntities} from "html-entities";
import {StandaloneTextAndImage} from "../../Components/Flexible/TextAndImage/TextAndImage";
import ContactFormColor from "../../Components/Flexible/ContactFormColor/ContactFormColor";
import {Breadcrumb, BreadcrumbItem} from "../../Components/Global/Breadcrumb/Breadcrumb";
import {defaultsForOGTags} from "../../Util/Types/defaultsForOGTags";
import {useSelector} from "react-redux";
import {AppState} from "../../Store";

const Post: React.FC = () => {
  const options = useSelector((state : AppState) => state.options);
  const { slug } = useParams<{slug: string}>();

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const [is404, set404] = useState<boolean>();

  const [yoastData, setYoastData] = useState<any>();
  const [yoastTitle, setYoastTitle] = useState<any>();

  useEffect(() => {
    if (!slug) {
      return;
    }

    GetYoastBySlug(slug).then((resp) => {
      setYoastTitle(resp[0]?.yoast_title ?? data?.title)
      setYoastData(resp[0]?.yoast_meta ? defaultsForOGTags(resp[0].yoast_meta, options) : '');
    });


  }, [slug, options, data]);

  useEffect(() => {
    if (!slug) {
      return;
    }
    GetPostBySlug(slug).then((resp) => {
      if (Array.isArray(resp)) {
        set404(true);
        setLoading(false)
        return;
      }
      setData(resp);
      setLoading(false);
      set404(false);
    });
  }, [slug]);

  if (loading) {
    return <LoadingTemplate />;
  }

  if (is404) {
    return <Error404Template />;
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    {
      title: 'Posts',
      uri: '/posts'
    },
    {
      title: data.title,
      uri: `/posts/${data.name}`
    }
  ]

  return <>
    <Helmet >
      {
        yoastData ? yoastData.map((d:any, index: number) => {
            return typeof d.name === "undefined"
            ? <meta key={index} property={d.property} content={unescape(d.content)} />
            : <meta key={index} name={d.name} content={unescape(d.content)} />
        }) : null
      }

      <title>{decodeHtmlEntities(yoastTitle)}</title>

    </Helmet>
    <Breadcrumb items={breadcrumbItems} />
    <StandaloneTextAndImage acf_fc_layout="text_and_image" header={data.title} body={data.content} image={data.media} button={data.acf.button} />
    <ContactFormColor
        acf_fc_layout="contact"
        backgroundColor="blue"
        header="Contact an expert"
        subheader="We are based in 12 cities in 7 countries worldwide, with a global network of agents and partners."
        prefer_contacting_us_title="Prefer calling?"
        prefer_contacting_us_body="Our dedicated staff are available by phone to help with any questions or enquiries that you may have."
        button={{
          button: {
            target: '_self',
            title: "Click here",
            url: `${window.location.protocol}${window.location.host}/contact`
          },
          button_style: "lines white",
        }}
      />
    </>;
};
export default Post;
