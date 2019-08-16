import React from 'react'

import './button.scss'

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
)

export default Button
