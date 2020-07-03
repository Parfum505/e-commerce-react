import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsAsync } from "../../redux/shop/shop-actions";
import { createStructuredSelector } from "reselect";
import {
  selectShopCollections,
  selectIsCollectionsFetching,
} from "../../redux/shop/shop-selectors";
import Collections from "../../components/collections/collections";
import CollectionPage from "../collection/collection";
import { PageContainer } from "../pages.styles";
import WithSpinner from "../../hoc/with-spinner/with-spinner";

const CollectionsWithSpinner = WithSpinner(Collections);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  match,
  isFetching,
  collections,
  fetchCollectionsHandler,
}) => {
  useEffect(() => {
    if (!collections) {
      fetchCollectionsHandler();
    }
  }, [collections, fetchCollectionsHandler]);
  return (
    <PageContainer>
      <Route
        path={`${match.path}`}
        exact
        render={(props) => (
          <CollectionsWithSpinner isLoading={isFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={isFetching} {...props} />
        )}
      />
    </PageContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  isFetching: selectIsCollectionsFetching,
  collections: selectShopCollections,
});
const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsHandler: () => dispatch(fetchCollectionsAsync()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
