import React, {useState, useEffect} from "react";
import Office, {OfficeProps} from "./Office";
import { GetOfficeByID } from "../../../Services/Offices/Offices";

export const OfficesACFLayout = "offices";

export type OfficesProps = {
  acf_fc_layout: typeof OfficesACFLayout,
  header: string;
  body: string;
  offices: Array<{
    ID: number
  }>
};

const Offices: React.FC<OfficesProps> = ({ header, body, offices}) => {

  const [loading, setLoading] = useState<boolean>(true);
  const [officeData, setOfficeData] = useState<Array<OfficeProps>>([]);

  useEffect(() => {
    const promises = offices.map((off) => {
      return GetOfficeByID(off.ID)
    })

    Promise.all(promises).then((res) => {
      setOfficeData(res.map((r) => r.acf))
      setLoading(false);
    })
  }, [offices])

  
  return (
    <section className="offices">
      <div className="main">
        <h2>{header}</h2>
        <div className="line three-col"></div>
        <p className="subtitle">{body}</p>

        <div className="main-inner">
          <div className="flex-container">
            {
              !loading && officeData.map((officeItem,i) => {
                return (
                  <Office key={i} {...officeItem} />
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offices;
