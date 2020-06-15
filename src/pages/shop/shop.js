import React, { useState, useEffect } from "react";
import SHOP_DATA from "../../data/shop-data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

const ShopPage = (props) => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    setCollections(SHOP_DATA);
  }, []);
  return (
    <div className="pages shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default ShopPage;
