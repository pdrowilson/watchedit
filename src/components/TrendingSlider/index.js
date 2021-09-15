import { useState } from 'react'

import SliderContent from './SliderContent'
import Arrows from './Arrows'

function Featured({ trendingMovieList }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const len = trendingMovieList.length - 1

  console.log(len, 'len')

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
