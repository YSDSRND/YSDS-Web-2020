import React, { useState, useEffect } from 'react';
import WPButton from '../../../Util/Types/WPButton';
import LinkButton from '../../Global/LinkButton/LinkButton';
import { getPosts } from '../../../Services/Post/Post';
import LoadingTemplate from './../../../PageTemplates/LoadingTemplate/LoadingTemplate'


export const ThreeBlogPostsPropsACFLayout = 'latest_blog_posts';
export type ThreeBlogPostsProps = {
    acf_fc_layout: typeof ThreeBlogPostsPropsACFLayout,
    title: string,
    button: WPButton,
    background_color:string
}

const Hero: React.FC<ThreeBlogPostsProps> = ({ title, button, background_color }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getPosts(0).then((resp) => {
      setData(resp.slice(0, 3));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LoadingTemplate />;
  }


  return (
    <>
      <section className={`latest-blog-posts ${background_color}`}>
        <div className="main">
          <div className="main-inner">
            <h2>{title}</h2>
            <div className="flex-container">
              {
                data.map((card: any, i:number) => (
                  <a key={i} className="one-post" href={`/posts/${card.slug}`}>
                      {card.media ?
                      <img alt="" src={card.media ? card.media.large : ''} />
                      : null }
                    <div className="post-text-container">
                      <h3>{card.title}</h3>
                      <p className="date">{new Date(card.date).toLocaleDateString('sv-SE')}</p>
                      <p>{card.excerpt}</p>
                    </div>
                  </a>
                ))
              }

            </div>
            <LinkButton {...button} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
