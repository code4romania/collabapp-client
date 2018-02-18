import React, { Component } from 'react'
import { Link } from '@/components'

import './RegisterPage.scss'

export default class RegisterPage extends Component {
  componentWillMount () {}

  render () {
    return (
      <div className='Page RegisterPage'>
        <div className='container'>
          <p>this is where you register page</p>
          <Link to='/' className='button is-danger'>Hello world</Link>
        </div>
      </div>
    )
  }
}
