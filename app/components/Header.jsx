import Link from "next/link"
import { Navigation } from "./Navigation"
import Image from "next/image"

import {ButtonLink} from "../ui/button/ButtonLink"

const navLinks = [
	{
		name: 'Overview', href: '#overview'
	},
	{
		name: 'Features', href: '#features'
	},
	{
		name: 'Pricing', href: '#pricing'
	},
	{ 
		name: 'Contact us', href: '#contact'
	},
	{
		name: 'VR Training', href: 'vr-training-library'
	}
]

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">
				<Link href='/' scroll={true} className="header__logo-box"
				>
					<Image
						src="/icons/logo.svg"
						alt="Metaenga Logo"
						className="header__logo"
						width={128}
						height={32}
						priority
					/>
				</Link>
				<Navigation navLinks={navLinks} />
				<div className="header__buttons">
					<ButtonLink className='btn-link textbtn' id='login-btn-header' href={'https://app.metaenga.com/'} target="_blank">Log in</ButtonLink>
					<ButtonLink className='btn-link primary' id='free-btn-header' href={'https://app.metaenga.com/'} target="_blank">Start free</ButtonLink>
				</div>
			</div>
		</header>
	)
}

export { Header }