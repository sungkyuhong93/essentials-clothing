import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./directory.styles.scss";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => {
  return (
    <div className="homepage-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
