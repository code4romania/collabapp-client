import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import pages from './pages'
import { AppLayout } from './layouts'

export default class App extends Component {
  render () {
    // update title
    document.title = 'Comunitatea Code for Romania'

    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <AppLayout>
            <Route exact path='/' component={pages.HomePage} />
            <Route exact path='/terms' component={pages.TermsPage} />
            <Route exact path='/login' component={pages.LoginPage} />
            <Route exact path='/register' component={pages.RegisterPage} />
            <Route exact path='/forgot-password' component={pages.ForgotPasswordPage} />
            <Route exact path='/reset-password' component={pages.ResetPasswordPage} />
          </AppLayout>
        </Switch>
      </ConnectedRouter>
    )
  }
}
