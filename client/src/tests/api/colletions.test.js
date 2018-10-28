import CollectionApi from '../../api/collections';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('Test all collection endpoints', () => {
  it('should return all collection objects from the fetchCollections Api call', () => {
    const collection = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: []
    };

    mock.onGet('/api/collections').reply(200, {
      data: [collection]
    });

    const expectedData = [collection];

    return CollectionApi.fetchCollections().then((response) => {
      expect(response.data).toEqual(expectedData);
    });
  });

  it('should return a collection object from the addCollection Api call', () => {
    const collection = {
      id: 1,
      name: 'Sucessos dos anos 2000',
      discs: []
    };

    mock.onPost('/api/collections').reply(201, {
      data: collection
    });

    return CollectionApi.addCollection(collection.name).then((response) => {
      expect(response.data).toEqual(collection)
    });
  });

  it('should delete collection object by its id from the deleteCollection Api call', () => {
    const collectionId = 1;
    mock.onDelete(`/api/collections/${collectionId}`).reply(200);

    return CollectionApi.deleteCollection(collectionId).then((response) => {
      expect(response).toBe(collectionId);
    });
  });

  it('should update collection object by its id from the updateCollection Api call', () => {
    const collectionId = 1;
    const updatedCollection = {
      id: 1,
      name: 'Sucessos dos anos 2001',
      discs: []
    };
    mock.onPut(`/api/collections/${collectionId}`).reply(200, {
      data: updatedCollection
    });

    return CollectionApi.updateCollection(collectionId, 'Sucessos dos anos 2001').then((response) => {
      expect(response.data).toEqual(updatedCollection);
    });
  });
})
