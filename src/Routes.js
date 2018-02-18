import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import pages from './pages'
import { AppLayout } from './layouts'

export default class App extends Component {
  render () {
    // update title
    document.title = 'Comunitatea Code for Romania'

    return (
      <Router>
        <Switch>
          <AppLayout>
            <Route exact path='/' component={pages.HomePage} />
            <Route exact path='/login' component={pages.LoginPage} />
          </AppLayout>
        </Switch>
      </Router>
    )
  }
}
