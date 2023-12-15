import { Promo } from './components/home/Promo';
import { Cards } from './components/home/Cards';
import { Features } from './components/home/Features';
import { Presentation } from './components/home/Presentation';
import { GetVRApp } from './components/home/GetVRApp';
import { Price } from './components/home/Price';
import { FAQ } from './components/home/FAQ';
import Head from 'next/head';
import { Metadata } from 'next';

//export const metadata: Metadata = {
//	title: 'Metaenga | XR Training Platform for Managing VR Training Solutions',
//	description: 'Empowering workforce development through the XR Training Platform for managing enterprise virtual reality safety training programs with analytics and reporting'
//}

export default function Home() {
	return (
		<>
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