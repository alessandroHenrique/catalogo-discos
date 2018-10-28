import axios from 'axios';

class DiscApi {
  static addDisc(disc) {
    const header = { 'content-type': 'application/json' };
    return axios.post('/api/discs', {...disc}, {header})
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static updateDisc(disc) {
    const header = { 'content-type': 'application/json' };
    return axios.put(`api/discs/${disc.id}`, {...disc}, {header})
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static deleteDisc(id) {
    const header = { 'content-type': 'application/json' };
    return axios.delete(`/api/discs/${id}`, {header})
      .then((response) => {
        return id;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default DiscApi;
