import React, { useState, useEffect } from "react";
import "./directory.scss";
import { sectionsData } from "./directory-data";
import MenuItem from "../menu-item/menu-item";

const Directory = (props) => {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    setSections(sectionsData);
  }, []);
  return (
    <div className="directory-menu">
      {sections.map(({ title, id, imageUrl, size }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size || ""}
        />
      ))}
    </div>
  );
};

export default Directory;
