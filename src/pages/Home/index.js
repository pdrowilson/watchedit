import { useEffect } from 'react'

import circle from '../../assets/circle.png'
import circleLines from '../../assets/circle-lines.png'
import * as S from './styles'

import TrendingSlider from '../../components/TrendingSlider'
import WatchlistSlider from '../../components/WatchlistSlider'

import { useTrending } from '../../hooks/useTrending'

function Home() {
  const { trendingMovieList, trendingMovies } = useTrending()

  useEffect(() => {
    async function getTrendingList() {
      try {
        await trendingMovies()
      } catch (error) {
        alert('Ocorreu um erro ao buscar os items')
      }
    }
    getTrendingList()
  }, [])

  return (
    <S.HomeContainer>
      <img src={circle} alt="img" />
      <img src={circleLines} alt="img" />
      <TrendingSlider trendingMovieList={trendingMovieList} />
      <WatchlistSlider trendingMovieList={trendingMovieList} />
    </S.HomeContainer>
  )
}

export default Home
