'use client'

import React, { useState } from 'react'

import { ButtonLink } from '@/app/ui/button/ButtonLink'
import Button from '@/app/ui/button/Button'

import cl from '../Price.module.css'

const Table = () => {
	const [showMore, setShowMore] = useState(false)
	return (
		<>
			<div className={cl.title} >
				<h6 className='mid__header' style={{ margin: 0 }}>Compare plans in detail</h6>
			</div>

			<div className={cl.compare}>
				<table>
					<thead>
						<tr>
							<th scope="col" id='headers'></th>
							<th scope="col" id='free'><TableHeader plan='Free' current={true} /></th>
							<th scope="col" id='standard'><TableHeader plan='Standard' /></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className={cl.compare__row_header} id='users' headers='headers'>Company users</td>
							<td headers='free users'>Up to 3</td>
							<td headers='standard users'>Unlimited</td>
							{/*<td>Unlimited</td>*/}
						</tr>
						<tr>
							<td className={cl.compare__row_header} id='video_upload_limit' headers='headers'>360 Video Upload Limits</td>
							<td headers='free video_upload_limit'>Up to 1 Gb</td>
							<td headers='standard video_upload_limit'>Up to 400Gb</td>
							{/*<td>Unlimited</td>*/}
						</tr>
						<tr>
							<td className={cl.compare__row_header} id='classrooms' headers='headers'>Classrooms</td>
							<td headers='free classrooms'>Up to 1</td>
							<td headers='standard classrooms'>Unlimited</td>
							{/*<td>Unlimited</td>*/}
						</tr>
						<tr>
							<td className={cl.compare__row_header} id='training_analytics' headers='headers'>Training analytics</td>
							<td headers='free training_analytics'>Basic</td>
							<td headers='free training_analytics'>Full</td>
							{/*<td>Full</td>*/}
						</tr>
						<tr>
							<td className={cl.compare__row_header} id='vr_trainings_bundle' headers='headers'>VR Training bundle</td>
							<td headers='free vr_trainings_bundle'>3</td>
							<td headers='standard vr_trainings_bundle'>9</td>
							{/*<td>Full</td>*/}
						</tr>
						<tr className={cl.compare__row_trainings}>
							<td className={cl.compare__row_header} id='empty' headers='headers'></td>
							<td headers='free vr_trainings_bundle '>1. Feeder Protection Relay Training </td>
							<td headers='standard vr_trainings_bundle '>1. Feeder Protection Relay Training </td>
							{/*<td>1. Feeder Protection Relay Training </td>*/}
						</tr>
						<tr className={cl.compare__row_trainings}>
							<td className={cl.compare__row_header} headers='headers empty'></td>
							<td headers='free vr_trainings_bundle '>2. Helicopter Landing Officer Experience</td>
							<td headers='standard vr_trainings_bundle '>2. Helicopter Landing Officer Experience</td>
							{/*<td>2. Transform Oil Sampling Training</td>*/}
						</tr>
						<tr className={cl.compare__row_trainings}>
							<td className={cl.compare__row_header} headers='headers empty'></td>
							<td headers='free vr_trainings_bundle '>3. High Voltage Electrical Substation Tour</td>
							<td headers='standard vr_trainings_bundle'>3. High Voltage Electrical Substation Tour</td>
							{/*<td>3. Occupational Safety and Health Training</td>*/}
						</tr>
						<tr className={cl.compare__row_trainings}>
							<td className={cl.compare__row_header} headers='headers empty'></td>
							<td></td>
							<td headers='standard vr_trainings_bundle '>4. Occupational Safety and Health Training</td>
							{/*<td>4. High Voltage Electrical Substation Tour</td>*/}
						</tr>
						<tr className={cl.compare__row_trainings}>
							<td className={cl.compare__row_header} headers='headers empty'></td>
							<td></td>
							<td headers='standard vr_trainings_bundle '>5. Heat Shrink Cable Joint Training</td>
							{/*<td>5. Heat Shrink Cable Joint VR Training</td>*/}
						</tr>
						<tr className={cl.compare__row_trainings} >
							<td className={cl.compare__row_header} headers='headers empty'></td>
							<td></td>
							<td headers='standard vr_trainings_bundle'>6. Warehouse Tour</td>
							{/*<td>6. MV Substation Transformer Isolating and LOTO</td>*/}
						</tr>
						<tr className={cl.compare__row_trainings}>
							<td className={cl.compare__row_header} headers='headers empty'></td>
							<td></td>
							<td headers='standard vr_trainings_bundle'>7. MV Substation Transformer Isolating and LOTO Training</td>
							{/*<td>7. Warehouse Tour</td>*/}
						</tr>
					</tbody>

					<tbody>
						{showMore && <>
							<tr className={cl.compare__row_trainings}>
								<td className={cl.compare__row_header} headers='headers empty'></td>
								<td></td>
								<td headers='standard vr_trainings_bundle'>8. Forklift Inspections & Pre-Operation</td>
								{/*<td>8. Fire Safety Training</td>*/}
							</tr>
							<tr className={cl.compare__row_trainings}>
								<td className={cl.compare__row_header} headers='headers empty'></td>
								<td></td>
								<td headers='standard vr_trainings_bundle '>9. Transform Oil Sampling Training</td>
								{/*<td>9. Work at Height Safety Training</td>*/}
							</tr>
						</>}
					</tbody>
				</table>
				<div className={cl.compare__showbtn}>
					{showMore
						? <Button className='btn textbtn primary' direction='right' icon='chevron-up' onClick={() => setShowMore(false)}>Show less</Button>
						: <Button className='btn textbtn primary' icon='chevron-down' direction='right' onClick={() => setShowMore(true)}>Show more</Button>

					}
				</div>
				{/*<div className={cl.compare__showbtn}>
		{showMore
			? <Button icon='up' right textbtn onClick={() => setShowMore(false)}>Show less</Button>
			: <Button icon='down' right textbtn onClick={() => setShowMore(true)}>Show more</Button>

		}
	</div>
	<table>
		<tbody>
			<tr >
				<td className={cl.compare__row_header}>360 Video</td>
				<td>1</td>
				<td>2</td>
				<td>2</td>
			</tr>
			<tr className={cl.compare__row_trainings}>
				<td className={cl.compare__row_header}></td>
				<td>1. HSE Course</td>
				<td>1. HSE Course</td>
				<td>1. HSE Course</td>
			</tr>
			<tr className={cl.compare__row_trainings}>
				<td className={cl.compare__row_header}></td>
				<td></td>
				<td>2. Safety Course</td>
				<td>2. Safety Course</td>
			</tr>
		</tbody>
	</table>*/}

			</div>
		</>
	)
}

const TableHeader = ({ plan, current = false }) => {
	return (
		<div className={cl.table__header}>
			<p className='text__body-bold small__header' style={{ fontWeight: 600 }}>{plan}</p>
			{/*<Subheader>€{price}</Subheader>
			<Caption>per user/month</Caption>*/}
			{current ?
				<ButtonLink className='btn-link secondary' id='free-btn-plan' href='https://app.metaenga.com/self-registration' target='_blank'>Subscribe free</ButtonLink>
				: <ButtonLink className='btn-link primary' id='standard-btn-plan' href='https://app.metaenga.com/self-registration' target='_blank'>Get Standard</ButtonLink>}
		</div>
	)
}

export { Table }