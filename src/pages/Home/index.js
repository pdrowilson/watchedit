import circle from '../../assets/circle.png'
import circleLines from '../../assets/circle-lines.png'
import * as S from './styles'

import TrendingSlider from '../../components/TrendingSlider'
import WatchlistSlider from '../../components/WatchlistSlider'

function Home() {
  return (
    <S.HomeContainer>
      <img src={circle} alt="img" />
      <img src={circleLines} alt="img" />
      <TrendingSlider />
      <WatchlistSlider />
    </S.HomeContainer>
  )
}

export default Home
