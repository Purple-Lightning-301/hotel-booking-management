import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import Register from "./pages/Register/Register";
import Main from "./components/organisms/Main";
import ListBooking from "./pages/ListBooking/ListBooking";

export default function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/search/:exampleParamsWord">
          <Search/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          {/*ở đây gọi các component*/}
          <Login />
        </Route>
        <Route path="/main">
          <Home/>
        </Route>
        <Route path="/listbooking">
          <ListBooking/>
        </Route>
        <Route path="/">
        <Login/>
        </Route>
      </Switch>
    </Router>
  );
}
