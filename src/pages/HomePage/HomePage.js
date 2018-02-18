import React, { Component } from 'react'

import './HomePage.scss'

import { Link } from '@/components'

import { Button } from 'bloomer'

export default class HomePage extends Component {
  componentWillMount () {}

  LoginBithc () {
    console.log('this is LoginBithc')
  }

  render () {
    return (
      <div className='Page HomePage'>
        <div className='container'>
          <p>this is the home page</p>
          <Link to='/login'>Login</Link>
          <Button isColor='danger'>Hello world</Button>
        </div>
      </div>
    )
  }
}
