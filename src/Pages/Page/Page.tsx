import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';
import Flexible from '../../Components/Global/Flexible/Flexible';
import { GetPageBySlug, GetYoastBySlug } from '../../Services/Pages/Pages';
import Error404Template from '../../PageTemplates/Error404Template/Error404Template';
import LoadingTemplate from './../../PageTemplates/LoadingTemplate/LoadingTemplate'

const Page: React.FC = (props) => {
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
      console.log(resp)
      setYoastData(resp[0] ? resp[0].yoast_meta : ''); 
      
    });


  }, [location]);



  useEffect(() => {
    if (!location) {
      return;
    }
    GetPageBySlug(location.pathname).then((resp) => {

      if (Array.isArray(resp)) {
        set404(true);
        setLoading(false);
        return
      }
      setData(resp);
      setLoading(false);
      set404(false);
    });

    
  }, [location]);


  if (loading) {
    return <LoadingTemplate />
  }
  if (is404) {
    return <div><Error404Template /></div>;
  }

  

  return <>
    <Helmet >
      {
        yoastData ? yoastData.map((d:any) => {
          return (
            <meta property={d.property} content={d.content} />
          )
        }) : null
      }
    
    <title>{data.title}</title>

    </Helmet>
    <Flexible flexible={data.acf.flexible} /></>;
};
export default Page;
