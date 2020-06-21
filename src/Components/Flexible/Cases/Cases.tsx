import React, { useState, useEffect } from 'react';
import Case, { CaseProps } from './Case';
import { GetCaseByID } from '../../../Services/Cases/Cases';

export const CasesACFLayout = 'cases';
export type CasesProps = {
  acf_fc_layout: typeof CasesACFLayout,
  cases: {
    ID: number,
  }[],
  title:string,
  background_color:string
}

const Cases: React.FC<CasesProps> = ({ cases, title, background_color }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [casesData, setCasesData] = useState<CaseProps[]>([]);

  useEffect(() => {
    const promises = cases.map((c) => GetCaseByID(c.ID));

    Promise.all(promises).then((res:any) => {
      res = res.map((r:any) => {
        console.log(r.media)
        r.acf.media=r.media;
        return r;
      })

      setCasesData(res.map((r:any) => r.acf));
      setLoading(false);
    });
  }, [cases]);

  return (
    <section className={`cases ${background_color}`}>
      <div className="main">
        <div className="main-inner">
          {
            title.length > 0 ? (<h2>{title}</h2>) : null
          }
          {
            !loading && casesData && casesData.map((caseItem: CaseProps, i) => (
              <Case key={i} {...caseItem} />
            ))
          }

        </div>
      </div>
    </section>
  );
};

export default Cases;
