import React from "react";
import { connect } from "react-redux";
import { Title, Items } from "./collection.styles";
import { selectCollectionByUrl } from "../../redux/shop/shop-selectors";
import CollectionItem from "../../components/collections/collection-item/collection-item";

const CollectionPage = ({ collection }) => (
  <>
    <Title>{collection.title}</Title>
    <Items>
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </Items>
  </>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollectionByUrl(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
