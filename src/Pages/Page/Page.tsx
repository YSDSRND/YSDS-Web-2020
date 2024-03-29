import React, {useState, useEffect} from 'react';
import {Helmet} from "react-helmet";
import {useLocation} from 'react-router-dom';
import Flexible from '../../Components/Global/Flexible/Flexible';
import {GetPageBySlug, GetYoastBySlug} from '../../Services/Pages/Pages';
import Error404Template from '../../PageTemplates/Error404Template/Error404Template';
import LoadingTemplate from './../../PageTemplates/LoadingTemplate/LoadingTemplate';
import {decode as decodeHtmlEntities} from 'html-entities';
import {defaultsForOGTags} from "../../Util/Types/defaultsForOGTags";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../Store";
import { SetCurrentPage } from '../../Store/CurrentPage/CurrentPageActions';
import { useCallback } from 'react';

function handleTracking(pathname: string, search: string) {
    if (search.length > 0 && pathname.includes('tracking') && search.includes('tracking_number'))
        window.location.replace(`https://tracking.ysds.com/${search.substring(search.indexOf('=') + 1)}`);
    else if (pathname.includes('tracking'))
        window.location.replace('http://tracking.ysds.com'); 
}

const Page: React.FC = (props) => {
    const options = useSelector((state : AppState) => state.options);
    const dispatch = useDispatch();
    const dispatchCallback = useCallback(dispatch, []);
    const location = useLocation();

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>();
    const [is404, set404] = useState<boolean>();

    const [yoastData, setYoastData] = useState<any>();
    const [yoastTitle, setYoastTitle] = useState<any>();
    

    const getCanonical = (pagePath?: string): string => {
        return !!pagePath? (window.location.origin + pagePath) : window.location.protocol + '//' + window.location.host + window.location.pathname;
    }

    handleTracking(location.pathname, location.search);

    useEffect(() => {
        if (!location) {
            return;
        }

        const slug = location.pathname.split('/').filter(value => !!value).slice(-1)[0];

        GetYoastBySlug(slug).then((resp) => {
            setYoastTitle(resp[0]?.yoast_title ?? data?.title);
            setYoastData(resp[0]?.yoast_meta ? defaultsForOGTags(resp[0].yoast_meta, options) : '');

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
            dispatchCallback(SetCurrentPage(resp));
            setData(resp);
            setLoading(false);
            set404(false);
        });


    }, [location, dispatchCallback]);


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

            <link rel="canonical" href={getCanonical()} />
            <title>{decodeHtmlEntities(yoastTitle)}</title>
        </Helmet>
        <Flexible flexible={data.acf.flexible}/></>;
};
export default Page;
