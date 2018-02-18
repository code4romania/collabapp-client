import React, { Component } from 'react'

import './HomePage.scss'

import { Title, Columns, Column, Box } from 'bloomer'

export default class HomePage extends Component {
  componentWillMount () {}

  render () {
    return (
      <div className='Page HomePage'>
        <div className='container'>
          <Columns isCentered>
            <Column isSize={{mobile: 12, tablet: 8}}>
              <Box className='Page-hero'>
                <Title isSize='2'>Bine ai venit!</Title>
                <p>You wanna know how I got them? So I had a wife. She was beautiful, like you, who tells me I worry too much, who tells me I ought to smile more, who gambles and gets in deep with the sharks. Hey. One day they carve her face. And we have no money for surgeries. She can't take it. </p>
              </Box>
            </Column>
          </Columns>
        </div>
      </div>
    )
  }
}
