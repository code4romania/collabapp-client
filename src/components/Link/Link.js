import React from 'react'
import { Link as RouterLink, NavLink } from 'react-router-dom'
import cx from 'classnames'

const Link = (props) => {
  const {
    to,
    nav,
    href,
    ...rest
  } = props

  // TODO: add a class link
  const className = cx('link', { }, props.className)

  const linkProps = { to, ...rest }
  if (to && nav) {
    return <NavLink {...linkProps} className={className}>{props.children}</NavLink>
  }

  if (to) {
    return <RouterLink {...linkProps} className={className}>{props.children}</RouterLink>
  }

  const aProps = { href, ...rest }
  return <a {...aProps}>{props.children}</a>
}

export default Link
