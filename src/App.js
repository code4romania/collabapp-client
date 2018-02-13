import React, { Component } from 'react'
import logo from './logo.svg'
import './App.scss'

import {Container, Box, Button} from 'bloomer'

class App extends Component {
  render () {
    return (
      <Container className='App'>
        <Box className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </Box>
        <p className='App-intro'>
          <Button isColor='danger'>Ceva</Button>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Container>
    )
  }
}

export default App
