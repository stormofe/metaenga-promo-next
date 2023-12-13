'use client';
import { useMemo, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import Slider from "rc-slider";
import classNames from "classnames"

import { useWindowSize } from "@/app/hooks/useWindowWidth"
import { ButtonLink } from "@/app/ui/button/ButtonLink"
import { Switch } from "@/app/ui/switch/Switch"
import { Count } from "@/app/ui/count/Count"
import { TooltipIcon } from "@/app/ui/tooltipIcon/TooltipIcon"

import { sumAnnually, sumAnnuallySaleAbove20, sumAnnuallySaleAbove50, sumMonthly } from '../../../variables/planPrice'

import cl from '../Price.module.css'
import 'rc-slider/assets/index.css';

const Calculator = () => {
	const winWidth = useWindowSize()

	const [standartCount, setStandartCount] = useState(1)
	const [sale, setSale] = useState(0)

	const [annualy, setAnnualy] = useState(true)

	const plans = [
		{
			name: 'Free',
			subname: 'For early starters',
			price: 0,
			caption: ['Up to 3 users'],
			details: [
				"Up to 3 organization users",
				"Up to 1 Gb upload limits",
				"3 VR training",
				"Up to 1 classroom",
				"Basic training analytics"
			],
			count: null
		},
		{
			name: 'Standard',
			subname: 'To use more features',
			price: sumMonthly,
			caption: [],
			details: [
				"Unlimited organization users",
				"Up to 400 Gb upload limits",
				"9 VR training",
				"Unlimited classrooms"
			],
			count: standartCount,
			setCount: setStandartCount
		}
	]

	const calculatePrice = (price) => {
		if (annualy) {
			if (standartCount >= 50) {
				setSale(Math.round((price * 12 * standartCount) - ((sumAnnually - sumAnnuallySaleAbove50) * standartCount))) // 500 - per user for year
				return Math.round((sumAnnually - sumAnnuallySaleAbove50) * standartCount)
			} else if (standartCount >= 20) {
				setSale(Math.round((price * 12 * standartCount) - ((sumAnnually - sumAnnuallySaleAbove20) * standartCount)))
				return Math.round((sumAnnually - sumAnnuallySaleAbove20) * standartCount)

			} else {
				setSale(Math.round((price * 12 * standartCount) - (sumAnnually * standartCount)))
				return Math.round(sumAnnually * standartCount)
			}
		} else {
			setSale(0)
			return Math.round(price * standartCount)
		}
	}

	const totalPrice = useMemo(() => calculatePrice(sumMonthly, standartCount, annualy), [sumMonthly, standartCount, annualy])


	const card = (plan, index) => {
		return (
			<div className={cl.card} key={index} style={index === 1 ? { border: '2px solid var(--primary-color)' } : {}}>
				{index !== 0 && <p className={classNames(cl.card__helper, 'caption-light')}>Annual subscription discount for 20+ users</p>}
				<div className={cl.card__header}>
					<p className='subheader'>{plan.name}</p>
					<p className='text__body'>{plan.subname}</p>
				</div>
				<div className={cl.card__price}>
					<p className='mid__header'>€{(annualy && index !== 0) ? Math.round(totalPrice / standartCount / 12) : plan.price}</p>
					{plan.price != 0 && <p className='text__body-light'>per user/month</p>}
					{(annualy && index !== 0) ? <div className={classNames(cl.chips, cl.chipsGray)}>billed annually</div> : <div className={classNames(cl.chips, cl.chipsGray)} style={{ opacity: 0 }}>billed annually</div>}
				</div>
				<div className={cl.card__calc}>
					{plan.caption.length > 0 ? <div className={cl.plan__captions}> {plan.caption?.map((item, index) => {
						return <p className={cl.card__calc_caption} key={index}>{item}</p>
					})}</div>
						: <><div className={cl.card__calc_count}>
							{winWidth < 767.5 && <p className='text__body-light' style={{ marginBottom: 2 }}>Number of users</p>}
							<Count id='licenses-count-calc' count={plan.count} setCount={plan.setCount} max={150} min={1} />
							{winWidth > 767.5 && <p className='text__body-light'>users</p>}
						</div>
							<div className={cl.card__calc_price}>
								<p className='text__body-bold'>€{annualy ? Math.round(totalPrice / 12).toLocaleString('en-UK') : totalPrice.toLocaleString('en-UK')}</p>
								<p className='text__body-light'>/month</p>
							</div>
						</>}
				</div>
				<div className={cl.card__supp} style={(index === 0 || standartCount < 150) ? { opacity: 0, visibility: 'hidden' } : {}}>
					<p className='caption-light'>You can buy up to 150 seats here. <br />
						<a href='https://digitalengineeringmagic.atlassian.net/servicedesk/customer/portals' target='_blank'>Contact us</a> if you need a bigger license.</p>
				</div>
				<div className={cl.card__btn}>
					{index === 0 ? <ButtonLink id='free-btn-plan-card' className='btn-link secondary' href='https://app.metaenga.com/self-registration' target='_blank'>Subscribe free</ButtonLink>
						: <ButtonLink id='standard-btn-plan-card' className='btn-link primary' href='https://app.metaenga.com/self-registration' target='_blank'>Get Standard</ButtonLink>
					}
				</div>
				{index !== 0 ? <div className={cl.total}>
					<p className='text__body'>
						Total price: €{totalPrice.toLocaleString('en-UK')}<span> {annualy ? '/year' : '/monthly'}</span>
					</p>
					{sale ? <div className={cl.chips}>
						<span>Saved: €{sale.toLocaleString('en-UK')}</span>
					</div>
						: <div className={cl.chips} style={{ opacity: 0 }}>
							<span>Saved: €{sale.toLocaleString('en-UK')}</span>
						</div>
					}

				</div>
					: <div className={cl.emptyBlock}></div>
				}
				<div className={cl.divider}></div>
				<div className={cl.card__details}>
					{plan.details.map((detail, index) => (
						<p className='text__body' key={index}>
							<i className='icon-check_small' />
							{detail}</p>
					))}
					{index === 1 ? <>
						<p className='text__body'>
							<i className='icon-check_small' />
							<span>Full training reports</span>
							<div className={classNames(cl.chips, cl.chipsPrime)}>Closed beta</div>
						</p>
						<p className='text__body'>
							<i className='icon-check_small' />
							<span>Multiplayer</span>
							<div className={classNames(cl.chips, cl.chipsWarn)}>Coming soon</div>
						</p>
					</>
						: <>
							<p className='text__body' style={{ opacity: 0, marginBottom: 15.2 }}>
								<i className='icon-check_small' />
								<span>Full training reports</span>
								<div className={classNames(cl.chips, cl.chipsPrime)}>Closed beta</div>
							</p>
						</>
					}
				</div>
				{/*// for flex*/}
				<div></div>
				{index === 10 && <div className={cl.overlay}>
					{/*<Paragraph>Coming soon</Paragraph>*/}
				</div>
				}
			</div>
		)
	}

	return (
		<div className='container' style={{ padding: 0 }}>

			<div className={cl.title}>
				<h6 className='mid__header'>Choose your subscription plan</h6>
				{winWidth > 767.5 && <p className='text__body-light'>Small businesses and Enterprises can take advantage of Metaenga platform <br /> without compromising on quality of the content.</p>}
			</div>

			<div className={cl.switch}>
				<p className='small__header'>Billed Monthly</p>
				<Switch checked={annualy} onChange={() => setAnnualy(!annualy)} >
					{/*<Paragraph>Billed Annualy <span>(save up to 10%)</span></Paragraph>*/}
					<p className='small__header' style={annualy ? { color: 'var(--primary-color)', fontWeight: 600, marginRight: 8 } : { marginRight: 8 }}>Billed Annualy 				<div className={cl.chips}>
						Save 15%
					</div></p>
				</Switch>
			</div>

			{winWidth > 767.5 && <div className={cl.setRange}>
				<div className={cl.setRange__text}>
					<p className='text__body-light'>
						Set the number of users
					</p>
					<TooltipIcon tooltip='Number of registered users on the platform by the company' place='top' />
				</div>


				<div className={cl.range}>
					<Slider
						handle={(props) => {
							return (
								<div  {...props} className={classNames('rc-slider-handle', cl.handle)} style={{ left: `${props.offset}%` }}>
									<div className={classNames('custom-tooltipe', cl.tooltipe)}>
										<p className='text__body'>
											<span style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 500 }}>{props.value}</span> |
											<span style={annualy && standartCount > 19 ? { color: 'var(--warn-color)', fontWeight: 500 } : { color: '#fff', fontWeight: 500 }}> €{annualy ? Math.round(totalPrice / standartCount / 12) : sumMonthly}</span>
											/user/month
										</p>

									</div>
								</div>
							);
						}}
						range
						marks={{
							1: '1',
							10: '10',
							50: '50',
							150: '150+',
						}}
						min={1}
						max={150}
						value={standartCount > 150 ? [150] : [standartCount]}
						onChange={(value) => setStandartCount(value)}
					></Slider>

				</div>
			</div>}

			{winWidth < 700.5 ?
				<div className='price__slider'>
					<Swiper
						slidesPerView={'auto'}
						spaceBetween={winWidth < 700 ? 10 : 0}
						pagination={{
							clickable: true,
						}}
						centeredSlides={winWidth < 700 ? true : false}
						modules={[Pagination]}
					>
						{plans.map((plan, index) => (
							<SwiperSlide>
								{card(plan, index)}
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				: <div className={cl.cards}>
					{plans.map((plan, index) => (
						card(plan, index)
					))}
				</div>
			}
		</div>
	)
}

export { Calculator }