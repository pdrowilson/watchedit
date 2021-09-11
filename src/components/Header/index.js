import { useHistory } from 'react-router-dom'

import * as S from './styles'
import { Search, Book } from '@material-ui/icons'

function Header() {
  let history = useHistory()

  function toHome() {
    history.push('/')
  }
  function toWatchlist() {
    history.push('/watchlist')
  }
  return (
    <S.HeaderContainer>
      <S.HeaderLeft>
        <S.Logo onClick={toHome}>
          <h1>WATCHED IT</h1>
        </S.Logo>
      </S.HeaderLeft>
      <S.HeaderSearch>
        <Search />
        <input placeholder="Search..." />
      </S.HeaderSearch>
      <S.HeaderRight>
        <S.MenuSeparator />
        <S.Button onClick={toWatchlist}>
          <Book fontSize="small" />
          WATCHLIST
        </S.Button>
        <S.Avatar variant="rounded">PW</S.Avatar>
      </S.HeaderRight>
    </S.HeaderContainer>
  )
}
export default Header
