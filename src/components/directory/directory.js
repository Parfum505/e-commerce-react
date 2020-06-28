import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { DirectoryMenuContainer } from "./directory-menu.styles";
import MenuItem from "../menu-item/menu-item";
import { selectDirectorySections } from "../../redux/directory/directory-selector";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
