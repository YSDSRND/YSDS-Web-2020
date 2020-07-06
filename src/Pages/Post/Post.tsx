import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetPostBySlug, GetYoastBySlug } from '../../Services/Post/Post';
import Error404Template from '../../PageTemplates/Error404Template/Error404Template';
import LoadingTemplate from './../../PageTemplates/LoadingTemplate/LoadingTemplate'
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";
import {AllHtmlEntities} from "html-entities";
import {StandaloneTextAndImage} from "../../Components/Flexible/TextAndImage/TextAndImage";
import ContactFormColor from "../../Components/Flexible/ContactFormColor/ContactFormColor";

const Post: React.FC = () => {
  const { slug } = useParams();
  const location = useLocation();

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const [is404, set404] = useState<boolean>();

  const [yoastData, setYoastData] = useState<any>();

  useEffect(() => {
    if (!location) {
      return;
    }
    GetYoastBySlug(location.pathname).then((resp) => {
      setYoastData(resp[0] ? resp[0].yoast_meta : '');

    });


  }, [location]);

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

  return <>
    <Helmet >
      {
        yoastData ? yoastData.map((d: any) => {
          return (
            <meta property={d.property} content={d.content} />
          )
        }) : null
      }

      <title>{AllHtmlEntities.decode(data.title)}</title>

    </Helmet>
    <StandaloneTextAndImage acf_fc_layout="text_and_image" header={data.title} body={data.content} image={data.media} button={data.acf.button} />
    <ContactFormColor
        acf_fc_layout="contact"
        backgroundColor="blue"
        header="Contact an export"
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
