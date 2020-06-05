import React, { useState, useEffect } from "react";
import "./directory.scss";
import SECTIONS_DATA from "./directory-data";
import MenuItem from "../menu-item/menu-item";

const Directory = (props) => {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(SECTIONS_DATA);
  }, []);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

export default Directory;
