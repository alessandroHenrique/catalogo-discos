import axios from 'axios';

class CollectionApi {
  static fetchCollections() {
    const header = {'content-type': 'application/json' };
    return axios.get('/api/collections', {header,})
      .then((response) => {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  static addCollection(title) {
    const header = {'content-type': 'application/json' };
    return axios.post('/api/collections', {title,}, {
      header
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    })
  }

  static deleteCollection(id) {
    const header = {'content-type': 'application/json' };
    return axios.delete(`/api/collections/${id}`, {header})
      .then((response) => {
        return id
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static updateCollection(id, title) {
    const header = {'content-type': 'application/json' };
    return axios.put(`api/collections/${id}`, {title}, {header})
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default CollectionApi;
