import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../Components/Global/PostCard/PostCard";
import { GetPostBySlug, getPosts } from "../../Services/Post/Post";
import Error404Template from "../../PageTemplates/Error404Template/Error404Template";

const Posts: React.FC = () => {

  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  const [is404, set404] = useState<boolean>();

  useEffect(() => {
 
    getPosts(0).then(resp => {
      console.log(resp)
      setData(resp);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="highblack"></div>;
  }

  if (is404) {
    return <Error404Template />
  }

  return (
      <section className="blog-posts">
        <div className="main">
          <div className="main-inner">
            {
                data.map((post:any) => <PostCard post={post} />)
            }

          {  /*<div className="pagination">
              <div className="prev">prev</div>
              <div className="number active">1</div>
              <div className="number">2</div>
              <div className="number">3</div>
              <div className="number">4</div>
              <div className="number">2</div>
              <div className="number">3</div>
              <div className="number">4</div>
              <div className="number">2</div>
              <div className="number">3</div>
              <div className="number">4</div>
              <div className="next">next</div>
          </div>*/ }

          </div>
        </div>
      </section>
  )

};
export default Posts;
