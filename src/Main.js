import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Tracks from "./Tracks";
import Contact from "./Contact";

class Main extends Component {

  render() {
    return (


      <HashRouter>
        <div>
          <h1>Underground Sound</h1>
          <ul className="header">
            <li><a NavLink to='/'>Home</a></li>
            <li><a NavLink to='/tracks'>Tracks</a></li>
            <li><a NavLink to='/contact'>Contact</a></li>
          </ul>

          <div className="content">
            <Route exact='/' component={Home} />
            <Route path='/Tracks' component={Tracks} />
            <Route path='/Contact' component={Contact} />
          </div>
        </div>
      </HashRouter>
    )
  }
}
export default Main;