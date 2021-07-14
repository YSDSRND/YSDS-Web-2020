import React, { useState, useEffect } from 'react';
import Case, { CaseProps } from './Case';
import { GetCaseByID } from '../../../Services/Cases/Cases';
//import Swiper from 'react-id-swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import 'swiper/components/navigation/navigation.scss';
import { useRef } from 'react';

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
  const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const promises = cases.map((c) => GetCaseByID(c.ID));

    Promise.all(promises).then((res:any) => {
      res = res.map((r:any) => {
        r.acf.media = r.media;
        r.acf.slug = r.slug
        return r;
      })

      setCasesData(res.map((r:any) => r.acf));
      setLoading(false);
    });
  }, [cases]);

  SwiperCore.use([Navigation]);

  const params = {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: nextRef.current,
      prevEl: prevRef.current,
    },
    rebuildOnUpdate: true,
  }

  return (
    <section className={`cases ${background_color}`}>
      <div className="main">
        <div className="main-inner">
          {
            title.length > 0 ? (<h2 className="heading2">{title}</h2>) : null
          }
          {
            !loading && casesData && (
              <Swiper {...params}>
              {
                casesData.map((caseItem: CaseProps, i) => (
                  <SwiperSlide key={i} className="swiper-slide">
                    <Case {...caseItem} />
                  </SwiperSlide>
                ))
              }
              </Swiper>
            )
          }

          <div ref={nextRef} className="swiper-button-next"></div>
          <div ref={prevRef} className="swiper-button-prev"></div>
          
        </div>
      </div>
    </section>
  );
};

export default Cases;
