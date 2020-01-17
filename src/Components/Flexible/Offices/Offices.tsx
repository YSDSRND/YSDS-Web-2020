import React from "react";
import Office, {OfficeProps} from "./Office";

export const OfficesACFLayout = "offices";

export type OfficesProps = {
  acf_fc_layout: typeof OfficesACFLayout,
  header: string;
  body: string;
  offices: Array<OfficeProps>
};

const Offices: React.FC<OfficesProps> = ({ header, body, offices}) => {
  return (
    <section className="offices">
      <div className="main">
        <h2>{header}</h2>
        <div className="line three-col"></div>
        <p className="subtitle">{body}</p>

        <div className="main-inner">
          <div className="flex-container">
            {
              offices.map(officeItem => {
                return (
                  <Office {...officeItem} />
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
