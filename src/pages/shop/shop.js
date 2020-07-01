import React, { useEffect } from "react";
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

const ShopPage = ({ match, collections, updateCollectionsHandler }) => {
  useEffect(() => {
    if (!collections) {
      const collectionRef = firestore.collection("collections");
      collectionRef.onSnapshot((snapShot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
        updateCollectionsHandler(collectionsMap);
      });
    }
  }, [collections, updateCollectionsHandler]);

  return (
    <PageContainer>
      <Route path={`${match.path}`} exact component={Collections} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
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
