import circle from '../../assets/circle.png'
import circleLines from '../../assets/circle-lines.png'
import * as S from './styles'

import Featured from '../../components/Featured'

import { useTrending } from '../../hooks/useTrending'

import { useEffect } from 'react'
function Home() {
  const { trendingMovieList, trendingMovies } = useTrending()
  console.log(trendingMovieList, 'trendingMovieList')

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
      {trendingMovieList.map((movie, key) => (
        <Featured key={key} movie={movie} />
      ))}
    </S.HomeContainer>
  )
}

export default Home
