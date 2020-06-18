import React from "react";
import { connect } from "react-redux";
import "./collection.scss";
import { selectCollection } from "../../redux/shop/shop-selectors";
import CollectionItem from "../../components/collections/collection-item/collection-item";

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h2 className="title">{collection.title}</h2>
    <div className="items">
      {collection.items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
