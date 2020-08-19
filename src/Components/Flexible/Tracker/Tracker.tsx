import React, { useState } from 'react';
import { WPImage } from '../../../Util/Types/WPImage';
import { getTrackingRequest } from '../../../Services/Tracker/Tracker';

export const TrackerAcfLayout = 'tracker';
export type TrackerProps = {
  acf_fc_layout: typeof TrackerAcfLayout;
  background_image: WPImage;
  header: string;
  background_color:string,
};

const TextOnWhite: React.FC<TrackerProps> = ({
  background_image,
  header,
  background_color
}) => {
  const [trackingId, setTrackingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [trackingInformation, setTrackingInformation] = useState([]);

  const getTracking = async () => {
    if (loading) {
      return;
    }
    const tracking = await getTrackingRequest(trackingId);
    setTrackingInformation(tracking.data.tracking.activities);
    setLoading(true);
  };

  const setTracking = (e:any) => setTrackingId(e.target.value);

  return (
    <section className={"tracker " + background_color}>
      <div className="main">
        <div className="main-inner">
          <h3>Enter your tracking code here:</h3>
          <div className="tracker-form">
            <input value={trackingId} onChange={setTracking} placeholder="Tracking ID" />
            <button onClick={getTracking} disabled={loading}>Submit</button>
          </div>
          <div className="timeline">
            {trackingInformation.map((info:any, i:number) => (
              <div className="box" key={i}>
                <h3>{info.description}</h3>
                <p className="date">{info.date}</p>
                <p className="city">{info.address.city}</p>
                <p className="country">{info.address.country_code}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextOnWhite;
