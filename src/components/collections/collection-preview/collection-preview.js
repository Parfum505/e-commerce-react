import React from "react";
import {
  CollectionPreviewContainer,
  CollectionItemsContainer,
} from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, routeName, items }) => {
  return (
    <CollectionPreviewContainer>
      <h1>{title.toUpperCase()}</h1>
      <CollectionItemsContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </CollectionItemsContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
