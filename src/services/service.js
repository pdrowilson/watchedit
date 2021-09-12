import axios from './api'
const PATH_API = 'https://api.themoviedb.org/3'
const API_KEY = 'ca623f9805ee9084c2f971bd315e370a'

export const getTrendingMovies = () => {
  return axios.get(`${PATH_API}/trending/movie/week?api_key=${API_KEY}`)
}
