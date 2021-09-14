import { useEffect, useState } from 'react'

import { useTrending } from '../../hooks/useTrending'
import SliderContent from './SliderContent'
import Arrows from './Arrows'

function Featured() {
  const { trendingMovieList, trendingMovies } = useTrending()

  const [activeIndex, setActiveIndex] = useState(0)
  const len = trendingMovieList.length - 1

  console.log(len, 'len')

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
    <>
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      ></Arrows>
      <SliderContent
        activeIndex={activeIndex}
        trendingMovieList={trendingMovieList}
      ></SliderContent>
    </>
  )
}

export default Featured
