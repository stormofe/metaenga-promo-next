import {Video} from '../video/Video';
import { ButtonLink } from '../../UI/button/ButtonLink';

import './Promo.css'
import VideoModal from './../video/VideoModal';

function Promo() {

	return (
		<div className='container'>
			<div className="promo">
				<div className="promo__info">
					<h1 className='main__header'>Manage industrial XR content at a scale</h1>
					<div className="promo__media tablet">
						<div className="promo__media-img">
							<Video src='../../assets/videos/Metaenga_m.mp4' thumb='https://metaenga.com/assets/Metaenga_m.jpg'
							alt='Manager showcasing the VR platform for seamless training management. 
							Explore virtual reality training, VR safety simulations, XR training experiences, 
							innovative VR training programs, immersive learning solutions, and workforce development in VR. 
							Embrace Edtech with VR safety solutions, realistic VR simulations, and cutting-edge XR training platforms. 
							Witness visual educational journeys, skill development in VR, and engaging employee training experiences. 
							Step into high-voltage scenarios and electrical safety simulations in VR. 
							Experience XR for power industry management and utilities.' />
						</div>
					</div>
					<article className='text__body'>Metaenga platform enables management at a scale for industrial VR training programs and gathering essential training data to maximise training outcomes, employee engagement and productivity
					</article>
					<article className='text__body' style={{ fontWeight: 600 }}>Discover our XR Platform and explore <span style={{ whiteSpace: 'nowrap' }}>VR training library.</span> <br /> Get free access now!
					</article>
					<div className="promo__info-buttons">
						<ButtonLink href='https://app.metaenga.com/self-registration' className='btn-link primary' id='free-btn-promo'>Start free</ButtonLink>
						<VideoModal src='https://www.youtube.com/embed/Vphdes0rJok?autoplay=1&amp'  id='video-btn-promo'>Watch video</VideoModal>
					</div>
				</div>
				 <div className="promo__media pc">
					<div className="promo__media-img">
						<Video src='../../assets/videos/Metaenga.mp4' thumb='https://metaenga.com/assets/Metaenga.jpg' />
					</div>
				</div>
			</div>
			<div className="partners">
				<p className='small__header'>
					Partnerships we are proud of
				</p>
				<div className="partners__container">
					<div className="partners__item">
						<i className='icon-AVO' />
					</div>
					{/*<div className="partners__item">
						<img src={raf} alt='Logo RAF' />
					</div>*/}
					<div className="partners__item pc">
						<i className='icon-Wincanton' />
					</div>
					<div className="partners__item">
						<i className='icon-TfL' />
					</div>
					<div className="partners__item tablet">
						<i className='icon-Mercury' style={{ fontSize: 30 }} />
					</div>

				</div>
			</div>
		</div>
	)
}

export default Promo