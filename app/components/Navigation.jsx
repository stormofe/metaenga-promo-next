'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = ({ navLinks }) => {
	const pathname = usePathname();

	return (
		<nav className="header__menu">
			<ul className="header__menu-list">
				{navLinks.map((link, index) => {
					return (
						<li key={link} className="header__menu-item">
							<Link href={link.href} key={index} className={pathname === link.href ? 'header__menu-link link active__link' : 'header__menu-link link'}>
								{link.name}
							</Link>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export { Navigation }