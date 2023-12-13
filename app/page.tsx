import { Promo } from './components/home/Promo';
import { Cards } from './components/home/Cards';
import { Features } from './components/home/Features';
import { Presentation } from './components/home/Presentation';
import { GetVRApp } from './components/home/GetVRApp';
import { Price } from './components/home/Price';


export default function Home() {
	return (
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

		</main>
	)
}