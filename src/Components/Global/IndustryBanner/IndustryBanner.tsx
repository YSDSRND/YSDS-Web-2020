import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router';
import {useSelector} from "react-redux";
import {AppState} from "../../../Store";
import {Cookies} from "react-cookie-consent";
import {useScrollPosition} from "@n8tb1t/use-scroll-position";

export const IndustryBanner: React.FC = () => {

    const [hidden, setHidden] = useState(true);
    const [loading, setLoading] = useState(true);
    const [industry, setIndustry] = useState('');
    const options = useSelector((state : AppState) => state.options);
    const history = useHistory();

    const hide = () => {
        Cookies.set('industry-banner', true);
        setHidden(true);
    }

    const onSkip = hide;

    const onChoose = () => {
        hide();
        history.push(industry);
    }

    useEffect(() => {
        if (options.loading) {
            return;
        }

        setLoading(false);
    }, [options]);

    useEffect(() => {
        if (loading) {
            return;
        }

        if (!Cookies.get('industry-banner')) {
            setHidden(false);
            setTimeout(() => {
                hide();
            }, 30 * 1000);
        }
    }, [loading]);


    useScrollPosition(({ prevPos, currPos }) => {
        if (!hidden) {
            if (window.innerHeight < (currPos.y * -1)) {
                hide();
            }
        }
    })


    return !loading && !hidden ?
        <section className="industry-banner">
            <div className="main-inner">
                <div className="description">
                    <p>{options.options?.industry_banner.description}</p>
                </div>
                <div className="form">
                    <div className="custom-select">
                        <select onChange={event => setIndustry(event.target.value)}>
                            <option>Choose...</option>
                            {options.options?.industry_banner.industries.map((industry) => {
                                return <option key={industry.ID} value={industry.post_name}>{industry.post_title}</option>
                            })}
                        </select>
                    </div>
                    <button className="ysds-button" onClick={() => onChoose()}>Choose</button>
                    <button className="ysds-button lines white" onClick={() => onSkip()}>Skip</button>
                </div>
            </div>
        </section>
    :
        null
}