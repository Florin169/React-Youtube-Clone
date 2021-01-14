import React, { useState } from "react";
import NavBar from "./NavBar";
import Content from "./Content";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SingleVideo from "./SingleVideo";
import requests from "./requests";
import Search from "./Search";

const App = () => {
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(true);

  const inputHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="main">
      <Router>
        <nav className="navbar">
          <Link to="/">
            <div className="logo">
              <i
                class="bars fas fa-bars"
                onClick={() => setToggle(!toggle)}
              ></i>
              <i className="youtube fab fa-youtube"></i>
              <h1>Youtube</h1>
            </div>
          </Link>
          <form type="submit" onSubmit={inputHandler}>
            <input
              className="input"
              placeholder="Search"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Link to="/search">
              <button type="submit" className="btn">
                <i className="fas fa-search"></i>
              </button>
            </Link>
          </form>
          <img src="" alt="" />
        </nav>
        <Switch>
          <div className="side-by-side">
            <NavBar toggle={toggle} />
            <Route exact path="/">
              <Content fetchURL={requests.fetchHome} />
            </Route>
            <Route path="/trending">
              <Content fetchURL={requests.fetchTrending} />
            </Route>
            <Route path="/subscriptions">
              <Content title="Subscriptions" />
            </Route>
            <Route path="/player/:videoId/:title">
              <SingleVideo />
            </Route>
            <Route path="/search">
              <Search text={text} />
            </Route>
          </div>
        </Switch>
      </Router>
    </section>
  );
};

export default App;
