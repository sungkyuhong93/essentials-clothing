import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      onClick={() => history.push(`${match.url}${linkUrl}`)}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className={`${size} homepage-menu-item`}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default withRouter(MenuItem);
