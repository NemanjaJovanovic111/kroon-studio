import ApiService from './ApiService';

const ENDPOINTS = {
  GISTS: '/public?per_page=30&',
};

class GistsService extends ApiService {
  getGists = (page) => {
    return this.apiClient.get(`${ENDPOINTS.GISTS}page=${page}`);
  };
}

export const gistsService = new GistsService();