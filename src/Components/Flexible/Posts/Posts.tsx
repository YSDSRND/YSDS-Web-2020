import React, { useState, useEffect } from 'react';
import PostCard from '../../../Components/Global/PostCard/PostCard';
import { getPosts } from '../../../Services/Post/Post';
import Error404Template from '../../../PageTemplates/Error404Template/Error404Template';
import LoadingTemplate from '../../../PageTemplates/LoadingTemplate/LoadingTemplate'

export const PostsACFLayout = 'posts';

export type PostsProps = {
    acf_fc_layout: typeof PostsACFLayout,
  };

const Posts: React.FC<PostsProps> = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  const [is404] = useState<boolean>();
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    getPosts(page).then((resp:any) => {
      setData(resp);
      setLoading(false);
    });
  });

  if (loading) {
    return <LoadingTemplate />;
  }

  if (is404) {
    return <Error404Template />;
  }

  return (
    <section className="blog-posts">
      <div className="main">
        <div className="main-inner">
          {
               data.map((post:any, index:any) => <PostCard key={index} post={post} />)
          }

          <div style={{width:"100%"}}></div>

      <button className="ysds-button normal"  onClick={() => {
        getPosts(page+1).then((resp:any) => {
          let newData = data.concat(resp)
          setData(newData);
          setPage(page +1)
          
        });
      }}>Load more</button>

        </div>
      </div>
    </section>
  );
};
export default Posts;
