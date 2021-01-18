import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet";

import Flexible from '../../Components/Global/Flexible/Flexible';
import {GetPageByID, GetYoastById} from '../../Services/Pages/Pages';
import { AppState } from '../../Store';
import Error404Template from '../../PageTemplates/Error404Template/Error404Template';
import LoadingTemplate from './../../PageTemplates/LoadingTemplate/LoadingTemplate'

import {AllHtmlEntities} from 'html-entities';
import {defaultsForOGTags} from "../../Util/Types/defaultsForOGTags";

const FrontPage: React.FC = () => {
  const options = useSelector((state : AppState) => state.options);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const [is404, set404] = useState<boolean>();
  const [yoastData, setYoastData] = useState<any>();
  const [yoastTitle, setYoastTitle] = useState<any>();

  useEffect(() => {
    if (!options.options?.frontpage) {
      return;
    }

    GetYoastById(options.options.frontpage).then((resp) => {
      setYoastTitle(resp ? resp.yoast_title : data.title);
      setYoastData(resp ? defaultsForOGTags(resp.yoast_meta, options) : '');

    });


  }, [options]);

  useEffect(() => {
    if (options.loading || !options.options) {
      return;
    }
    GetPageByID(options.options.frontpage).then((resp) => {
      if (Array.isArray(resp)) {
        set404(true);
      }
      setData(resp);
      setLoading(false);
    });
  }, [options]);

  if (loading) {
    return <LoadingTemplate />;
  }
  if (is404) {
    return <Error404Template />;
  }

  return <>
  <Helmet >
    {
      yoastData ? yoastData.map((d:any) => {
        return typeof d.name === "undefined"
          ? <meta property={d.property} content={unescape(d.content)} />
          : <meta name={d.name} content={unescape(d.content)} />
      }) : null
    }

    
  
    <title>{AllHtmlEntities.decode(yoastTitle)}</title>

  </Helmet>
  <Flexible flexible={data.acf.flexible} /></>;
};
export default FrontPage;
