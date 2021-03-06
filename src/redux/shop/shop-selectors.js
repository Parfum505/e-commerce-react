import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const selectShopCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections
);
export const selectIsCollectionsFetching = createSelector(
  [shopSelector],
  (shop) => shop.isFetching
);
export const selectFetchingCollectionsError = createSelector(
  [shopSelector],
  (shop) => shop.errors
);
export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
export const selectCollectionByUrl = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );
