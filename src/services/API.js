import { url, apiKey,AUTH_KEY } from "helpers/constants.js";
import axios from "axios";





// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
  
export const getTrendingMovies = async () => {
const options = {
  method: 'GET',
  url: `${url}/trending/movie/day`,
  params: {language: 'en-US', api_key: apiKey},
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_KEY}`
  }
};
    const  data = await axios(options);
    return data;
  }





// пошук фільму за ключовим словом на сторінці фільмів
export const getSearchMovies = async (query) => {
  const options = {
  method: 'GET',
  
  url: `${url}/search/movie`,
  params: {language: 'en-US', api_key: apiKey, query: query, page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${AUTH_KEY}`
  }
};
    const response = await axios(options);
    return response.data;
  }
  



// запит повної інформації про фільм для сторінки кінофільму



export const getMovieInfo = async id => {
  const options = {
    method: 'GET',
    url: `${url}/movie/${id}`,
    params: {
      language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };
    const {data} = await axios.request(options);
    return data;
  }

  
  
// запит інформації про акторський склад для сторінки кінофільму

export const getMovieCast = async (id) => {
  const options = {
    method: 'GET',
    url: `${url}/movie/${id}/credits`,
    params: {
      language: 'en-US', аpi_key: apiKey},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };
    const {data} = await axios.request(options);
    return data.cast;
  
  }


//  запит оглядів для сторінки кінофільму

export const getMovieReviews = async (id) => {
  const options = {
    method: 'GET',
    url: `${url}/movie/${id}/reviews`,
    params: {
      language: 'en-US',  page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`
    }
  };

    const {data} = await axios.request(options);
    return data.results;
}
