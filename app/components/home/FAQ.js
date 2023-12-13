'use client';
import React, { useEffect, useState } from 'react'

import './FAQ.css';
import { sumMonthly } from '../../variables/planPrice';

const Accordion = ({ title, index, openedAcc, onClick, children }) => {
	const [isOpen, setOpen] = React.useState(false);

	useEffect(() => {
		if (index === openedAcc) {
			setOpen(true)
		} else {
			setOpen(false)
		}
	}, [openedAcc, index])

	return (
		<div className="accordion-wrapper">
			<div
				className={`accordion-title ${isOpen ? "open" : ""}`}
				onClick={() => onClick(index)}
			>
				{title}
			</div>
			<div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
				<div className="accordion-content">{children}</div>
			</div>
		</div>
	);
};

const data = [
	{
		title: "What is Metaenga?",
		content: <p>Metaenga is an XR Training Platform that offers industrial companies and training providers the ability to integrate virtual reality into their existing learning programs at a scale and bring their training sessions to life.
			<br /> <br />
			You can utilize a variety of VR Training modules, manage immersive content across the organization, upload your own 360 videos for group and personal sessions, and explore real-time performance tracking and reporting that provides valuable insights into employee development.</p>,
	},
	{
		title: "What immersive content is available on Metaenga? ",
		content: <p>More than <span>10 VR Training</span> and 360 videos are available right now. <br />
			Metaenga has a constantly growing VR Training Library on workplace safety and the power and utilities industry.
			<br /> <br />
			Metaenga provides a 360 Video Library that can expand with your own educational 360 videos and can be accessed from the web interface or any device. Learn as much as you like, developing your skills in cooperation with your colleagues whenever you like.</p>,
	},
	{
		title: "How much does Metaenga cost?",
		content: <p>Discover Metaenga's cutting-edge immersive training solutions at scale on your fleet of favorite VR headsets for one fixed monthly or annual fee per user account. Plans range from <span>FREE</span> to <span>EUR {sumMonthly}.00</span> a month per user account. No extra costs.</p>,
	},
	{
		title: "Which VR headset do I need?",
		content: <p>Metaenga supports industry standards headsets <span>Meta Quest</span> and <span>Pico 4</span> for VR Training. <br />
			Metaenga team is constantly working on expanding the range of supported VR devices so that new devices will appear rapidly.
			<br /> <br />
			360 Video learning content is available everywhere. Sign in with your organization's Metaenga account to watch instantly on the web at <a className='accordion__link' href='https://metaenga.com'>metaenga.com</a> from your personal computer or any internet-connected device, including smartphones and tablets.
			<br /> <br />
			You can also download your favorite 360 learning videos with <span>iOS</span> and <span>Android</span>. Use the download feature to watch while you're on the go and without an internet connection. Take Metaenga with you anywhere.</p>
	},
	{
		title: "How do I cancel my subscription?",
		content: <p>Metaenga is flexible. There are no pesky contracts and no commitments. You can easily cancel your organization account online in a few clicks or just email us at <a className='accordion__link' href='mailto:info@metaenga.com'>info@metaenga.com</a>. There are no cancellation fees – start or stop organization user accounts anytime.</p>
	},
	{
		title: "Can I upload my existing organization's VR content?",
		content: <p>
			Not now. Metaenga offers an extensive and constantly growing VR Training Library. Metaenga provides bespoke development services of unique  VR Training solutions according to your organization's requirements.
			<br /><br />
			Uploading your organization's VR training content will be available in the upcoming year.
		</p>
	},
	{
		title: "Is Metaenga good for me?",
		content: <p>
			Metaegna is good for everyone - from businesses to individuals.
			<br /> <br />
			Metaenga platform offers skills development in a user-friendly and intuitive way, adding occupational safety and health awareness in a friendly work environment, thereby increasing learning speed, engagement, and productivity.
		</p>
	},

]

const trainingfaq = [
	{
		title: "Can I get this VR Training?",
		content: <p>
			Absolutely! You can get this VR Training under our cutting-edge XR Training Platform and explore any other solutions available in the VR Training Library at <a className='accordion__link' href='https://metaenga.com'>metaenga.com</a>
		</p>
	},
	{
		title: "Will there be more XR content available for me?",
		content: <p>
			Yes! Digital Engineering and Magic provides XR Training Platform with a constantly growing VR Training Library on workplace safety and the power and utilities industry. More than <span>10 VR Training</span> and 360 videos are available right now.
			<br /><br />
			XR Training Platform provides a 360 Video Library that can expand with your own educational 360 videos and can be accessed from the web interface or any device. <br />
			This solution is called <span>Metaenga</span>.
		</p>
	},
	{
		title: "How much does Metaenga cost?",
		content: <p>
			Discover Metaenga’s cutting-edge immersive training solutions at scale on your organization for one fixed monthly or annual fee per user account. <br /> <br />
			Plans range from <span>FREE</span> to <span>EUR {sumMonthly}.00</span> a month per user account. No extra costs.
		</p>
	},
	{
		title: "Which VR headset do I need?",
		content: <p>
			Metaenga supports industry standards headsets <span>Meta Quest</span> and <span>Pico 4</span> for VR Training. We are constantly working on expanding the range of supported VR devices so that new devices will appear rapidly. <br /> <br />
			360 Video learning content is available everywhere. Sign in with your organization’s Metaenga account to watch instantly from your personal computer or any internet-connected device, including smartphones and tablets. <br /><br />
			You can also download your favorite 360 learning videos with <span>iOS</span> and <span>Android</span>. Use the download feature to watch while you’re on the go and without an internet connection. Take Metaenga with you anywhere.
		</p>
	},
	{
		title: "Is the XR Training platform good for me?",
		content: <p>
			Metaegna is good for everyone – from businesses to individuals. <br /> <br />
			Metaenga platform offers skills development in a user-friendly and intuitive way, adding occupational safety and health awareness in a friendly work environment, thereby increasing learning speed, engagement, and productivity.
		</p>
	}

]

function FAQ() {
	const [activeAcc, setActiveAcc] = useState(null)
	const [dataForRender, setDataForRender] = useState(null);

	const onClick = (index) => {
		if (activeAcc === index) {
			setActiveAcc(null)
		} else {
			setActiveAcc(index)
		}
	}

	useEffect(() => {
		// This code runs only in the browser, where `window` is defined
		const newdata = window.location.pathname === '/training' ? trainingfaq : data;
		setDataForRender(newdata);
	 }, []);

	//const dataForRender = window.location.pathname === '/training' ? trainingfaq : data

	return (
		<div className="faq">
			<div className="container quote__container faq__container">

				<h6 className='mid__header'>Frequently Asked Questions</h6>
				{/*{winWidth < TABLET_WIDTH && <Button textbtn right icon='chevron' >Learn more</Button>}*/}

				<div className="wrapper">
					{dataForRender?.map((item, index) => (
						<Accordion title={item.title} index={index} openedAcc={activeAcc} key={index} onClick={onClick}>
							{item.content}
						</Accordion>
					))}

				</div>
			</div>
		</div>
	)
}

export {FAQ}