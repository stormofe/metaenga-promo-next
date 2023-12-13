import Image from "next/image"
import Link from "next/link"

import './Button.css'

const ButtonLink = ({ children, direction, ...props }) => {
	return (
		<Link {...props}>
			<>
				{direction === 'left' && <span className="icon">
					<i className="icon-chevron-left" />
				</span>}
				{children}
				{direction === 'right' && <span className="icon">
					<i className="icon-chevron-right" />
				</span>}
			</>
		</Link>
	)
}

export { ButtonLink }
