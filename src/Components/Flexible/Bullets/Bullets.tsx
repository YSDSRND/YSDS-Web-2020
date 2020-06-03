import React from 'react';
import { WPImage } from '../../../Util/Types/WPImage';

export const BulletACFLayout = 'check_list';
export type BulletProps = {
  bullets: [{ title: string, text: string, icon: string, fontawsome_or_upload: string, image: WPImage }],
  style: string,
  title: string,

  acf_fc_layout: 'check_list'

};

const Bullets: React.FC<BulletProps> = ({ bullets, style, title, }) => (
  <section className="check-list">
    <div className="main">
      <div className="main-inner">
        <h2>{title}</h2>
        <div className={`flex-container ${style}`}>
          {
            bullets.map((bullet, i) => (
              <div className="bullet" key={i}>
                {
                  bullet.fontawsome_or_upload === 'upload' ? (<img style={{height:62}} src={bullet.image.url} />) : <div className="check-mark" dangerouslySetInnerHTML={{ __html: bullet.icon }} />
                }

                <div className="text-container">
                  <h3>{bullet.title}</h3>
                  <p>{bullet.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  </section>
);

export default Bullets;
