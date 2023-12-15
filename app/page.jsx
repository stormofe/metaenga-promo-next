import { Promo } from './components/home/Promo';
import { Cards } from './components/home/Cards';
import { Features } from './components/home/Features';
import { Presentation } from './components/home/Presentation';
import { GetVRApp } from './components/home/GetVRApp';
import { Price } from './components/home/Price';
import { FAQ } from './components/home/FAQ';
import Head from 'next/head';
import { iconsImage } from './shared-metadata';

export const metadata = {
	title: 'Metaenga | XR Training Platform for Managing VR Training Solutions',
	description: 'Empowering workforce development through the XR Training Platform for managing enterprise virtual reality safety training programs with analytics and reporting'
}

export default function Home() {
	return (
		<>
			<Head>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://metaenga-promo-next.vercel.app" />
				<meta property="og:title" content="Metaenga | XR Training Platform for Managing VR Training Solutions" />
				<meta property="og:description"
					content="Empowering workforce development through the XR Training Platform for managing enterprise virtual reality safety training programs with analytics and reporting" />
				<meta property="og:image" content="https://metaenga-promo-next.vercel.app/opengraph-image.jpg" />

				<meta name="keywords"
					content="metaenga, vr training, VR Safety Training, vr simulation training, VR Platform, VR Training Solution, VR Training Program, XR Platform, XR Training, meta vr platform, vr platform price, virtual reality platform enterprises, safety training for employees, VR Training App, XR Training App, Edtech, VR Safety, XR Safety, VR Safety Solution, VR Training Program, VR Training Solution, VR Simulator, XR Simulator, VR Training Platform, XR Training Platform, VR learning, VR Workforce Development, XR Workforce Development, VR for OSHA, VR for HSE, vr educational experiences, vr educational apps, VR Skill Development, XR Skill Development, VR safety training Program, XR safety training program, immersive platform, immersive training, immersive education, immersive learning, VR power industry, VR substation, VR electricity, VR high voltage, XR power industry, XR substation, XR electricity, XR high voltage, VR utility, XR utility" />

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://metaenga-promo-next.vercel.app" />
				<meta property="twitter:title" content="Metaenga | XR Training Platform for Managing VR Training Solutions" />
				<meta property="twitter:description"
					content="Empowering workforce development through the XR Training Platform for managing enterprise virtual reality safety training programs with analytics and reporting" />
				<meta name="twitter:image" content="https://metaenga-promo-next.vercel.app/opengraph-image.jpg" />
			</Head>
			<main>
				<section id='overview'>
					<Promo />
				</section>
				<section>
					<Cards />
				</section>

				<div id='features'>
					<Features />
				</div>

				<section>
					<Presentation />
				</section>
				<GetVRApp />
				<section id='pricing'>
					<Price />
				</section>
				<FAQ />
			</main>
		</>
	)
}