import React, { Component } from 'react'
import { Level, LevelItem, LevelLeft, LevelRight } from 'bloomer'

import { Link } from '@/components'
import brandLogo from '@/assets/brand-logotype.png'

import './Header.scss'

export default class Header extends Component {
  render () {
    return (
      <div className='Header'>
        <div className='container'>
          <Level className='Header-inner'>
            <LevelLeft>
              <LevelItem>
                <Link to='/' className='Header-brand'>
                  <span className='Header-label'>Comunitatea</span>
                  <img src={brandLogo} alt='Code for Romania' />
                </Link>
              </LevelItem>
            </LevelLeft>
            <LevelRight>
              <LevelItem>
                <Link to='/login' className='button is-success'>Autentificare</Link>
                <Link to='/register' className='button is-danger'>Inregistrare</Link>
              </LevelItem>
            </LevelRight>
          </Level>
        </div>
      </div>
    )
  }
}
