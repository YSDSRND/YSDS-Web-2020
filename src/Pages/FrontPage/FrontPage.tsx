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
import Card, {CardProps} from "../../Components/Flexible/CardsAlternate/Card";

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
    const cards: CardProps[] = [
      {
        image: {
          ID: 2815,
          id: 2815,
          title: 'medical-logistics-banner',
          filename: 'medical-logistics-banner-1.jpeg',
          url: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/medical-logistics-banner-1.jpeg',
          link: 'https://ysds.netlify.app/hem/medical-logistics-banner-2/',
          alt: '',
          author: '5',
          description: '',
          caption: '',
          name: 'medical-logistics-banner-2',
          status: 'inherit',
          uploaded_to: 181,
          date: '2020-06-26 08:31:41',
          modified: '2020-06-26 08:31:41',
          menu_order: 0,
          mime_type: 'image/jpeg',
          type: 'image',
          subtype: 'jpeg',
          icon: 'https://wp-admin.ysds.com/wp-includes/images/media/default.png',
          width: 1602,
          height: 600,
          sizes: {
            thumbnail: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/medical-logistics-banner-1-300x300.jpeg',
            'thumbnail-width': 300,
            'thumbnail-height': 300,
            medium: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/medical-logistics-banner-1-600x225.jpeg',
            'medium-width': 600,
            'medium-height': 225,
            large: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/medical-logistics-banner-1-1024x384.jpeg',
            'large-width': 1024,
            'large-height': 384,
          }
        },
        header: 'Life Science',
        text: 'Carefully crafted solutions for your time and temperature-sensitive shipments.',
        button: {
          button_style: 'lines',
          button: {
            title: 'Read more',
            url: 'https://ysds-react.netlify.com/lifescience/',
            target: ''
          }
        }
      },
      {
        image: {
          ID: 2789,
          id: 2789,
          title: 'Wood Crates',
          filename: 'AdobeStock_27340071-e1593102144994.jpeg',
          url: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_27340071-e1593102144994.jpeg',
          link: 'https://ysds.netlify.app/art/wood-crates/',
          alt: '',
          author: '5',
          description: '',
          caption: '',
          name: 'wood-crates',
          status: 'inherit',
          uploaded_to: 411,
          date: '2020-06-25 13:27:16',
          modified: '2020-06-25 13:27:16',
          menu_order: 0,
          mime_type: 'image/jpeg',
          type: 'image',
          subtype: 'jpeg',
          icon: 'https://wp-admin.ysds.com/wp-includes/images/media/default.png',
          width: 1300,
          height: 874,
          sizes: {
            thumbnail: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_27340071-e1593102144994-300x300.jpeg',
            'thumbnail-width': 300,
            'thumbnail-height': 300,
            medium: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_27340071-e1593102144994-600x403.jpeg',
            'medium-width': 600,
            'medium-height': 403,
            large: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_27340071-e1593102144994-1024x688.jpeg',
            'large-width': 1024,
            'large-height': 688,
          }
        },
        header: 'Art',
        text: 'Specialty logistics, uniquely designed for the movement of fine art',
        button: {
          button_style: 'lines',
          button: {
            title: 'Read more',
            url: 'https://ysds-react.netlify.com/art/',
            target: ''
          }
        }
      },
      {
        image: {
          ID: 2806,
          id: 2806,
          title: 'Einsatzfahrzeug mit Equipment',
          filename: 'AdobeStock_221696628-scaled.jpeg',
          url: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_221696628-scaled.jpeg',
          link: 'https://ysds.netlify.app/hem/einsatzfahrzeug-mit-equipment/',
          alt: '',
          author: '5',
          description: '',
          caption: '',
          name: 'einsatzfahrzeug-mit-equipment',
          status: 'inherit',
          uploaded_to: 181,
          date: '2020-06-25 15:44:24',
          modified: '2020-06-25 15:44:24',
          menu_order: 0,
          mime_type: 'image/jpeg',
          type: 'image',
          subtype: 'jpeg',
          icon: 'https://wp-admin.ysds.com/wp-includes/images/media/default.png',
          width: 2560,
          height: 1706,
          sizes: {
            thumbnail: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_221696628-300x300.jpeg',
            'thumbnail-width': 300,
            'thumbnail-height': 300,
            medium: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_221696628-600x400.jpeg',
            'medium-width': 600,
            'medium-height': 400,
            large: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_221696628-1024x683.jpeg',
            'large-width': 1024,
            'large-height': 683,
          }
        },
        header: 'IT & Tech',
        text: 'Our highly specialized technical ability to transport your IT and electronics safely is why we are trusted by industry leaders.',
        button: {
          button_style: 'lines',
          button: {
            title: 'Read more',
            url: 'https://ysds-react.netlify.com/it/',
            target: ''
          }
        }
      },
      {
        image: {
          ID: 2804,
          id: 2804,
          title: 'Automotive factory',
          filename: 'AdobeStock_327524731-scaled.jpeg',
          url: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_327524731-scaled.jpeg',
          link: 'https://ysds.netlify.app/hem/atelier-de-reparation-du-systeme-de-freinage-automobile/',
          alt: '',
          author: '5',
          description: '',
          caption: 'Réparation en atelier du systeme de freinage d\'une voiture avec disque et plaquettes montés sur etrier de frein du train arrière.',
          name: 'atelier-de-reparation-du-systeme-de-freinage-automobile',
          status: 'inherit',
          uploaded_to: 181,
          date: '2020-06-25 15:38:47',
          modified: '2020-06-25 15:39:03',
          menu_order: 0,
          mime_type: 'image/jpeg',
          type: 'image',
          subtype: 'jpeg',
          icon: 'https://wp-admin.ysds.com/wp-includes/images/media/default.png',
          width: 2560,
          height: 1707,
          sizes: {
            thumbnail: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_327524731-300x300.jpeg',
            'thumbnail-width': 300,
            'thumbnail-height': 300,
            medium: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_327524731-600x400.jpeg',
            'medium-width': 600,
            'medium-height': 400,
            large: 'https://wp-admin.ysds.com/wp-content/uploads/2020/06/AdobeStock_327524731-1024x683.jpeg',
            'large-width': 1024,
            'large-height': 683,
          }
        },
        header: 'Industrial & Manufacturing',
        text: 'Logistic solutions revolutionized for the fast, reliable and economical transporting of your industrious goods.',
        button: {
          button_style: 'lines',
          button: {
            title: 'Read more',
            url: 'https://ysds-react.netlify.com/industrial/',
            target: ''
          }
        }
      }
    ];

    ReactSwal.fire({
      title: <h2>Choose your industry</h2>,
      html: <div className="industry-modal">
        {cards.map((cardItem, i) => {
          return <Card key={i} {...cardItem} />;
        })}
      </div>,
      showCloseButton: true,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: "Skip",
    })
  }, []);

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
          <meta property={d.property} content={d.content} />
        )
      }) : null
    }
  
  <title>{data.title}</title>

  </Helmet>
  <Flexible flexible={data.acf.flexible} /></>;
};
export default FrontPage;
