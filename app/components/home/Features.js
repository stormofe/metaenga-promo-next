import effortless_p from '../../../public/assets/img/features/poster/Effortless.jpg'
import assign_p from '../../../public/assets/img/features/poster/AssignTraining.jpg'
import createTeam_p from '../../../public/assets/img/features/poster/CreateTeam.jpg'
import insights_p from '../../../public/assets/img/features/poster/Insights.jpg'
import devices_p from '../../../public/assets/img/features/poster/SetUpDevices.jpg'
import classrooms_p from '../../../public/assets/img/features/poster/VRClassrooms.jpg'


import effortless_p_m from '../../../public/assets/img/features/posterMob/Effortless_m.jpg'
import assign_p_m from '../../../public/assets/img/features/posterMob/AssignTraining_m.jpg'
import createTeam_p_m from '../../../public/assets/img/features/posterMob/CreateTeam_m.jpg'
import insights_p_m from '../../../public/assets/img/features/posterMob/Insights_m.jpg'
import devices_p_m from '../../../public/assets/img/features/posterMob/SetUpDevices_m.jpg'
import classrooms_p_m from '../../../public/assets/img/features/posterMob/VRClassrooms_m.jpg'

import './Features.css';

import FeautersCard from './feauters/FeautersCard';
import FeautersCardMob from './feauters/FeautersCardMob';

const featuresCards = [
	{ title: <h3 className='mid__header'>Make deploying VR training on-site effortless</h3>, titleMob: <h3 className='mid__header'>Make deploying VR training <br /> on-site effortless</h3>, text: '', list: ['Upload content onto devices easy', 'Manage devices from admin panel', 'Measure training outcomes'], img: effortless_p, img_m: effortless_p_m, vid: './assets/img/features/video/Effortless.mp4', vid_m: './assets/img/features/videoMob/Effortless_m.mp4', id: 1, type: 'list' },
	{ title: <h3 className='mid__header'>Streamline XR content,	users and teams</h3>, titleMob: <h3 className='mid__header'>Streamline XR content, <br />	users and teams</h3>, text: 'Scale knowledge flexibly by instantly distributing immersive content through efficiently managing users, teams and headsets across your organisation.', img: createTeam_p, img_m: createTeam_p_m, vid: './assets/img/features/video/CreateTeam.mp4', vid_m: './assets/img/features/videoMob/CreateTeam_m.mp4', id: 2, type: 'left' },
	{ title: <h3 className='mid__header'>Run your fleet <br /> of VR headsets</h3>, titleMob: <h3 className='mid__header'>Run your fleet <br /> of VR headsets</h3>, text: 'Easily set up your VR devices, configure settings, upload content remotely, manage access, and monitor your inventory.', img: devices_p, img_m: devices_p_m, vid: './assets/img/features/video/SetUpDevices.mp4', vid_m: './assets/img/features/videoMob/SetUpDevices_m.mp4', id: 3, type: 'right' },
	{ title: <h3 className='mid__header'>Assign XR training <br /> on a limitless scale</h3>, titleMob: <h3 className='mid__header'>Assign XR training <br /> on a limitless scale</h3>, text: 'Metaenga allows making individual or group employee training assignments to deliver content at scale.', img: assign_p, img_m: assign_p_m, vid: './assets/img/features/video/AssignTraining.mp4', vid_m: './assets/img/features/videoMob/AssignTraining_m.mp4', id: 4, type: 'left' },
	{ title: <h3 className='mid__header'>Explore results, <br /> boost productivity</h3>, titleMob: <h3 className='mid__header'>Explore results, <br /> boost productivity</h3>, text: 'Real-time  AI-powered performance tracking and reporting that provides valuable insights into employee development.', img: insights_p, img_m: insights_p_m, vid: './assets/img/features/video/Insights.mp4', vid_m: './assets/img/features/videoMob/Insights_m.mp4', id: 5, type: 'right' },
	{ title: <h3 className='mid__header'>VR Classrooms <br /> for group sessions</h3>, titleMob: <h3 className='mid__header'>VR Classrooms <br /> for group sessions</h3>, text: 'Take full control of 360 group training sessions with remote video playback and sync streaming.', img: classrooms_p, img_m: classrooms_p_m, vid: './assets/img/features/video/VRClassrooms.mp4', vid_m: './assets/img/features/videoMob/VRClassrooms_m.mp4', id: 6, type: 'left' },
]


function Features() {

	return (
		<>
			{
				featuresCards.map((card) => <FeautersCard key={card.id} {...card} />)

			}
			{
				featuresCards.map((card) => <FeautersCardMob key={`${card.id}-mob`} {...card} />)
			}
		</>
	)
}

export { Features }