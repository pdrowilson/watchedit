import * as S from './styles'

import Featured from '../../components/Featured'

import { useTrending } from '../../hooks/useTrending'

import { useEffect } from 'react'
function Home() {
  const { trendingMovieList, trendingMovies } = useTrending()

  useEffect(() => {
    async function getTrendingList() {
      try {
        await trendingMovies()
        console.log(trendingMovieList, 'trendingMovieList')
      } catch (error) {
        alert('Ocorreu um erro ao buscar os items')
      }
    }
    getTrendingList()
  }, [])
  return (
    <S.HomeContainer>
      <div>
        {trendingMovieList.map((movie, key) => (
          <Featured key={key} movie={movie} />
        ))}
      </div>
    </S.HomeContainer>
  )
}

export default Home
