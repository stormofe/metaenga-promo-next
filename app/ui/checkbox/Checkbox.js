'use client'

import classNames from 'classnames'
import React, { useId } from 'react'

import cl from './Checkbox.module.css'


function Checkbox({ checked, onChange, disabled = false, error = '', children, ...props }) {
	const id = useId()

	return (
		<div className={classNames(cl.row, props.className)}  {...props}>
			<div className={cl.box}>
				<input className={classNames(cl.checkbox, error && cl.error)} id={id} type='checkbox' checked={checked}
					onChange={onChange} disabled={disabled} />
			</div>
			<label className={classNames(cl.label, disabled && cl.disabled)} htmlFor={id}>{children}</label>
		</div>
	)
}

export {Checkbox}