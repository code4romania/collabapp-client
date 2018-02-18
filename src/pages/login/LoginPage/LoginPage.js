import React, { Component } from 'react'
import { Link } from '@/components'

import './LoginPage.scss'

export default class LoginPage extends Component {
  componentWillMount () {}

  render () {
    return (
      <div className='Page LoginPage'>
        <div className='container'>
          <p>this is the login page</p>
          <Link to='/' className='button is-danger'>Hello world</Link>
        </div>
      </div>
    )
  }
}
