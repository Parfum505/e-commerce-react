import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop-actions";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../redux/shop/shop-selectors";
import Collections from "../../components/collections/collections";
import CollectionPage from "../collection/collection";
import { PageContainer } from "../pages.styles";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import WithSpinner from "../../hoc/with-spinner/with-spinner";

const CollectionsWithSpinner = WithSpinner(Collections);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, collections, updateCollectionsHandler }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!collections) {
      const collectionRef = firestore.collection("collections");
      collectionRef.onSnapshot((snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollectionsHandler(collectionsMap);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [collections, updateCollectionsHandler]);

  return (
    <PageContainer>
      <Route
        path={`${match.path}`}
        exact
        render={(props) => (
          <CollectionsWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </PageContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections,
});
const mapDispatchToProps = (dispatch) => ({
  updateCollectionsHandler: (collections) =>
    dispatch(updateCollections(collections)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
