import React, { Component } from 'react'

import './TermsPage.scss'

import { Title } from 'bloomer'

export default class TermsPage extends Component {
  componentWillMount () {}

  render () {
    return (
      <div className='Page TermsPage'>
        <div className='container'>
          <Title isSize='2'>Termeni si conditii</Title>
        </div>
      </div>
    )
  }
}
