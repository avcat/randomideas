import axios from 'axios';

class IdeasAPI {
  constructor() {
    this._apiUrl = 'http://localhost:5000/ideas';
  }

  getIdeas() {
    return axios.get(this._apiUrl);
  }
}

export default new IdeasAPI();
