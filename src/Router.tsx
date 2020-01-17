import React from "react";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Global/Header/Header";
import { PagesRoute, PostRoute, FrontPageRoute } from "./Config/routes";
import Footer from "./Components/Global/Footer/Footer";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Switch>
          <Route path={PostRoute}>
            <h1>Post</h1>
          </Route>
          <Route path={PagesRoute}>
            <h1>Page</h1>
          </Route>
          <Route exact path={FrontPageRoute}>
            <h1>Front</h1>
          </Route>
          <Route path="*">
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default Router;
