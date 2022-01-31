import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import { Redirect } from "react-router-dom";
import PostComments from "./PostComments";

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/posts">
        <Posts />
      </Route>
      <Route exact path="/posts/:id">
        <PostComments />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      {/* <Route path="*">
        <Posts />
      </Route> */}
      <Redirect to="/posts" />
    </Switch>
  );
}
