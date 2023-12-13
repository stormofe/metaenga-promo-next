'use client';

import React from 'react'

import ReactTooltip from "react-tooltip";

import cl from './Tooltip.module.css'

function Tooltip({ id, black = false, children, ...props }) {
	return (
		black
			? <ReactTooltip className={cl.tooltip__black} scrollHide id={id} place="bottom" effect="solid" padding='4px' offset={{ bottom: -8 }} arrowColor='transparent' backgroundColor='#2E3A4B' {...props} >
				{children}
			</ReactTooltip>

			: <ReactTooltip className={cl.tooltip} id={id} scrollHide place="right" effect="solid" arrowColor='#2E3A4B' backgroundColor='#2E3A4B' {...props}  >
				{children}
			</ReactTooltip>
	)
}

export { Tooltip }