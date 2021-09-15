import { Button } from '@material-ui/core'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
import { useState } from 'react'
import * as S from './styles'

function WatchlistSlider({ trendingMovieList }) {
  const [scrollX, setScrollX] = useState(0)

  const sliderSize = trendingMovieList.length * 210

  const handleLeftScroll = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if (x > 0) {
      x = 0
    }
    setScrollX(x)
    console.log(scrollX, 'right')
  }
  const handleRightScroll = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    console.log(sliderSize)
    if (window.innerWidth - sliderSize > x) {
      x = window.innerWidth - sliderSize - 30
    }
    setScrollX(x)
    console.log(scrollX, 'left')
  }

  return (
    <>
      <S.WatchlistWrapper>
        <S.Header>
          <S.TitleContainer>
            <h1>My Watchlist</h1>
            <div></div>
          </S.TitleContainer>
          <S.ButtonContainer>
            <Button>Explore</Button>
          </S.ButtonContainer>
          <S.SubtitleContainer>
            A curated list of Movies and TV Shows selected for you in your
            watchlist
          </S.SubtitleContainer>
        </S.Header>
      </S.WatchlistWrapper>
      <S.ArrowContainer>
        <S.Arrows>
          <span>
            <ArrowBack fontSize="large" onClick={handleLeftScroll} />
            <ArrowForward fontSize="large" onClick={handleRightScroll} />
          </span>
        </S.Arrows>
      </S.ArrowContainer>
      <S.WatchlistSlider style={{ marginLeft: scrollX, maxWidth: sliderSize }}>
        <S.SliderContent>
          <S.Row>
            {trendingMovieList?.map((movie, index) => (
              <S.Movie
                key={index}
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
              />
            ))}
          </S.Row>
        </S.SliderContent>
      </S.WatchlistSlider>
    </>
  )
}

export default WatchlistSlider
