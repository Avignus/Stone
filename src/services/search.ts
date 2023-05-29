import API from './unsplash';

export interface SearchPhotosParams {
  query: string;
  page?: number;
  per_page?: number;
  order_by?: 'relevant' | 'latest';
  collections?: string;
  content_filter?: 'low' | 'high';
}

const SearchService = {
  searchPhotos(params?: SearchPhotosParams) {
    return API.get('/search/photos', {
      params,
    });
  },
};

export default SearchService;
