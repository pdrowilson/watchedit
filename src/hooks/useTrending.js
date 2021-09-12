import { useState } from 'react'
import { getTrendingMovies } from '../services/service'

export function useTrending() {
  const [trendingMovieList, setTrendingMovieList] = useState([])

  const trendingMovies = async () => {
    const response = await getTrendingMovies()
    console.log(response.data.results, 'response')
    setTrendingMovieList(response.data.results)
  }

  return { trendingMovieList, trendingMovies }
}
