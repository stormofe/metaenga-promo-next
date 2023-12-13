'use client';

import { ButtonLink } from "@/app/ui/button/ButtonLink"
import { Video } from "../../video/Video"
import VideoModal from "../../video/VideoModal"

function SlidePC({ trainingId, ...props }) {
	const { id, video, thumb, title, subheader, text, url, setVideoSrc, info, alt } = props
	return (

		<div className="slider__slide slide">
			<Video src={video} thumb={thumb} />
			<div className="container">
				<p className='slide__subheader'>{subheader}</p>
				<h4 className='slide__title_mob'>{title}</h4>
				<article className='body__text'>
					{text}
				</article>
				<div className="slide__buttons">
					{url && !trainingId &&
						<VideoModal src={url} videoTitle={title} theme='white' />}
					{info && <ButtonLink href={`/training?id=${id}`} className='btn-link textbtnWhite' direction='right' icon='chevron-right' >Learn more</ButtonLink>}
				</div>
			</div>
		</div>
	)
}

export { SlidePC }
