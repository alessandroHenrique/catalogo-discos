import DiscApi from '../../../api/discs';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

describe('Test all discs endpoints', () => {
  it('should return a disc object from the addDisc Api call', () => {
    const disc = {
      id: 1,
      title: 'Strange Trails',
      author: 'Lord Huron',
      disc_collection_id: 1
    }

    mock.onPost('/api/discs').reply(201, {
      data: disc
    });

    return DiscApi.addDisc(disc).then((response) => {
      expect(response.data).toEqual(disc);
    });
  });

  it('should return a updated disc object from the updateDisc Api call', () => {
    const updatedDisc = {
      id: 1,
      title: 'Strange Trails',
      author: 'Lord Huron',
      disc_collection_id: 1
    }
    mock.onPut(`/api/discs/${updatedDisc.id}`).reply(201, {
      data: updatedDisc
    });

    return DiscApi.updateDisc(updatedDisc).then((response) => {
      expect(response.data).toEqual(updatedDisc);
    });
  });

  it('should delete disc object by its id from the discDelete Api call', () => {
    const discId = 1;
    mock.onDelete(`/api/discs/${discId}`).reply(200);

    return DiscApi.deleteDisc(discId).then((response) => {
      expect(response).toBe(discId);
    });
  });
});
