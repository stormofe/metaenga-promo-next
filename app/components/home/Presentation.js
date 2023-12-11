'use client'

import React, { lazy, Suspense, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { TABLET_WIDTH, useWindowSize } from './../../hooks/useWindowWidth';

import './Presentation.css';

const slidesData = [
	{
		video: './assets/slider/video/HVES.mp4',
		thumb: './assets/slider/poster/HVES.jpg',
		video_m: './assets/slider/videoMob/HVES_m.mp4',
		thumb_m: './assets/slider/posterMob/HVES_m.jpg',
		subheader: 'General Knowledge',
		title: 'High Voltage Electrical Substation Tour',
		titleMob: 'High Voltage Electrical Substation Tour',
		text: 'Training for industry-specific equipment layout. Learn substation layout, power transformers, breakers, switchgear via immersive environment.',
		url: 'https://www.youtube.com/embed/91xoQ5SN1LE?autoplay=1&amp',
		id: 1001,
		info: true,
		alt: "VR Training: High Voltage Electrical Substation Tour. Explore immersive VR simulations for electrical safety training. Experience XR training programs for high-voltage scenarios. Enhance skills in a virtual reality environment."
	},
	{
		video: './assets/slider/video/OSHA.mp4',
		thumb: './assets/slider/poster/OSHA.jpg',
		video_m: './assets/slider/videoMob/OSHA_m.mp4',
		thumb_m: './assets/slider/posterMob/OSHA_m.jpg',
		subheader: 'Safety Procedure',
		title: 'Occupational Safety and Health Training',
		titleMob: 'Occupational Safety and Health',
		text: 'Training on electrical safety for employees near live parts & equipment in hazardous locations. Covers energy isolation, hazard ID, panel ops, PPE',
		url: 'https://www.youtube.com/embed/D4LarinRBFA?autoplay=1&amp',
		id: 1002,
		info: true,
		alt: 'VR Training: Occupational Safety and Health Training. Engage in immersive VR simulations for workplace safety and health. Explore XR training programs focusing on occupational safety. Enhance skills in a virtual reality environment for a safer work environment.'
	},
	{
		video: './assets/slider/video/TOS.mp4',
		thumb: './assets/slider/poster/TOS.jpg',
		video_m: './assets/slider/videoMob/TOS_m.mp4',
		thumb_m: './assets/slider/posterMob/TOS_m.jpg',
		subheader: 'Step-by-Step Procedure',
		title: 'Transformer Oil Sampling Training',
		titleMob: 'Transformer Oil Sampling',
		text: 'Attendees perform transformer oil sampling as a preventive maintenance procedure. Step-by-step guidance provided for tool collection & procedure execution.',
		url: 'https://www.youtube.com/embed/zj4PurgE7Bs?autoplay=1&amp',
		id: 1003,
		info: true,
		alt: 'Transformer Oil Sampling Training. Learn the proper techniques for sampling oil from transformers in immersive VR training. Enhance your skills in the safe and efficient collection of transformer oil samples. Explore XR training programs for transformer maintenance and oil analysis.'
	},
	{
		video: './assets/slider/video/LOTO.mp4',
		thumb: './assets/slider/poster/LOTO.jpg',
		video_m: './assets/slider/videoMob/LOTO_m.mp4',
		thumb_m: './assets/slider/posterMob/LOTO_m.jpg',
		subheader: 'Step-by-Step Procedure',
		title: 'MV Substation Transformer Isolating Training',
		titleMob: 'MV Substation Transformer Isolating',
		text: 'Learn safety, tools, and layout exploration for maintenance. Identify required apparatus for work.',
		url: 'https://www.youtube.com/embed/8ofJ23x_bpw?autoplay=1&amp',
		id: 1009,
		info: false,
		alt: 'MV Substation Transformer Isolating Training. Engage in immersive VR training to learn proper techniques for isolating transformers in medium-voltage (MV) substations. Enhance your skills in safe transformer isolation procedures. Explore XR training programs for medium-voltage substation maintenance and transformer safety.'
	},
	{
		video: '',
		thumb: './assets/slider/poster/REF.jpg',
		video_m: '',
		thumb_m: './assets/slider/posterMob/REF_m.jpg',
		subheader: 'Product Knowledge',
		title: 'Feeder Protection Relay Training',
		titleMob: 'Feeder Protection Relay',
		text: 'Functionality, input/output devices & technical data descriptions. Attendees can explore menu tree & configure primary current value.',
		url: 'https://www.youtube.com/embed/Nra0XAr0aWI?autoplay=1&amp',
		id: 101,
		info: true,
		alt: 'Feeder Protection Relay Training. Participate in immersive VR training to master feeder protection relay operations. Enhance your skills in configuring and maintaining feeder protection relays. Explore XR training programs for efficient and reliable feeder protection systems.'
	},
	{
		video: '',
		thumb: './assets/slider/poster/SICAME.jpg',
		video_m: '',
		thumb_m: './assets/slider/posterMob/SICAME_m.jpg',
		subheader: 'Step-by-Step Procedure',
		title: <>Heat Shrink Cable Joint Training</>,
		titleMob: 'Heat Shrink Cable Joint',
		text: 'Training for cable coupling installation. Learn installation sequence & rules. Practice cross-linked polyethylene insulated cable joint connection.',
		url: '',
		id: 1008,
		info: false,
		alt: 'Heat Shrink Cable Joint Training. Engage in immersive VR training to perfect the installation of heat shrink cable joints. Enhance your skills in the proper techniques for heat shrink cable jointing.	Explore XR training programs for efficient and reliable cable joint installations.'
	},
]

import "swiper/css/effect-fade";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { SlidePC } from './presentation/SlidePC';
import { SlideMob } from './presentation/SlideMob';

function Presentation({ trainingId = '' }) {
	const winWidth = useWindowSize();
	const [videoSrc, setVideoSrc] = useState('');
	const [slides, setSlides] = useState(null)

	React.useEffect(() => {
		if (trainingId) {
			setSlides(slidesData.filter(slide => slide.id !== +trainingId))
		} else {
			setSlides(slidesData)
		}
	}, [trainingId])

	return (
		<div className="presentation">
			<div className="container presentation__container">
				{trainingId
					? <>
						<h3 className='mid__header'>Discover more trainings</h3>

					</>
					: <>
						<h3 className='mid__header'>VR Training Library — Included!</h3>
						<p className="text__body">
							Metaenga platform includes an advanced training bundle, starting from basic knowledge VR experiences to high-end procedural training modules to meet all your teams needs.
						</p>

					</>
				}	{/*{winWidth < TABLET_WIDTH && <Button textbtn right icon='chevron' >Learn more</Button>}*/}
			</div>
			
			<div className="presentation__slider">
				<div className="slider">
					<Swiper
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						effect={"fade"}
						navigation={winWidth > TABLET_WIDTH ? true : false}
						modules={[EffectFade, Pagination, Navigation, Autoplay]}
						autoplay={{
							delay: 7000,
							disableOnInteraction: false,
						}}
						loop={true}
					>
						{slides?.map((slide, index) => (
							winWidth > TABLET_WIDTH
								? <SwiperSlide key={index}>
									<SlidePC {...slide} setVideoSrc={setVideoSrc} trainingId={trainingId} />
								</SwiperSlide>
								: <SwiperSlide key={index}>
									<SlideMob {...slide} trainingId={trainingId} />
								</SwiperSlide>
						))}

					</Swiper>
				</div>
			</div>

			{/*{slides?.map((slide, index) => (
				<SlidePC key={index} {...slide} setVideoSrc={setVideoSrc} trainingId={trainingId} />

			))}*/}

		</div>
	)
}

export { Presentation }