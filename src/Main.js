import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Tracks from "./Tracks/index.js";
import Contact from "./Contact";

import "./index.css"

class Main extends Component {

  render() {
    return (


      <HashRouter>
        <header id="box-1" class="box">


          <div>
            <ul class="header">
              <li><NavLink to="/">Underground Sound</NavLink></li>
              <li><NavLink to="/tracks">Tracks</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>

            <main class="content">
              <Route exact path="/" component={Home} />
              <Route path="/tracks" component={Tracks} />
              <Route path="/contact" component={Contact} />

            </main>
          </div>
        </header>
      </HashRouter>
    );
  }
}
export default Main;