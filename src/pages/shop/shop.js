import React from "react";
import { Route } from "react-router-dom";
import Collections from "../../components/collections/collections";
import CollectionPage from "../collection/collection";
import {PageContainer} from "../pages.styles";

const ShopPage = ({ match }) => (
  <PageContainer>
    <Route path={`${match.path}`} exact component={Collections} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </PageContainer>
);

export default ShopPage;
