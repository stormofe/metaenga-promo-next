'use client';

import React, { useEffect, useState } from 'react'
import classNames from 'classnames'

import cl from './Input.module.css'
import {Spinner} from '../spinner/Spinner';

function Input({ field, value, onChange, className = null, helperText = ' ', err = '', loading = false, type = 'text', label = '', disabled = false, rows = 2, small = false, ...props }) {
	const [error, setError] = useState(false)
	const [id, setId] = useState(Math.random().toString(36).substr(2, 9).toUpperCase())
	const [showPas, setShowPas] = useState(false)
	useEffect(() => {
		if (err) {
			setError(true)
		}
		if (!err) {
			setError(false)
		}
	}, [err])

	const labelFrag = label ? <label className={classNames(cl.label, disabled && cl.disabled)} htmlFor={id}>{label}</label> : null
	const helperTextFrag = helperText || err ? <span className={classNames(cl.helper, error && cl.error)}>{helperText}</span>
		: <span className={cl.helper}></span>

	const loadingIcon = <div className={cl.icon}><Spinner width={18} /></div>

	const textInput = <React.Fragment>
		{labelFrag}
		<div className={classNames(cl.inputWrap, className)}>
			<input {...field} {...props} disabled={disabled || loading} value={value} onChange={onChange} className={classNames(cl.input, error && cl.error, small && cl.small)} placeholder={props.placeholder} id={id} />
			{loading && loadingIcon}
		</div>
		{helperTextFrag}
	</React.Fragment>

	const passwordInput = <React.Fragment>
		{labelFrag}
		<div className={classNames(cl.inputWrap, className)}>
			<input {...field} value={value} disabled={disabled} onChange={onChange} type={showPas ? 'text' : 'password'} className={classNames(cl.input, cl.password, error && cl.error, small && cl.small)} id={id} {...props} />
			{showPas
				? <i onClick={() => !disabled && setShowPas(!showPas)} className={classNames('icon-eye_on', cl.icon)}></i>
				: <i onClick={() => !disabled && setShowPas(!showPas)} className={classNames('icon-eye_off', cl.icon)}></i>
			}
		</div>
		{helperTextFrag}
	</React.Fragment>

	const textareaInput = <React.Fragment>
		{labelFrag}
		<div className={classNames(cl.inputWrap, className)}>
			<textarea {...field} {...props} disabled={disabled || loading} value={value} onChange={onChange} className={classNames(cl.input, error && cl.error, small && cl.small)} placeholder={props.placeholder} id={id} rows={rows} />
			{loading && loadingIcon}
		</div>
		{helperTextFrag}
	</React.Fragment>

	return (
		(type === 'text' && textInput) || (type === 'password' && passwordInput) || (type === 'area' && textareaInput)
	)
}

export {Input}