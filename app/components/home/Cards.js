import './Cards.css'

function Cards() {
	return (
		<div className="container adv">
			<div className="cards">
				<div className="cards__container">
					<div className="cards__item">
						<div className="cards__item-img">
							<img src='./assets/img/cards/card1.webp' alt="working people" />
						</div>
						<p className="bigCard__header item__title">For industrial enterprise</p>
						<div className="item__overlay">
							<div className="item__overlay-text">
								<i className='icon-industry' />
								<article className='text__body'>If you're looking for ways to maximize the value of your organization's safety training program, Metaenga provides you with the most powerful and easy-to-use XR training tools to do just that.</article>
								<p className="bigCard__header item__title">For industrial enterprise</p>
							</div>
						</div>
					</div>
					<div className="cards__item">
						<div className="cards__item-img">
							<img src='./assets/img/cards/card2.webp' alt="working people" />
						</div>
						<p className='bigCard__header item__title'>For training services providers</p>
						<div className="item__overlay">
							<div className="item__overlay-text">
								<i className='icon-training' />
								<article>If you want to add value to your offerings and provide XR training, you can use Metaenga as your primary tool to distribute immersive learning programs with advanced analytics to engage your students.</article>
								<p className='bigCard__header item__title'>For training services providers</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="advantages">
				<h2 className='mid__header'>Platform designed to work with VR applications
					and 360°content</h2>
				<div className="advantages__container">
					<div className="advantages__item">
						<div className="advantages__item-img">
							<i className='icon-direction' />
						</div>

						<p className='text__body-second'>Procedural, method or operational training</p>
					</div>
					<div className="advantages__item">
						<div className="advantages__item-img">
							<i className='icon-helmet' />
						</div>
						<p className='text__body-second'>HSE compliance training programs, safety induction</p>
					</div>
					<div className="advantages__item">
						<div className="advantages__item-img">
							<i className='icon-wrench' />
						</div>
						<p className='text__body-second'>Learning machinery, gear or vehicles</p>
					</div>
					<div className="advantages__item">
						<div className="advantages__item-img">
							<i className='icon-list' />
						</div>
						<p className='text__body-second'>Helping new employees adjust
							to their environment</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export { Cards }