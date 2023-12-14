import React from 'react'

import cl from './PlanChips.module.css'

function PlanChips({ plan = 'Free', green = false, light = false, ...props }) {

	const styleChips = plan.toLowerCase() === 'standard'
			? { backgroundColor: '#EAFFEC'}
			: plan.toLowerCase() === 'exclusive'
				? { backgroundColor: '#FFCE3C' } : { backgroundColor: '#F2F2F2'}

	const styleText = plan.toLowerCase() === 'standard'
			? { color: '#1FB155' }
			: plan.toLowerCase() === 'exclusive'
				? { color: '#2E3A4BB2' } : { color: '#2977FF' }


	return (
		<div style={{ ...styleChips, ...props.style }} className={cl.chips}>
			<p style={styleText}>{plan}</p>
		</div>
	)
}

export  {PlanChips}