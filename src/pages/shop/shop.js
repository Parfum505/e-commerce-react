import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsAsync } from "../../redux/shop/shop-actions";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop-selectors";
import CollectionsContainer from "../../components/collections/collections-container";
import CollectionPageContainer from "../collection/collection-container";
import { PageContainer } from "../pages.styles";

const ShopPage = ({ match, collections, fetchCollectionsHandler }) => {
  useEffect(() => {
    if (!collections) {
      fetchCollectionsHandler();
    }
  }, [collections, fetchCollectionsHandler]);

  return (
    <PageContainer>
      <Route path={`${match.path}`} exact component={CollectionsContainer} />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </PageContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsHandler: () => dispatch(fetchCollectionsAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
