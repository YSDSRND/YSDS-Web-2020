import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from "react-helmet";

import Flexible from '../../Components/Global/Flexible/Flexible';
import {GetPageByID, GetYoastById} from '../../Services/Pages/Pages';
import { AppState } from '../../Store';
import Error404Template from '../../PageTemplates/Error404Template/Error404Template';
import LoadingTemplate from './../../PageTemplates/LoadingTemplate/LoadingTemplate'

import {decode as decodeHtmlEntities} from 'html-entities';
import {defaultsForOGTags} from "../../Util/Types/defaultsForOGTags";
import { SetCurrentPage } from '../../Store/CurrentPage/CurrentPageActions';

const FrontPage: React.FC = () => {
  const options = useSelector((state : AppState) => state.options);
  const dispatch = useDispatch();
  const dispatchCallback = useCallback(dispatch, []);

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>();
  const [is404, set404] = useState<boolean>();
  const [yoastData, setYoastData] = useState<any>();
  const [yoastTitle, setYoastTitle] = useState<any>();

  const getCanonical = (pagePath?: string): string|undefined => {
    return !!pagePath? (window.location.origin + pagePath) : window.location.href;
  }

  useEffect(() => {
    if (!options.options?.frontpage) {
      return;
    }

    GetYoastById(options.options.frontpage).then((resp) => {
      setYoastTitle(resp[0]?.yoast_title ?? data?.title)     
      setYoastData(resp?.yoast_meta ? defaultsForOGTags(resp.yoast_meta, options) : '');
    });
  }, [options, data]);

  useEffect(() => {
    if (options.loading || !options.options) {
      return;
    }
    GetPageByID(options.options.frontpage).then((resp) => {
      if (Array.isArray(resp)) {
        set404(true);
      }
      
      dispatchCallback(SetCurrentPage(resp))
      setData(resp);
      setLoading(false);
    });
  }, [options, dispatchCallback]);

  if (loading) {
    return <LoadingTemplate />;
  }
  if (is404) {
    return <Error404Template />;
  }

  return <>
  <Helmet >
    {
      yoastData ? yoastData.map((d:any, index: number) => {
        return typeof d.name === "undefined"
          ? <meta key={index} property={d.property} content={unescape(d.content)} />
          : <meta key={index} name={d.name} content={unescape(d.content)} />
      }) : null
    }

    <link rel="canonical" href={getCanonical()} />
    <title>{decodeHtmlEntities(yoastTitle)}</title>

  </Helmet>
  <Flexible flexible={data.acf.flexible} /></>;
};
export default FrontPage;
