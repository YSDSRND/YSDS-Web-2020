import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Global/Header/Header';
import {
  PagesRoute, PostRoute, FrontPageRoute, CasesRoute, SubPagesRoute, PostsRoute,
} from './Config/routes';
import Footer from './Components/Global/Footer';
import Post from './Pages/Post';
import Page from './Pages/Page';
import Posts from './Pages/Posts';
import { GetYoastBySlug } from './Services/Pages/Pages';

import FrontPage from './Pages/FrontPage';
import Case from './Pages/Case';
import Error404Template from './PageTemplates/Error404Template/Error404Template';
import { Helmet } from "react-helmet";

const Router: React.FC = () => {
  

  return (
    <>

      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route path={PostRoute}>
              <Post />
            </Route>
            <Route path={PostsRoute}>
              <Posts />
            </Route>

            <Route path={CasesRoute}>
              <Case />
            </Route>

            <Route path={SubPagesRoute} component={() => <Page />} />
            <Route path={PagesRoute} component={() => <Page />} />

            <Route exact path={FrontPageRoute}>
              <FrontPage />
            </Route>
            <Route path="*">
              <Error404Template />
            </Route>
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    </>
  );


}

export default Router;
