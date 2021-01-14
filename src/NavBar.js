import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ toggle }) => {
  return (
    <section className={toggle ? "categories" : "hide"}>
      <nav>
        <Link to="/">
          <div className={toggle ? "home" : "hide"}>
            <i className="fas fa-home"></i>
            <h1>Home</h1>
          </div>
        </Link>
        <Link to="/trending">
          <div className={toggle ? "trending" : "hide"}>
            <i className="fas fa-fire"></i>
            <h1>Trending</h1>
          </div>
        </Link>
        <Link to="/subscriptions">
          <div className={toggle ? "subscriptions" : "hide"}>
            <i className="fas fa-play"></i>
            <h1>Subscriptions</h1>
          </div>
        </Link>
      </nav>
    </section>
  );
};

export default NavBar;
