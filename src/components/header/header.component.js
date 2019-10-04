import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
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
    </div>
  </div>
);

export default Header;
