import Link from "next/link"

import '../styles/Footer.css'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="header__container">
				<div className="footer__container">
					<div className="footer__socials socials">

						<Link href='https://www.instagram.com/metaenga/' className="socials__item" aria-label="Link href Instagram">
							<i className='icon-instagram' />
						</Link>
						<Link href='https://www.youtube.com/channel/UC_PKn3Uy2VMne1PgynCkFzg' className="socials__item" aria-label="Link href Youtube">
							<i className='icon-youtube' />
						</Link>
						<Link href='https://twitter.com/metaenga' className="socials__item" aria-label="Link href Twitter">
							<i className='icon-twitter' />
						</Link>
						<Link href='https://www.linkedin.com/showcase/metaenga' className="socials__item" aria-label="Link href LinkedIn">
							<i className='icon-LinkedIn' />
						</Link>
						<div className="socials__vr">
							<p>Download platform</p>
							{/*<VrAppLink gray />*/}
						</div>
					</div>
					<div className="footer__docs docs">
						<Link href='cookie-policy' className="docs__item">
							Cookie Policy
						</Link>
						<Link href='privacy-policy' className="docs__item">
							Privacy Policy
						</Link>
						<Link href='terms-of-service' className="docs__item">
							Terms of Service
						</Link>
						<Link href='eula' className="docs__item">
							EULA
						</Link>
						<Link href='data-processing-agreement' className="docs__item">
							DPA
						</Link>
						<Link href='dmca' className="docs__item">
							DMCA
						</Link>
					</div>
					{/*<div className="footer__contacts contacts">
						<div className="contacts__item">
							<img src={ua} alt='Flag Ukraine' />
							<div className="contacts__item-text">
								<p className='text__body'>Ukraine</p>
								<p className='text__body'>Trostyanetska str, 6G, Kyiv, 02091</p>
								<a href='tel:+380933796971' className='text__body'>+38 (093) 379 69 71</a>
								<a href='mailhref:info@digitalengineeringmagic.com' className='text__body'>info@digitalengineeringmagic.com</a>
							</div>
						</div>
						<div className="contacts__item">
							<img src={uk} alt='Flag United Kingdom' />
							<div className="contacts__item-text">
								<p className='text__body'>United Kingdom</p>
								<p className='text__body'><span>80 Nightingale Road</span>, <span>Derby DE24 8BG</span></p>
								<a href='tel:+4408006893495' className='text__body'>+44 (0800) 6893495</a>
								<a href='mailhref:info@vrsafety.co.uk' className='text__body'>info@vrsafety.co.uk</a>
							</div>
						</div>
					</div>*/}
					<div className="footer__provide">
						<p className='text__body'>© 2023 – Metaenga by Digital Engineering and Magic</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export { Footer }