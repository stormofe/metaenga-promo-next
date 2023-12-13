import React from 'react'
import cl from './Count.module.css'

function Count({ count = 0, setCount, max = null, min = null, id = '' }) {
	const onIncrement = () => {
		if (max && count === max) return
		setCount(++count)
	}
	const onDecrement = () => {
		if (min && count === min) return
		if (count === 0 || !count) return
		setCount(--count)
	}

	const onChange = (e) => {
		if (max && e.target.value.replace(/[^0-9]/, '') > max) setCount(max)
		else if (min && e.target.value.replace(/[^0-9]/, '') < min) setCount(min)
		else
			setCount(e.target.value.replace(/[^0-9]/, ''))
	}

	return (
		<div className={cl.block}>
			<span onClick={onDecrement}><p>-</p></span>
			<input id={id} value={count} onChange={onChange} type='text' aria-label='enter the number of required licenses to calculate the cost' />
			<span onClick={onIncrement}><p>+</p></span>
		</div>
	)
}

export { Count }