import Link from 'next/link'
import { getTrainingInfoList } from '../data/GetTrainingInfo'

import { PlanChips } from '../ui/planChips/PlanChips'

import './VrLib.css'
import Image from 'next/image'

export const metadata = {
	title: 'VR Training Library for Enterprises | XR Safety Programs',
	description: 'VR Training Library for Elevating Safety Training Programs in the Electric Power, Oil and Gas Industry, Utility and Industrial Enterprises under XR Platform',
	alternates: {
		canonical: 'https://metaenga-promo-next.vercel.app/vr-training-library',
		types: {
			'application/rss+xml': 'https://metaenga-promo-next.vercel.app/vr-training-library',
		},
	}, 
}

export default function VRLibrary() {
	const trainings = getTrainingInfoList()
	return (
			<main className='container'>
				<div className="vrLib">
					<h1 className='subheader'>VR training library</h1>

					<div className="vrLib__grid">
						{trainings && trainings.map((training, index) => training.video?.pcThumb ? (
							<Link className="vrLib__grid_item vrLib__item" href={training.linkid} key={training.id}>
								<div className="vrLib__item_img">
									<Image
										src={training.cardimg}
										alt={training.cardalt}
										width={600}
										height={300}
									/>
								</div>
								<div className="vrLib__item_info">
									<div className="vrLib__item_info_chips">
										<PlanChips plan={training.plan} />
									</div>
									<p className="vrLib__item_info_title">{training.name}</p>
									<p className="vrLib__item_info_desc text__body">{training.briefdescr}</p>
									<div className="vrLib__item_info_arrow vrLib__arrow">
										<div className="vrLib__arrow_btn">
											<p>Learn more</p>
											<i className='icon-arrow-up' />
										</div>
									</div>
								</div>
							</Link>
						) : null)
						}
					</div>
				</div>
			</main>
	)
}