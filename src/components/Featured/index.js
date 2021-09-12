import * as S from './styles'
import img from '../../assets/img-movie.jpg'
import { Button } from '@material-ui/core'

function Featured({ movie }) {
  return (
    <S.FeaturedContainer>
      <S.GridWrapper>
        <S.InfoContainer>
          <p>{movie.release_date.substring(0, 4)}</p>
          <h1>{movie.original_title}</h1>
          <div>
            <h2>{movie.vote_average}</h2>
            <span>10</span>
          </div>
          <div>
            <Button>Add to Watchlist</Button>
          </div>
        </S.InfoContainer>
        <S.ImgContainer>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
        </S.ImgContainer>
      </S.GridWrapper>
    </S.FeaturedContainer>
  )
}

export default Featured
