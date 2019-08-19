import React from 'react'
import classNames from 'classnames/bind'

import styles from './button.css'

let cx = classNames.bind(styles)

const Button = props => (
  <button className={cx(props.className.split(' '))} onClick={props.onClick}>
    {props.children}
  </button>
)

export default Button
