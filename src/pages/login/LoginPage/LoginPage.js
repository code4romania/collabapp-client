import React, { Component } from 'react'
import { Link } from '@/components'

import { Columns, Column, Box, Title, Field, Label, Control, Input, Button } from 'bloomer'

import './LoginPage.scss'

export default class LoginPage extends Component {
  componentWillMount () {}

  onHandleSubmit () {
    console.log('handle login submit')
  }

  render () {
    return (
      <div className='Page LoginPage'>
        <div className='container'>
          <Columns isCentered>
            <Column isSize={{mobile: 12, tablet: 6}}>
              <Box className='Page-hero'>
                <Title>Autentifica-te</Title>
                <p>You want order in Gotham. Batman must take off his mask and turn himself in. Oh, and every day he doesn't, people will die. Starting tonight. I'm a man of my word.</p>
                <div className='LoginForm'>
                  <Field>
                    <Label>E-mail:</Label>
                    <Control>
                      <Input type='text' placeholder='ionescu@popescu.ro' />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Parola:</Label>
                    <Control>
                      <Input type='password' placeholder='12345' />
                    </Control>
                    <Link to='/forgot-password' className='LoginForm-reset'>Ti-ai uitat parola?</Link>
                  </Field>
                  <Button isColor='danger' isSize='large' className='is-full-width' onClick={this.onHandleSubmit}>Conecteaza-te</Button>
                </div>
              </Box>
            </Column>
          </Columns>
        </div>
      </div>
    )
  }
}
