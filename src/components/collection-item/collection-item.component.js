import React from "react";

import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className="collection-item">
      <div
        className="collection-item-img"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="collection-item-footer">
        <span className="collection-item-title">{name}</span>
        <span className="collection-item-price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
