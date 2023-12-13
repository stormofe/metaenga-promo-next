import React, { useId } from 'react'
import classNames from 'classnames'

import cl from './Switch.module.css'

function Switch({ checked, onChange, children, ...props }) {
	let id = useId()
	return (
		<label className={cl.container}>
			<div className={cl.switch}>
				<input id={id} className='switch-annually-calc' type="checkbox" checked={checked} onChange={onChange} />
				<span className={classNames(cl.slider, cl.round)}></span>
			</div>
			{children}
		</label>
	)
}

export { Switch }