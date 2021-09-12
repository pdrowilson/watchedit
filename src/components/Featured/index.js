import * as S from './styles'
import img from '../../assets/img-movie.jpg'
import { Button } from '@material-ui/core'

function Featured() {
  return (
    <S.FeaturedContainer>
      <S.GridWrapper>
        <S.InfoContainer>
          <p>2021</p>
          <h1>Once Upon a Time... In Hollywood</h1>
          <div>
            <h2>7.7</h2>
            <span>10</span>
          </div>
          <div>
            <Button>Add to Watchlist</Button>
          </div>
        </S.InfoContainer>
        <S.ImgContainer>
          <img src={img} alt="img" />
        </S.ImgContainer>
      </S.GridWrapper>
    </S.FeaturedContainer>
  )
}

export default Featured
