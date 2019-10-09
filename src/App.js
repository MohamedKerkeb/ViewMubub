import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Advert from "./components/Advert/Advert";
import AllWilaya from "./components/Wilaya/AllWilaya";
import Connect from "./components/Connect/Connect";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <div className="menu">
            <h2>
              <Link to="/">Mubub</Link>
            </h2>
            <nav>
              <ul>
                <li>
                  <Link to="/connect">Sign up / Sign in</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <Route exact path="/" component={AllWilaya}></Route>
        <Route exact path="/connect" component={Connect}></Route>
      </Router>
    </div>
  );
}

export default App;
