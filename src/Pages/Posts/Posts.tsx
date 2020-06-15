import React, { useState, useEffect } from 'react';
import PostCard from '../../Components/Global/PostCard/PostCard';
import { getPosts } from '../../Services/Post/Post';
import Error404Template from '../../PageTemplates/Error404Template/Error404Template';
import LoadingTemplate from './../../PageTemplates/LoadingTemplate/LoadingTemplate'

const Posts: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  const [is404] = useState<boolean>();
  const [page, setPage] = useState<number>(1);
  const [last, setLast] = useState<boolean>(false);


  useEffect(() => {
    getPosts(page).then((resp) => {
      console.log(resp, "upper")
      setData(resp);
      setLoading(false);
      if (resp.length < 3) {
        setLast(true);
      }
    });
  }, []);

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
            data.map((post: any, index: any) => <PostCard key={index} post={post} />)
          }

          <div style={{ width: "100%" }}></div>

          {
            !last ? (
              <a className="ysds-button normal" onClick={() => {
                getPosts(page + 1).then((resp) => {
                  let newData = data.concat(resp)
                  setData(newData);
                  setPage(page + 1)
                  if (resp.length < 3) {
                    setLast(true);
                  }

                });
              }}>Load more</a>

            ) : null
          }

        </div>
      </div>
    </section>
  );
};
export default Posts;
