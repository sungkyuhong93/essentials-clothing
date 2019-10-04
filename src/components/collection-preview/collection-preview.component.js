import React from "react";

import "./collection-preview.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1>{title.toUpperCase()}</h1>
      <div className="collection-preview-row">
        {items
          .filter((item, idx) => {
            return idx < 4;
          })
          .map(({ id, ...otherItemProps }) => {
            return <CollectionItem id={id} {...otherItemProps} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
