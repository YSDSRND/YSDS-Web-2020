import React, {useState} from 'react';
import {WPImage} from '../../../Util/Types/WPImage';
import {getTrackingRequest} from '../../../Services/Tracker/Tracker';
import {BarLoader} from "react-spinners";

export const TrackerAcfLayout = 'tracker';
export type TrackerProps = {
    acf_fc_layout: typeof TrackerAcfLayout;
    background_image: WPImage;
    header: string;
    background_color: string,
};

const TextOnWhite: React.FC<TrackerProps> = ({ background_image, header, background_color}) => {
    const [trackingId, setTrackingId] = useState('');
    const [loading, setLoading] = useState(false);
    const [trackingInformation, setTrackingInformation] = useState([]);
    const [error, setError] = useState(false);

    const getTracking = async () => {
        if (!trackingId) return;

        setLoading(true);

        const tracking = await getTrackingRequest(trackingId);
        setError(tracking.data.status === 500);
        setTrackingInformation(tracking.data.status !== 500 ? tracking.data.tracking.activities : []);
        setLoading(false);
    };

    const setTracking = (e: any) => setTrackingId(e.target.value);

    return (
        <section className={"tracker " + background_color}>
            <div className="main">
                <div className="main-inner">
                    <h3>Enter your tracking code here:</h3>
                    <div className="tracker-form">
                        <input value={trackingId} onChange={setTracking} placeholder="Tracking ID"/>
                        <button onClick={getTracking} disabled={loading}>Submit</button>
                    </div>
                    {loading ?
                        <BarLoader
                            css={'display: block; margin: 1.5rem auto; border-color: red;'}
                            width={200}
                            height={6}
                            color={"#846804"}
                            loading={true}
                        />
                        :
                        <>
                            {error ?
                                <div className="alert">
                                    <p>We couldn't find any information about your tracking. </p>
                                </div>
                                :
                                <div className="timeline">
                                    {trackingInformation.map((info: any, i: number) => (
                                        <div className="box" key={i}>
                                            <h3>{info.description}</h3>
                                            <p className="date">{info.date}</p>
                                            <p className="city">{info.address.city}</p>
                                            <p className="country">{info.address.country_code}</p>
                                        </div>
                                    ))}
                                </div>
                            }
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default TextOnWhite;
