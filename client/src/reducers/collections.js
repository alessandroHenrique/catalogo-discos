import {
  ADD_COLLECTION,
  EDIT_COLLECTION,
  DELETE_COLLECTION,
  FETCH_COLLECTIONS
} from '../actionTypes/collections';
import {
  ADD_DISC,
  EDIT_DISC,
  DELETE_DISC
} from '../actionTypes/discs';

const initialState = [];

const collectionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COLLECTION:
      return [
        ...state,
        {
          ...action.collection,
        }
      ];
    case DELETE_COLLECTION:
      return state.filter((collection) => collection.id !== action.id ? collection : false);
    case EDIT_COLLECTION:
      return state.map((collection) => {
        if (collection.id === action.id) {
          return {
            ...collection,
            ...action.collection
          }
        }
        return collection;
      });
    case FETCH_COLLECTIONS:
      return [
        ...action.collections
      ];
    case ADD_DISC:
      return state.map((collection) => {
        if (collection.id === action.disc.disc_collection_id) {
          collection.discs.push(action.disc);
        }
        return collection;
      });
    case DELETE_DISC:
      return state.filter((collection) => {
        if (collection.id === action.collectionId) {
          collection.discs = collection.discs.filter((disc) => disc.id !== action.id ? disc : false);
        }
        return collection;
      });
    case EDIT_DISC:
      return state.map((collection) => {
        if (collection.id === action.disc.disc_collection_id) {
          collection.discs = collection.discs.map((disc) => disc.id === action.disc.id ? action.disc : disc)
        }
        return collection;
      });
    default:
      return state;
  }
};

export default collectionsReducer;
