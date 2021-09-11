import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as S from './styles'

import Header from './components/Header'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <S.MainWrapper>
          <Route path="/" component={Home} exact />
          <Route path="/watchlist" component={Watchlist} />
        </S.MainWrapper>
      </Switch>
    </Router>
  )
}

export default Routes
