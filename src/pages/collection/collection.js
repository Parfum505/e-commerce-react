import React from "react";
import { connect } from "react-redux";
import { Title, Items } from "./collection.styles";
import { selectCollectionByUrl } from "../../redux/shop/shop-selectors";
import CollectionItem from "../../components/collections/collection-item/collection-item";
import ErrorMessage from "../../components/form/error-message/error-message";

const CollectionPage = ({ collection, errors }) => (
  <>
    <ErrorMessage message={errors} />
    {collection && (
      <>
        <Title>{collection.title}</Title>
        <Items>
          {collection.items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </Items>
      </>
    )}
  </>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionByUrl(ownProps.match.params.collectionId)(state),
  errors: state.shop.errors,
});

export default connect(mapStateToProps)(CollectionPage);
