'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import { useEffect } from "react";
import ScrollLink from './../ui/scrollLink/ScrollLink';

const Navigation = ({ navLinks }) => {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<nav className="header__menu">
			<ul className="header__menu-list">
				{pathname === '/' ? <MainLinks navLinks={navLinks} pathname={pathname} /> : <SubLinks navLinks={navLinks} pathname={pathname} />}
			</ul>
		</nav>
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

export { Navigation }