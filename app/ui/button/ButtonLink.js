import Image from "next/image"
import Link from "next/link"

import './Button.css'

const ButtonLink = ({ children, direction, ...props }) => {
	return (
		<Link {...props}>
			<>
				{direction === 'left' && <span>
					<Image
						src="/icons/svg/arrow_c_l.svg"
						alt="Icon left"
						width={24}
						height={24}
						priority />
				</span>}
				{children}
				{direction === 'right' && <span>
					<Image
						src="/icons/svg/arrow_c_r.svg"
						alt="Icon right"
						width={24}
						height={24}
						priority />
				</span>}
			</>
		</Link>
	)
}

export { ButtonLink }
