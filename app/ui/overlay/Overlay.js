'use client'

import React, { useEffect, useRef } from 'react'

import cl from './Overlay.module.css'

function Overlay({ children, callback = null, modalisopen, setisopen, ...props }) {


	useEffect(() => {
		if (modalisopen) {
			document.body.style.overflowY = 'hidden'
			document.body.style.marginRight = '8px';
			document.querySelector('header').style.right = '8px';
		} else {
			document.body.style.overflowY = 'visible'
			document.body.style.marginRight = '0';
			document.querySelector('header').style.right = '0';
		}
	}, [modalisopen]);

	const handleKeyPress = (event) => {
		if (event.keyCode === 27) {
			setisopen(false)
			callback && callback()
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
			document.body.style.marginRight = '0';
			document.body.style.overflowY = 'visible'
			document.querySelector('header').style.right = '0';
		}
	}, [])

	const onOverlayClick = (e) => {
		setisopen(false)
		callback && callback()
	}
	return (
		<div className={`${cl.overlay} ${modalisopen && cl.active}`} onClick={onOverlayClick} {...props}>
			{children}
		</div>
	)
}

export default Overlay