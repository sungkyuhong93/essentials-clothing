import React from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils.js";

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="header-name">
      <Link to="/">SUNGS ESSENTIALS</Link>
    </div>

    <div className="header-links">
      <div className="header-links-link">
        <Link to="/">About</Link>
      </div>
      <div className="header-links-link">
        <Link to="/shop">Shop</Link>
      </div>
      <div className="header-links-link">
        <Link to="/contact">Contact</Link>
      </div>
      {currentUser ? (
        <div className="header-link-links" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </div>
  </div>
);

export default Header;
