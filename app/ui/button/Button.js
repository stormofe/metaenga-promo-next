import './Button.css'

function Button({ children, icon = '', direction = '', ...props }) {

	const buttonDisabled = <>
		<button disabled {...props}>
			{direction === 'left' && <span className='icon left'><i className={`icon-${icon}`}></i></span>}
			{children}
			{direction === 'right' && <span className='icon right'><i className={`icon-${icon}`}></i></span>}
			
		</button>
	</>

	const buttonEnabled = <>
		<button  {...props}>
			{direction === 'left' && <span className='icon left'><i className={`icon-${icon}`}></i></span>}
			{children}
			{direction === 'right' && <span className='icon right'><i className={`icon-${icon}`}></i></span>}
		</button>
	</>

	return (
		props.disabled ? buttonDisabled : buttonEnabled
	)
}

export default Button