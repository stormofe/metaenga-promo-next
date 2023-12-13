import './Button.css'

function Button({ children, icon = '', direction = '', ...props }) {

	const buttonDisabled = <>
		<button disabled {...props}>
			{direction === 'left' && <span className='icon left_icon'><i className={`icon-${icon}`}></i></span>}
			{children}
			{direction === 'right' && <span className='icon right_icon'><i className={`icon-${icon}`}></i></span>}
			
		</button>
	</>

	const buttonEnabled = <>
		<button  {...props}>
			{direction === 'left' && <span className='icon left_icon'><i className={`icon-${icon}`}></i></span>}
			{children}
			{direction === 'right' && <span className='icon right_icon'><i className={`icon-${icon}`}></i></span>}
		</button>
	</>

	return (
		props.disabled ? buttonDisabled : buttonEnabled
	)
}

export default Button