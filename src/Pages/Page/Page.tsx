import React, {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";
import {useLocation} from 'react-router-dom';
import Flexible from '../../Components/Global/Flexible/Flexible';
import {GetPageBySlug, GetYoastBySlug} from '../../Services/Pages/Pages';
import Error404Template from '../../PageTemplates/Error404Template/Error404Template';
import LoadingTemplate from './../../PageTemplates/LoadingTemplate/LoadingTemplate';
import {AllHtmlEntities} from 'html-entities';
import {defaultsForOGTags} from "../../Util/Types/defaultsForOGTags";
import {useSelector} from "react-redux";
import {AppState} from "../../Store";

const Page: React.FC = (props) => {
    const options = useSelector((state : AppState) => state.options);
    const location = useLocation();

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>();
    const [is404, set404] = useState<boolean>();

    const [yoastData, setYoastData] = useState<any>();
    const [yoastTitle, setYoastTitle] = useState<any>();

    useEffect(() => {
        if (!location) {
            return;
        }

        const slug = location.pathname.split('/').filter(value => !!value).slice(-1)[0];

        GetYoastBySlug(slug).then((resp) => {
            setYoastTitle(resp[0] ? resp[0].yoast_title : data.title);
            setYoastData(resp[0] ? defaultsForOGTags(resp[0].yoast_meta, options) : '');

        });


    }, [location, options, data]);


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
        return <LoadingTemplate/>
    }
    if (is404) {
        return <div><Error404Template/></div>;
    }


    return <>
        <Helmet>
            {
                yoastData ? yoastData.map((d:any, index: number) => {
                    return typeof d.name === "undefined"
                    ? <meta key={index} property={d.property} content={unescape(d.content)} />
                    : <meta key={index} name={d.name} content={unescape(d.content)} />
                }) : null
            }

            <title>{AllHtmlEntities.decode(yoastTitle)}</title>
        </Helmet>
        <Flexible flexible={data.acf.flexible}/></>;
};
export default Page;
