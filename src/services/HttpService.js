import axios from 'axios';

class HttpService {
  constructor(options = {}) {
    this.client = axios.create(options);
  }
}
const options = {
  baseURL: 'https://api.github.com/gists',
};
const httpService = new HttpService(options);

export default httpService;
