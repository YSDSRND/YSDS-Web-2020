import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Global/Header/Header";
import { PagesRoute, PostRoute, FrontPageRoute, CasesRoute,SubPagesRoute } from "./Config/routes";
import Footer from "./Components/Global/Footer";
import Post from "./Pages/Post";
import Page from "./Pages/Page";
import FrontPage from "./Pages/FrontPage";
import Case from "./Pages/Case";
import Error404Template from "./PageTemplates/Error404Template/Error404Template";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path={PostRoute}>
            <Post />
          </Route>
          <Route path={CasesRoute}>
            <Case />
          </Route>
          <Route path={PagesRoute}>
            <Page />
          </Route>
          <Route path={SubPagesRoute}>
            <Page />
          </Route>
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
  );
};

export default Router;
