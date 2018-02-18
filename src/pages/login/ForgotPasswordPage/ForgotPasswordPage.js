import React, { Component } from 'react'
import { Link } from '@/components'

import { Columns, Column, Box, Title, Field, Label, Control, Input, Button, Icon } from 'bloomer'

import './ForgotPasswordPage.scss'

export default class ForgotPasswordPage extends Component {
  componentWillMount () {}

  handleSubmit (e) {
    e.preventDefault()
    console.log('handle submit here')
  }

  render () {
    return (
      <div className='Page AuthPage ForgotPasswordPage'>
        <div className='container'>
          <Columns isCentered>
            <Column isSize={{mobile: 12, tablet: 8}}>
              <Box className='Page-hero'>
                <Title isSize='2'>Ti-ai uitat parola?</Title>
                <p>You want order in Gotham. Batman must take off his mask and turn himself in.</p>
                <form className='AuthForm ResetForm' onSubmit={this.handleSubmit}>
                  <Field>
                    <Label>E-mail:</Label>
                    <Control>
                      <Input type='e-mail' placeholder='ionescu@popescu.ro' />
                    </Control>
                  </Field>
                  <div className='ResetForm-action'>
                    <Button type='submit' isFullWidth isColor='success' isSize='large'>Reseteaza-ti parola</Button>
                    <Link to='/login' className='ResetForm-back'>
                      <Icon isSize='small' className='fa fa-caret-left' />
                      Inapoi
                    </Link>
                  </div>
                </form>
              </Box>
            </Column>
          </Columns>
        </div>
      </div>
    )
  }
}
