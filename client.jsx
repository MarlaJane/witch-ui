import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MonthsPage from './pages/Months'
import MoonsPage from './pages/Moons'

render(
  <BrowserRouter>
    <Switch>
      <Route path="/months" component={MoonsPage} />
      <Route path="*" component={MonthsPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
