import {
  addDiscSuccess,
  updateDiscSuccess,
  deleteDiscSuccess
} from '../../actions/discs';
import {
  ADD_DISC,
  EDIT_DISC,
  DELETE_DISC
} from '../../actionTypes/discs';

describe('Tests for each disc action', () => {
  it('should return an action object for the addDisc action', () => {
    const disc = {
      id: 1,
      title: 'Strange Trails',
      author: 'Lord Huron',
      collection_id: 1
    }

    const result = addDiscSuccess(disc);
    expect(result).toEqual({
      type: ADD_DISC,
      disc
    });
  });

  it('should return an action object for the updateDisc action', () => {
    const disc = {
      id: 1,
      title: 'Strange Trails',
      author: 'Lord Huron',
      collection_id: 1
    }

    const result = updateDiscSuccess(disc);
    expect(result).toEqual({
      type: EDIT_DISC,
      disc
    });
  });

  it('should return an action object for the deleteDisc action', () => {
    const discId = 1;
    const collectionId = 2;

    const result = deleteDiscSuccess(discId, collectionId);
    expect(result).toEqual({
      type: DELETE_DISC,
      id: discId,
      collectionId
    });
  });
});
