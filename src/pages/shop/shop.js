import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop-actions";
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

const ShopPage = ({ match, updateCollectionsHandler }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    let unsubscribeFromSnapshot = collectionRef.onSnapshot((snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollectionsHandler(collectionsMap);
      setLoading(false);
    });
    return () => unsubscribeFromSnapshot();
  }, [updateCollectionsHandler]);

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

const mapDispatchToProps = (dispatch) => ({
  updateCollectionsHandler: (collections) =>
    dispatch(updateCollections(collections)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
