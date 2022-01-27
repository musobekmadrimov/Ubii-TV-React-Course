import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import { Redirect } from "react-router-dom";

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/error">
        <Error />
      </Route>
      <Redirect to="/error" />
    </Switch>
  );
}
