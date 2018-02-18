import React, { Component } from 'react'
import { Link } from '@/components'

import { Columns, Column, Box, Title, Field, Label, Control, Input, Button } from 'bloomer'

import './LoginPage.scss'

export default class LoginPage extends Component {
  componentWillMount () {}

  handleSubmit (e) {
    e.preventDefault()
    console.log('handle submit here')
  }

  render () {
    return (
      <div className='Page AuthPage LoginPage'>
        <div className='container'>
          <Columns isCentered>
            <Column isSize={{mobile: 12, tablet: 8}}>
              <Box className='Page-hero'>
                <Title isSize='2'>Autentifica-te</Title>
                <p>You want order in Gotham. Batman must take off his mask and turn himself in. Oh, and every day he doesn't, people will die. Starting tonight. I'm a man of my word.</p>
                <form className='AuthForm LoginForm' onSubmit={this.handleSubmit}>
                  <Field>
                    <Label>E-mail:</Label>
                    <Control>
                      <Input type='e-mail' placeholder='andrei@popescu.ro' />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Parola:</Label>
                    <Control>
                      <Input type='password' placeholder='12345' />
                    </Control>
                    <Link to='/forgot-password' className='LoginForm-reset'>Ti-ai uitat parola?</Link>
                  </Field>
                  <Button type='submit' isFullWidth isColor='success' isSize='large'>Conecteaza-te</Button>
                </form>
              </Box>
            </Column>
          </Columns>
        </div>
      </div>
    )
  }
}
