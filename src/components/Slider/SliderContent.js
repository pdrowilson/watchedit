import * as S from './styles'
import { Button } from '@material-ui/core'

function Slider({ activeIndex, trendingMovieList }) {
  return (
    <>
      {trendingMovieList.map((movie, index) => (
        <S.FeaturedContainer key={index} inactive={index != activeIndex}>
          <S.GridWrapper>
            <S.InfoContainer>
              <p>{movie.release_date.substring(0, 4)}</p>
              <h1>{movie.original_title}</h1>
              <div>
                <h2>{movie.vote_average}</h2>
                <span>10</span>
              </div>
              <Button>Add to Watchlist</Button>
            </S.InfoContainer>
            <S.ImgContainer>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
            </S.ImgContainer>
            <S.OverviewContainer>{movie.overview}</S.OverviewContainer>
          </S.GridWrapper>
        </S.FeaturedContainer>
      ))}
    </>
  )
}

export default Slider
