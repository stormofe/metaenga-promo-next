'use client'

import React, { useEffect, useState } from 'react';
import cl from './Modal.module.css'
import Overlay from '../overlay/Overlay';


function Modal({ modalisopen, setisopen, children, propagination = true, callback = null, ...props }) {
	const [open, setOpen] = useState(null)
	useEffect(() => {
		setOpen(modalisopen)
	}, [modalisopen])

	return (
		<Overlay callback={callback} modalisopen={open} setisopen={setOpen}>
			<div className={cl.modal} onClick={(e) => propagination && e.stopPropagation()} {...props}>
				{children}
			</div>
		</Overlay>
	)
}

export  {Modal}