import React from 'react'
import classNames from 'classnames/bind'

import styles from './button.scss'

let cx = classNames.bind(styles)

const Button = props => (
	<button className={cx()} onClick={props.onClick}>
		{props.children}
	</button>
)

export default Button
