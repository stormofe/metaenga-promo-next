import Link from "next/link"
import { Navigation } from "./Navigation"
import Image from "next/image"

import {ButtonLink} from "../ui/button/ButtonLink"

const navLinks = [
	{
		name: 'Overview', mainhref: '#overview', subhref: 'overview'
	},
	{
		name: 'Features', mainhref: '#features', subhref: 'features'
	},
	{
		name: 'Pricing', mainhref: '#pricing', subhref: 'pricing'
	},
	{ 
		name: 'Contact us', mainhref: '#contact', subhref: 'contact'
	},
	{
		name: 'VR Training', mainhref: 'vr-training-library', subhref: ''
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