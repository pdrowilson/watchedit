import { Button } from '@material-ui/core'
import * as S from './styles'

function WatchlistSlider() {
  return (
    <S.SliderContainer>
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
    </S.SliderContainer>
  )
}

export default WatchlistSlider
