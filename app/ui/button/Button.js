import { Spinner } from '../spinner/Spinner'
import './Button.css'

function Button({ children, icon = '', direction = '', loading = false, ...props }) {

	const buttonDisabled = <>
		<button disabled {...props}>
			{direction === 'left' && <span className='icon left_icon'><i className={`icon-${icon}`}></i></span>}
			{children}
			{direction === 'right' && <span className='icon right_icon'><i className={`icon-${icon}`}></i></span>}
			{loading && <div className='spinner'><Spinner width={30} /></div>}
		</button>
	</>

	const buttonEnabled = <>
		<button  {...props}>
			{direction === 'left' && <span className='icon left_icon'><i className={`icon-${icon}`}></i></span>}
			{children}
			{direction === 'right' && <span className='icon right_icon'><i className={`icon-${icon}`}></i></span>}
			{loading && <div className='spinner'><Spinner width={30} /></div>}
		</button>
	</>

	return (
		props.disabled ? buttonDisabled : buttonEnabled
	)
}

export default Button