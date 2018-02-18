import React, { Component } from 'react'
import { Link } from '@/components'

import { Columns, Column, Box, Title, Field, Label, Control, Input, Button, TextArea, Checkbox } from 'bloomer'

import './RegisterPage.scss'

export default class RegisterPage extends Component {
  componentWillMount () {}

  handleSubmit (e) {
    e.preventDefault()
    console.log('handle submit here')
  }

  render () {
    return (
      <div className='Page AuthPage RegisterPage'>
        <div className='container'>
          <Columns isCentered>
            <Column isSize={{mobile: 12, tablet: 10}}>
              <Box className='Page-hero'>
                <Title isSize='2'>Inscrie-te in comunitate</Title>
                <p>You want order in Gotham. Batman must take off his mask and turn himself in. Oh, and every day he doesn't, people will die. Starting tonight. I'm a man of my word.</p>
                <form className='AuthForm RegisterForm' onSubmit={this.handleSubmit}>
                  <div className='RegisterForm-step'>
                    <Title className='is-marginless' isSize='4'>Informatii generale</Title>
                    <p>Gotham's been good to our family, but the city's been suffering. People less fortunate than us have been enduring very hard times.</p>
                    <div className='RegisterForm-steps'>
                      <Columns>
                        <Column isSize={{mobile: 12, tablet: 6}}>
                          <Field>
                            <Label>Prenume:</Label>
                            <Control>
                              <Input type='text' placeholder='Andrei' />
                            </Control>
                          </Field>
                          <Field>
                            <Label>Nume:</Label>
                            <Control>
                              <Input type='text' placeholder='Popescu' />
                            </Control>
                          </Field>
                          <Field>
                            <Label>E-mail:</Label>
                            <Control>
                              <Input type='e-mail' placeholder='andrei@popescu.ro' />
                            </Control>
                          </Field>
                          <Field>
                            <Label>Telefon:</Label>
                            <Control>
                              <Input type='phone' placeholder='+40729779273' />
                            </Control>
                          </Field>
                        </Column>
                        <Column isSize={{mobile: 12, tablet: 6}}>
                          <Field>
                            <Label>Oras:</Label>
                            <Control>
                              <Input type='phone' placeholder='Cluj-Napoca' />
                            </Control>
                          </Field>
                          <Field>
                            <Label>Data nasterii:</Label>
                            <Control>
                              <Input type='date' placeholder='17/01/1988' />
                            </Control>
                          </Field>
                          <Field>
                            <Label>LinkedIn:</Label>
                            <Control>
                              <Input type='text' placeholder='https://www.linkedin.com/in/andreipopescu/' />
                            </Control>
                          </Field>
                        </Column>
                      </Columns>
                    </div>
                  </div>
                  <div className='RegisterForm-step'>
                    <Title className='is-marginless' isSize='4'>Potential</Title>
                    <p>Gotham's been good to our family, but the city's been suffering.</p>
                    <div className='RegisterForm-steps'>
                      <Columns isMultiline>
                        <Column isSize={{mobile: 12, tablet: 6, desktop: 4}}>
                          senior skills
                        </Column>
                        <Column isSize={{mobile: 12, tablet: 6, desktop: 4}}>
                          junior skills
                        </Column>
                        <Column isSize={{mobile: 12, tablet: 6, desktop: 4}}>
                          wannabe skills
                        </Column>
                      </Columns>
                    </div>
                  </div>
                  <div className='RegisterForm-step'>
                    <Title className='is-marginless' isSize='4'>Alte informatii</Title>
                    <p>Gotham's been good to our family, but the city's been suffering.</p>
                    <div className='RegisterForm-steps'>
                      <Columns isMultiline>
                        <Column isSize={{mobile: 12, tablet: 6}}>
                          <Field>
                            <Label>De ce vrei in comunitatea Code for Romania?</Label>
                            <Control>
                              <TextArea placeholder={'Spune-ne cate ceva despre tine si motivatia ta, 280 de caractere'} maxLength='280' />
                            </Control>
                          </Field>
                        </Column>
                        <Column isSize={{mobile: 12, tablet: 6}}>
                          <Field>
                            <Label>Nu ti-ai gasit specializarea? Lasa-ne un mesaj.</Label>
                            <Control>
                              <TextArea placeholder={'Spune-ne cate ceva despre tine si motivatia ta, 280 de caractere'} maxLength='280' />
                            </Control>
                          </Field>
                        </Column>
                        <Column isSize={{mobile: 12, tablet: 12}}>
                          <Field>
                            <Control>
                              <Checkbox>
                                Sunt de acord cu&nbsp;
                                <Link to='/terms'>termenii si conditiile</Link> precum si cu&nbsp;
                                <Link href='https://code4.ro/codul-de-conduita/' target='_blank'>codul de conduita</Link>&nbsp;
                                ale organizatiei Code for Romania.
                              </Checkbox>
                            </Control>
                          </Field>
                        </Column>
                        <Column isSize={{mobile: 12, tablet: 12}}>
                          <Button type='submit' isFullWidth isColor='danger' isSize='large'>Inscrie-te</Button>
                        </Column>
                      </Columns>
                    </div>
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
