import React, { useState, useEffect } from 'react';
import Case, { CaseProps } from './Case';
import { GetCaseByID } from '../../../Services/Cases/Cases';
import Swiper from 'react-id-swiper';

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

  const params = {
    slidesPerView: 1,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
    },
  }

  return (
    <section className={`cases ${background_color}`}>
      <div className="main">
        <div className="main-inner">
          {
            title.length > 0 ? (<h2>{title}</h2>) : null
          }
          {
            !loading && casesData && (
              <Swiper {...params}>
              {
                casesData.map((caseItem: CaseProps, i) => (
                  <div className="swiper-slide">
                    <Case key={i} {...caseItem} />
                  </div>
                ))
              }
              </Swiper>
            )
          }
          

        </div>
      </div>
    </section>
  );
};

export default Cases;
