import * as S from './styles'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

function Arrows({ prevSlide, nextSlide }) {
  return (
    <S.Arrow>
      <span onClick={prevSlide}>
        <ArrowBack fontSize="large" />
      </span>
      <span onClick={nextSlide}>
        <ArrowForward fontSize="large" />
      </span>
    </S.Arrow>
  )
}

export default Arrows
