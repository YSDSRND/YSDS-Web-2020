import React, { useState, useEffect } from 'react';
import Office, { OfficeProps } from './Office';
import { GetOffices } from '../../../Services/Offices/Offices';

export const OfficesACFLayout = 'offices';

export type OfficesProps = {
  acf_fc_layout: typeof OfficesACFLayout,
  header: string;
  body: string;
  offices: {
    ID: number
  }[];
  background_color:string;
};

const Offices: React.FC<OfficesProps> = ({ header, body, offices, background_color }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [officeData, setOfficeData] = useState<OfficeProps[]>([]);

  useEffect(() => {
    GetOffices().then((res) => {
      const officesIds = offices.map((office) => office.ID);
      setOfficeData(res.filter((r:any) => officesIds.includes(r.id)).map((r:any) => r.acf));
      setLoading(false);
    });
  }, [offices]);


  return (
    <section className={"offices " + background_color}>
      <div className="main">
        <h2>{header}</h2>
        <div className="line three-col" />
        <p className="subtitle">{body}</p>

        <div className="main-inner">
          <div className="flex-container">
            {
              !loading && officeData.map((officeItem, i) => (
                <Office key={i} {...officeItem} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offices;
