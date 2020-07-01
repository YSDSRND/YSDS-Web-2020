import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom';

import Flexible from '../../Components/Global/Flexible/Flexible';
import { GetPageByID, GetYoastBySlug } from '../../Services/Pages/Pages';
import { AppState } from '../../Store';
import Error404Template from '../../PageTemplates/Error404Template/Error404Template';
import LoadingTemplate from './../../PageTemplates/LoadingTemplate/LoadingTemplate'

import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
import Card from "../../Components/Flexible/CardsAlternate/Card";
import {AllHtmlEntities} from 'html-entities';

const ReactSwal = withReactContent(Swal);

const FrontPage: React.FC = () => {
  const options = useSelector((state : AppState) => state.options);
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
    if (options.loading || !options.options) {
      return;
    }

    ReactSwal.fire({
      title: <h2>{options.options.industry_modal.title}</h2>,
      html: <>
        <p className="lead">{options.options.industry_modal.description}</p>
        <div className="industry-modal">
          {options.options.industry_modal.cards.map((cardItem, i) => {
            return <Card key={i} {...cardItem} />;
          })}
        </div>
        </>,
      grow: "row",
      showCloseButton: true,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: "Skip",
    })
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
        return (
          <meta property={d.property} content={unescape(d.content)} />
        )
      }) : null
    }
  
  <title>{AllHtmlEntities.decode(data.title)}</title>

  </Helmet>
  <Flexible flexible={data.acf.flexible} /></>;
};
export default FrontPage;
