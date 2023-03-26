import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = 'fba338e92d7feb991f2d168ce8330321';

export async function fetchTrending() {
  const response = await axios.get('/3/trending/movie/day', {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data;
}

export async function fetchMovie(id) {
  const response = await axios.get(`/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data;
}

export async function fetchCast(id) {
  const response = await axios.get(`/3/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data;
}

export async function fetchReviews(id) {
  const response = await axios.get(`/3/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });

  return response.data;
}

export async function fetchKeyWord(value) {
  const response = await axios.get(`/3/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query: value,
    },
  });

  return response.data;
}
