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
      <section>
          {
              data.map((post:any) => <PostCard post={post} />)
          }

          Här ska det typ vara en knapp "Nästa sida o förra sidan"
      </section>
  )

};
export default Posts;
