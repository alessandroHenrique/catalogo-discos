import CollectionApi from '../api/collections';
import {
  ADD_COLLECTION,
  EDIT_COLLECTION,
  DELETE_COLLECTION,
  FETCH_COLLECTIONS
} from '../actionTypes/collections';

export const addCollectionSuccess = (collection) => ({
  type: ADD_COLLECTION,
  collection
});

export const addCollection = (title) => {
  return (dispatch, getState) => {
    return CollectionApi.addCollection(title).then((data) => {
      return dispatch(addCollectionSuccess(data));
    });
  };
};

export const fetchCollectionsSuccess = (collections) => ({
  type: FETCH_COLLECTIONS,
  collections
});

export const fetchCollections = () => {
  return (dispatch, getState) => {
    return CollectionApi.fetchCollections().then((data) => {
      return dispatch(fetchCollectionsSuccess(data));
    });
  };
};

export const deleteCollectionSuccess = (id) => ({
  type: DELETE_COLLECTION,
  id
});

export const deleteCollection = (id) => {
  return (dispatch, getState) => {
    return CollectionApi.deleteCollection(id).then((id) => {
      return dispatch(deleteCollectionSuccess(id));
    });
  };
};

export const updateCollectionSuccess = (id, collection) => ({
  type: EDIT_COLLECTION,
  id,
  collection
});

export const updateCollection = (id, name) => {
  return (dispatch, getState) => {
    return CollectionApi.updateCollection(id, name).then((data) => {
      return dispatch(updateCollectionSuccess(id, data));
    });
  };
}
