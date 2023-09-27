import axios from 'axios';

class IdeasAPI {
  constructor() {
    this._apiUrl = 'http://localhost:5000/ideas';
  }

  getIdeas() {
    return axios.get(this._apiUrl);
  }

  createIdea(data) {
    return axios.post(this._apiUrl, data);
  }
}

export default new IdeasAPI();
