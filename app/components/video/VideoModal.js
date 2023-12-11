'use client';

import React, { useEffect, useState } from 'react'
import {Modal} from '../../ui/modal/Modal'
import Button from '../../ui/button/Button';


function VideoModal({ src, videoTitle, ...props }) {
	const [modalOpen, setModalOpen] = useState(false)

	const callback = () => {
		setModalOpen(false)
	}

	return (
		<>
			{modalOpen && <Modal className='video__modal' modalisopen={modalOpen} setisopen={setModalOpen} callback={callback}>
				<div className="video-responsive">
					<iframe src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
				</div>

			</Modal>}
			<Button className='btn textbtn' direction='left' icon='play_circle_big' onClick={() => setModalOpen(true)} {...props}>Watch video</Button>
		</>
	)
}

export default VideoModal