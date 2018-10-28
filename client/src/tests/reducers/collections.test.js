import collectionsReducer from '../../reducers/collections';
import { ADD_COLLECTION, EDIT_COLLECTION, DELETE_COLLECTION, FETCH_COLLECTIONS } from '../../actionTypes/collections';
import { ADD_DISC, EDIT_DISC, DELETE_DISC } from '../../actionTypes/discs';

describe('Tests for the collecions action type', () => {
  it('should return the initial state', () => {
    expect(collectionsReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_COLLECTION', () => {
    const data = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: []
    };

    expect(collectionsReducer([], {
      type: ADD_COLLECTION,
      collection: data
    })).toEqual([data])
  });

  it('should handle EDIT_COLLECTION', () => {
    const data = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: []
    };

    expect(collectionsReducer([data], {
      type: EDIT_COLLECTION,
      id: 1,
      collection: {
        id: 1,
        name: 'Sucessos dos anos 2010',
        discs: []
      }
    })).toEqual([
      {
        id: 1,
        name: 'Sucessos dos anos 2010',
        discs: []
      }
    ]);
  });

  it('should handle DELETE_COLLECTION', () => {
    const data = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: []
    };

    expect(collectionsReducer([data], {
      type: DELETE_COLLECTION,
      id: 1
    })).toEqual([]);
  });

  it('should handle FETCH_COLLECTIONS', () => {
    const data = [
      {
        id: 1,
        name: 'Sucessos dos anos 2000',
        discs: []
      },
      {
        id: 2,
        name: 'Sucessos dos anos 2001',
        discs: []
      }
    ];

    expect(collectionsReducer([], {
      type: FETCH_COLLECTIONS,
      collections: data
    })).toEqual(data);
  });
});

describe('Tests for the discs action type', () => {
  it('should handle ADD_DISC', () => {
    const disc = {
      id: 1,
      title: 'Strange Trails',
      author: 'Lord Huron',
      disc_collection_id: 1
    }
    const collection = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: []
    }

    expect(collectionsReducer([collection], {
      type: ADD_DISC,
      disc
    })).toEqual([
      collection
    ])
  });

  it('should handle EDIT_DISC', () => {
    const disc = {
      id: 1,
      title: 'Strange Trails',
      author: 'Lord Huron',
      disc_collection_id: 1
    }
    const collection = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: [disc]
    }
    const updatedDisc = {
      ...disc,
      title: 'Strange Trails2'
    }
    const updatedCollection = {
      ...collection,
      discs: [updatedDisc]
    }

    expect(collectionsReducer([collection], {
      type: EDIT_DISC,
      disc: updatedDisc
    })).toEqual([updatedCollection])
  });

  it('should handle DELETE_DISC', () => {
    const disc = {
      id: 1,
      title: 'Strange Trails',
      author: 'Lord Huron',
      disc_collection_id: 1
    }
    const collection = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: [disc]
    }
    const updatedCollection = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: []
    }

    expect(collectionsReducer([collection], {
      type: DELETE_DISC,
      id: 1,
      collectionId: 1
    })).toEqual([updatedCollection])
  });
});
