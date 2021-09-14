import circle from '../../assets/circle.png'
import circleLines from '../../assets/circle-lines.png'
import * as S from './styles'

import Slider from '../../components/Slider'

function Home() {
  return (
    <S.HomeContainer>
      <img src={circle} alt="img" />
      <img src={circleLines} alt="img" />
      <Slider />
    </S.HomeContainer>
  )
}

export default Home
