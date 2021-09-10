import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie-details" component={Movie} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
