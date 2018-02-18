import React, { Component } from 'react'

import { Header } from '@/components'

import './AppLayout.scss'

export default class AppLayout extends Component {
  componentDidMount () {
    document.documentElement.className = ''
  }

  render () {
    return (
      <div className='AppLayout'>
        <Header />
        {this.props.children}
      </div>
    )
  }
}
