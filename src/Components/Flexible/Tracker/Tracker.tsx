import React, {useCallback, useEffect, useState} from 'react';
import {WPImage} from '../../../Util/Types/WPImage';
import {getTrackingRequest} from '../../../Services/Tracker';
import {BarLoader} from "react-spinners";

export const TrackerAcfLayout = 'tracker';
export type TrackerProps = {
    acf_fc_layout: typeof TrackerAcfLayout;
    background_image: WPImage;
    header: string;
    background_color: string,
};

const Tracker: React.FC<TrackerProps> = ({ background_image, header, background_color}) => {
    const [trackingId, setTrackingId] = useState('');
    const [loading, setLoading] = useState(false);
    const [trackingInformation, setTrackingInformation] = useState([]);

    const [error, setError] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const callbackGetTracking = useCallback((trackingId) => getTracking(trackingId), [])

    const getTracking = async (trackingId: string) => {
        if (!trackingId) return;

        setLoading(true);

        const tracking = await getTrackingRequest(trackingId);

        /* The ShipmentEvent tag is not always present - default to empty array */
        /* The response here looks differently depending on carrier*/
        //setXMLTrackingInformation((JSON.parse(xmlDataAsJsonString)["req:TrackingResponse"].AWBInfo.ShipmentInfo.ShipmentEvent || []).reverse())
        setError(tracking.data.status === 500);
        setTrackingInformation(tracking.data.status !== 500 ? tracking.data.tracking.activities : []);
        setLoading(false);
        setHasSearched(true);
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)

        if (searchParams.has('tracking_number')) {
            setTrackingId(searchParams.get('tracking_number') ?? '');
            callbackGetTracking(searchParams.get('tracking_number') ?? '')
        }
    }, [callbackGetTracking])

    

    const setTracking = (e: any) => setTrackingId(e.target.value);

    /* We're reversing the tracking information to get the newest on top */
    const activities = trackingInformation.length ? (
        <div className="timeline">
            {trackingInformation.slice(0).reverse().map((info: any, i: number) => {
                const date = new Date(info.date);
                const originalDate = new Date(info.original_date);
                return (
                    <div className="box" key={i}>
                        <h3>{info.description}</h3>
                        <p className="date">{originalDate.toLocaleString() !== 'Invalid Date' ? originalDate.toLocaleString() : date.toLocaleString()}</p>
                        <p className="city">{info.address.city}</p>
                        <p className="country">{info.address.country_code}</p>
                    </div>
                )
            })}
        </div>
    ) : (hasSearched ? <div className="alert"><p>There is no activities for this tracking number yet. Please check back later!</p></div> : null )

    return (
        <section className={"tracker " + background_color}>
            <div className="main">
                <div className="main-inner">
                    <h3>Enter your tracking code here:</h3>
                    <div className="tracker-form">
                        <input value={trackingId} onChange={setTracking} placeholder="Tracking ID"/>
                        <button onClick={() => getTracking(trackingId)} disabled={loading}>Submit</button>
                    </div>
                    {loading ?
                        <BarLoader
                            css={'display: block; margin: 1.5rem auto; border-color: red;'}
                            width={200}
                            height={6}
                            color={"#F26703"}
                            loading={true}
                        />
                        :
                        <>
                            {error ?
                                <div className="alert">
                                    <p>We couldn&apos;t find any information about your tracking. </p>
                                </div>
                                :
                                activities
                            }
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Tracker;
