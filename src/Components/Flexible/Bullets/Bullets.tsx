import React from 'react';
import { WPImage } from '../../../Util/Types/WPImage';
import WPButton  from '../../../Util/Types/WPButton';

import LinkButton from '../../Global/LinkButton/LinkButton';

export const BulletACFLayout = 'check_list';
export type BulletProps = {
  bullets: [{ title: string, text: string, icon: string, fontawsome_or_upload: string, image: WPImage, button:WPButton }],
  style: string,
  title: string,
  subtitle: string,
  columns:string,
  background_color:string,
  bullet_alignment: string,
  button: WPButton,
  acf_fc_layout: 'check_list'

};

const Bullets: React.FC<BulletProps> = ({ bullets, style, title, subtitle, columns, background_color, bullet_alignment, button}) => (
  <section className={"check-list " + background_color}>
    <div className="main">
      <div className="main-inner">
        <h2>{title}</h2>
        { subtitle ? <p>{subtitle}</p> : null }
        <div className={`flex-container ${style} ${columns}`}>
          {
            bullets.map((bullet, i) => (
              <div className={`bullet ${bullet_alignment}`} key={i}>
                {
                  bullet.fontawsome_or_upload === 'upload' ? (<img alt="" style={{height:62}} src={bullet.image.url} />) : <div className="check-mark" dangerouslySetInnerHTML={{ __html: bullet.icon }} />
                }

                <div className="text-container">
                  <h3>{bullet.title}</h3>
                  <p>{bullet.text}</p>
                  <LinkButton {...bullet.button} />
                </div>
              </div>
            ))
          }
        </div>
        <LinkButton {...button} />

      </div>
    </div>
  </section>
);

export default Bullets;