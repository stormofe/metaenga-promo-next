'use client'

import { Video } from "../../video/Video"

import bundle from '../../../../public/icons/svg/bundle.svg'
import Link from "next/link"


function SlideMob({ trainingId, ...props }) {
	const { video_m, thumb_m, titleMob, id, info, alt } = props

	return (
		<>
			<Link href={`/training?id=${id}`} className="slider__slide-mob slide">
				<Video src={video_m} thumb={thumb_m} />
				<div className="container">
					<div className="slide__bundle">
						{!trainingId && <><img className='slide__icon' src={bundle} alt='Icon bundle' />
							<p>VR training bundle</p>
						</>}
					</div>
					<h4 className='slide__title_mob'>{titleMob}</h4>
				</div>
			</Link>
		</>
	)
}

export {SlideMob}