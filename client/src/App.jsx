import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Players from "./pages/Players";
import News from "./pages/News";

const App = () => (
  <Fragment>
    <Header />
    <div className="page-content">
      <div className="content-container">
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Players} path="/players" />
          <Route component={News} path="/news" />
        </Switch>
      </div>
    </div>
    <Footer />
  </Fragment>
);

export default App;
