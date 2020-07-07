import React, { useState, useEffect } from 'react';
import PostCard from '../../Components/Global/PostCard/PostCard';
import { getPosts } from '../../Services/Post/Post';
import Error404Template from '../../PageTemplates/Error404Template/Error404Template';
import LoadingTemplate from './../../PageTemplates/LoadingTemplate/LoadingTemplate'
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../Store";
import {SetLast, SetLoading, SetPage, SetPosts} from "../../Store/PostsPage/PostsPageActions";

const Posts: React.FC = () => {
  const postsPage = useSelector((state: AppState) => state.postPage);
  const dispatch = useDispatch();
  const [is404] = useState<boolean>();


  useEffect(() => {
    if ( !postsPage.last && (postsPage.page * 3) > postsPage.posts.length ) {
      getPosts(postsPage.page).then((resp) => {
        let newData = postsPage.posts.concat(resp)

        dispatch(SetPosts(newData))
        dispatch(SetLoading(false))
        if (resp.length < 3) {
          dispatch(SetLast(true));
        }
      });
    }
    // eslint-disable-next-line
  }, [postsPage.page]);

  if (postsPage.loading) {
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
            postsPage.posts.map((post: any, index: any) => <PostCard key={index} post={post} />)
          }

          <div style={{ width: "100%" }}></div>

          {
            !postsPage.last ? (
              <button className="ysds-button normal" onClick={() => {
                dispatch(SetPage(postsPage.page + 1))

               
              }}>Load more</button>

            ) : null
          }

        </div>
      </div>
    </section>
  );
};
export default Posts;
