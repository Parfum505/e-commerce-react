import React from "react";
import { Route } from "react-router-dom";
import Collections from "../../components/collections/collections";
import CollectionPage from "../collection/collection";

const ShopPage = ({ match }) => (
  <div className="pages shop-page">
    <Route path={`${match.path}`} exact component={Collections} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
