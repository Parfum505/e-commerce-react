import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop-selectors";
import WithSpinner from "../../hoc/with-spinner/with-spinner";
import Collections from "./collections";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionsContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collections);

export default CollectionsContainer;
