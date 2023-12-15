'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ScrollLink from './../ui/scrollLink/ScrollLink';
import classNames from "classnames";
import { ButtonLink } from "../ui/button/ButtonLink";
import { TABLET_WIDTH, useWindowSize } from './../hooks/useWindowWidth';

const Navigation = ({ navLinks }) => {
	const pathname = usePathname();
	const router = useRouter();
	const winWidth = useWindowSize()

	return (
		<>
			<nav className="header__menu header__menu_pc">
				<ul className="header__menu-list">
					{pathname === '/' ? <MainLinks navLinks={navLinks} pathname={pathname} /> : <SubLinks navLinks={navLinks} pathname={pathname} />}
				</ul>
			</nav>
			<Burger pathname={pathname} navLinks={navLinks} />
		</>
	)
}

const MainLinks = ({ navLinks, pathname }) => {
	return (
		<>
			{navLinks.map((link, index) => {
				if (link.subhref === '') return null
				return (
					<li key={link.name} className="header__menu-item">
						<ScrollLink to={link.subhref} className="header__menu-link link"
							activeClass='active__link'>
							{link.name}
						</ScrollLink>

					</li>
				)
			})}
			{navLinks.map((link, index) => {
				if (link.subhref !== '') return null
				return (
					<li key={link.name} className="header__menu-item">
						<Link href={link.mainhref} className={pathname === link.href ? 'header__menu-link link active__link' : 'header__menu-link link'}>
							{link.name}
						</Link>
					</li>
				)
			}
			)}
		</>
	)
}

const SubLinks = ({ navLinks, pathname }) => {
	return (
		<>
			{navLinks.map((link, index) => {
				return (
					<li key={link.name} className="header__menu-item">
						<Link href={link.subhref === '' ? link.mainhref : `/#${link.subhref}`} className={pathname === `/${link.mainhref}` ? 'header__menu-link link active__link' : 'header__menu-link link'}>
							{link.name}
						</Link>
					</li>
				)
			})}
		</>
	)
}

const Burger = ({ pathname, navLinks }) => {
	const [burger, setBurger] = useState(false)
	return (
		<>
			<div className={classNames('burger-icon', burger && 'open')} onClick={() => setBurger(!burger)}>
				<span className="bar bar1"></span>
				<span className="bar bar2"></span>
				<span className="bar bar3"></span>
			</div>
			<nav className={classNames('header__menu', burger && 'open', 'header__menu_mob')}>
				<ul className="header__menu-list">
					{pathname === '/' ? <MainLinks navLinks={navLinks} pathname={pathname} /> : <SubLinks navLinks={navLinks} pathname={pathname} />}
				</ul>
				<div className="header__buttons">
					{/*<Button id='free-btn-burger' className='btn__flex' onClick={onJoin}>Start free</Button>
					<Button id='login-btn-burger' className='btn__flex' secondary onClick={onLogin}>Log in</Button>*/}
					<ButtonLink className='btn-link textbtn btn__flex' id='free-btn-burger' href={'https://app.metaenga.com/'} target="_blank">Log in</ButtonLink>
					<ButtonLink className='btn-link primary btn__flex' id='login-btn-burger' href={'https://app.metaenga.com/'} target="_blank">Start free</ButtonLink>
				</div>
				{/*<div className="header__contact">
					<Button onClick={() => setSubscModal(true)} textbtn left icon='mail'>Contact us</Button>
				</div>*/}
			</nav>
			<div className={classNames('overlay', burger && 'open')} onClick={() => setBurger(false)}>

			</div>
		</>
	)
}


export { Navigation }