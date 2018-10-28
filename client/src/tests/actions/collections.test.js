import {
  addCollectionSuccess,
  updateCollectionSuccess,
  deleteCollectionSuccess,
  fetchCollectionsSuccess
} from '../../actions/collections';
import {
  ADD_COLLECTION,
  EDIT_COLLECTION,
  DELETE_COLLECTION,
  FETCH_COLLECTIONS
} from '../../actionTypes/collections';

describe('Tests for each collection action', () => {
  it('should return an action object for the addCollection action', () => {
    const data = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: []
    };

    const result = addCollectionSuccess(data);
    expect(result).toEqual({
      type: ADD_COLLECTION,
      collection: data
    });
  });

  it('should return an action object for the editCollection action', () => {
    const data = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: []
    };

    const result = updateCollectionSuccess(data.id, data);
    expect(result).toEqual({
      type: EDIT_COLLECTION,
      id: data.id,
      collection: data
    });
  });

  it('should return an action object for the deleteCollection action', () => {
    const collectionId = 1;
    const result = deleteCollectionSuccess(collectionId);
    expect(result).toEqual({
      type: DELETE_COLLECTION,
      id: collectionId
    });
  });

  it('should return an action object for the fetchCollections action', () => {
    const data = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: []
    }
    const collections = [
      data
    ]
    const result = fetchCollectionsSuccess(collections);
    expect(result).toEqual({
      type: FETCH_COLLECTIONS,
      collections: [data]
    })
  });
});
