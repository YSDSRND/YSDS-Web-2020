import React, { useState } from "react";
import { WPImage } from "../../../Util/Types/WPImage";
import HTMLContent from "../../Global/HTMLContent/HTMLContent";
import {getTrackingRequest} from '../../../Services/Tracker/Tracker'

export const TrackerAcfLayout= "tracker";
export type TrackerProps = {
  acf_fc_layout: typeof TrackerAcfLayout;
  background_image: WPImage;
  header: string;
};

const TextOnWhite: React.FC<TrackerProps> = ({
    background_image,
  header,
}) => {
    const [trackingId, setTrackingId] = useState("")
    const [loading, setLoading] = useState(false)
    const [trackingInformation, setTrackingInformation] = useState([])
    
    const getTracking = async () => {
      if(loading){
        return;
      }
      let tracking = await getTrackingRequest(trackingId)
      setTrackingInformation(tracking.data.tracking.activities)
      setLoading(true)
    }
    
  return (
    <section className="tracker">
        <input value={trackingId} onChange={(e) => setTrackingId(e.target.value)} placeholder={"trackerid"}/>
        <button onClick={() => {
            getTracking()
        }} disabled={loading}>Submit</button>
        {trackingInformation.map((info:any) => {
          return (
            <div>
              <p>{info.description}</p>
              <p>{info.date}</p>
              <p>{info.address.city}</p>
              <p>{info.country_code}</p>
            </div>
            
          )
        })}
    </section>
  );
};

export default TextOnWhite;
