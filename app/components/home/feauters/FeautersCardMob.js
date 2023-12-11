import { Video } from "../../video/Video"

function FeautersCardMob(props) {

	const { titleMob, text, list, type, img_m, vid_m } = props

	const cardMobileWithList = (
		<section className='features mob'>
			<div className="container">
				<div className="description">
					<div className="description__container">
						<div className="description__item dark-card left">
							{titleMob}
							<div className="description__item-img">
								<Video src={vid_m} thumb={img_m} />
							</div>
							<ul className="description__item-list list">
								{list?.map((item, index) => {
									return (
										<li className="list__item" key={index}>
											<div className="list__item-icon">
												<i className='icon-check' />
											</div>
											<p className='text__body-second'>{item}</p>
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)

	const cardMobile = (
		<section className='features mob'>
			<div className="container">
				<div className="description">
					<div className="description__container">
						<div className='description__item right'>
							{titleMob}
							<div className="description__item-img">
								<Video src={vid_m} thumb={img_m} />
							</div>
							<p className="description__text">
								{text}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)

	return (
		type === 'list' ? cardMobileWithList : cardMobile
	)
}

export default FeautersCardMob