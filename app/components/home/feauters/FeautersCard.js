import { Video } from "../../video/Video"

function FeautersCard(props) {

	const { title, text, list, type, img, vid } = props

	const rightImgCardWithList = (
		<section className='features pc'>
			<div className="container">
				<div className="description">
					<div className="description__container">
						<div className="description__item dark-card left">
							<p>Key features</p>
							{title}

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

						<div className="card__img right">
							<div className="card__img-img">
								<Video src={vid} thumb={img} />
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)

	const rightImgCard = (
		<section className='features pc'>
			<div className="container">
				<div className="description">
					<div className="description__container">
						<div className="description__item dark-card left">
							<p>Key features</p>
							{title}
							<p className="description__text">
								{text}
							</p>
						</div>
						<div className="card__img right">
							<div className="card__img-img">
								<Video src={vid} thumb={img} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)

	const leftImgCard = (
		<section className='features pc'>
			<div className="container">
				<div className="description">
					<div className="description__container">
						<div className="card__img left">
							<div className="card__img-img">
								<Video src={vid} thumb={img} />
							</div>
						</div>
						<div className='description__item right dark-card'>
							<p>Key features</p>
							{title}
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
		type === 'right' ? rightImgCard : type === 'left' ? leftImgCard : rightImgCardWithList
	)
}

export default FeautersCard