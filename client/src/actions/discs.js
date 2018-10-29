import DiscApi from '../api/discs';
import {
  ADD_DISC,
  EDIT_DISC,
  DELETE_DISC
} from '../actionTypes/discs';

export const addDiscSuccess = (disc) => ({
  type: ADD_DISC,
  disc
});

export const addDisc = (disc) => {
  return (dispatch, getState) => {
    return DiscApi.addDisc(disc).then((data) => {
      return dispatch(addDiscSuccess(data));
    });
  };
};

export const updateDiscSuccess = (disc) => ({
  type: EDIT_DISC,
  disc
});

export const updateDisc = (disc) => {
  return (dispatch, getState) => {
    return DiscApi.updateDisc(disc).then((data) => {
      return dispatch(updateDiscSuccess(data));
    });
  };
};

export const deleteDiscSuccess = (id, collectionId) => ({
  type: DELETE_DISC,
  id,
  collectionId
});

export const deleteDisc = (id, collection_id) => {
  return (dispatch, getState) => {
    return DiscApi.deleteDisc(id).then((id) => {
      return dispatch(deleteDiscSuccess(id, collection_id));
    });
  };
};
