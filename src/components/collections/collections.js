import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview, selectFetchingCollectionsError } from "../../redux/shop/shop-selectors";
import CollectionPreview from "./collection-preview/collection-preview";
import ErrorMessage from "../form/error-message/error-message";

const Collections = ({ collections, errors }) => (
  <div className="collections">
    <ErrorMessage message={errors} />
    {collections && collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  errors: selectFetchingCollectionsError,
});
export default connect(mapStateToProps)(Collections);
