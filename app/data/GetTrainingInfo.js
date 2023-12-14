class TrainingInfoData {
	constructor(id, linkid, name, category, shortdescr, descr, briefdescr, duration, features, objectives, audience, modes, assessment, available, languages, plan, ytvideo, thumb, gallery, video, pdf, cardimg, cardalt, videoalt) {
		this.id = id
		this.linkid = linkid
		this.name = name
		this.category = category
		this.shortdescr = shortdescr
		this.descr = descr
		this.briefdescr = briefdescr
		this.duration = duration
		this.features = features
		this.objectives = objectives
		this.audience = audience
		this.modes = modes
		this.assessment = assessment
		this.available = available
		this.languages = languages
		this.plan = plan
		this.ytvideo = ytvideo
		this.thumb = thumb
		this.gallery = gallery
		this.video = video
		this.pdf = pdf
		this.cardimg = cardimg
		this.cardalt = cardalt
		this.videoalt = videoalt
	}
}

const DATA = [
	new TrainingInfoData(
		1001,
		'hv-electricaL-substation-training',
		'High Voltage Electrical Substation',
		'General Knowledge',
		'Experience VR training for HV substations and learn about transformer and switchgear specifications',
		'Through exploring a virtual substation environment, this training will help participants become more familiar with the layout of industry-specific equipment, power transformers, oil circuit breakers, re-closers, switchyard, and switchgear.',
		'Learn the fundamentals of power transmission and distribution and substation and switchyard functions.',
		'20 min',
		['Single player', 'EU standard', 'English Ul', 'Voiceovers'],
		'MV substation layout, Power Transformers, Group Operated Air Break Switches, Disconnectors, Cts and Vts',
		'College, Trade school, Employee onboarding',
		'Single user',
		'No assessment',
		'Quest 2, Quest 3, Quest Pro, Pico 4',
		'English',
		'Free',
		'https://www.youtube.com/embed/91xoQ5SN1LE?autoplay=1&amp',
		'https://img.youtube.com/vi/91xoQ5SN1LE/maxresdefault.jpg',
		{
			pc: [
				['./assets/gallery/hves/HVES_PreviewImage01_Web_v01.jpg', 'Photo of a High Voltage Electrical Substation Transformer used in training.Virtual Reality (VR) training for substation maintenance, featuring XR programs. Enhance skills in high-voltage transformer operations and safety protocols. Learn efficient techniques for transformer maintenance and operation in a simulated environment.'],
				['./assets/gallery/hves/HVES_PreviewImage03_Web_v01.jpg', 'Image of High Voltage Electrical Substation Training: High-voltage coils and control boxes. Virtual Reality (VR) training for substation maintenance, featuring XR programs. Gain expertise in managing high-voltage coils and control boxes for transformer operations. Learn effective techniques in a simulated environment to ensure efficient substation performance and safety.'], ['./assets/gallery/hves/HVES_PreviewImage04_Web_v01.jpg', 'Overview photo of the entire yard of the Electrical Substation. Gain a comprehensive view of the substation environment used in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs for substation maintenance and operations. Understand the layout and components of the substation yard in a simulated environment.'], ['./assets/gallery/hves/HVES_PreviewImage05_Web_v01.jpg', 'Close-up photo of high-voltage coils with a demonstration of the assistant guide in VR training. Explore the intricate details of coils in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs showcasing assistant guide functionalities. Learn the specifics of coil operations and interact with the virtual guide for a comprehensive training experience.'], ['./assets/gallery/hves/HVES_PreviewImage06_Web_v01.jpg', 'Preview photo of voltage information display.	Learn about proper voltage levels in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs featuring informative displays on correct voltage levels. Gain insights into voltage safety protocols in a simulated environment.'], ['./assets/gallery/hves/HVES_PreviewImage07_Web_v01.jpg', 'Preview photo of tool selection in VR training interaction. Explore interactive tool choices in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs offering a glimpse into the selection of tools for simulated tasks. Experience hands-on learning by choosing the right tools in the virtual environment.']],
			mob: [['./assets/gallery/hves/mob/HVES_PreviewImage01_Web_v01.jpg', 'Photo of a High Voltage Electrical Substation Transformer used in training.Virtual Reality (VR) training for substation maintenance, featuring XR programs. Enhance skills in high-voltage transformer operations and safety protocols. Learn efficient techniques for transformer maintenance and operation in a simulated environment.'],
			['./assets/gallery/hves/mob/HVES_PreviewImage03_Web_v01.jpg', 'Image of High Voltage Electrical Substation Training: High-voltage coils and control boxes. Virtual Reality (VR) training for substation maintenance, featuring XR programs. Gain expertise in managing high-voltage coils and control boxes for transformer operations. Learn effective techniques in a simulated environment to ensure efficient substation performance and safety.'], ['./assets/gallery/hves/mob/HVES_PreviewImage04_Web_v01.jpg', 'Overview photo of the entire yard of the Electrical Substation. Gain a comprehensive view of the substation environment used in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs for substation maintenance and operations. Understand the layout and components of the substation yard in a simulated environment.'], ['./assets/gallery/hves/mob/HVES_PreviewImage05_Web_v01.jpg', 'Close-up photo of high-voltage coils with a demonstration of the assistant guide in VR training. Explore the intricate details of coils in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs showcasing assistant guide functionalities. Learn the specifics of coil operations and interact with the virtual guide for a comprehensive training experience.'], ['./assets/gallery/hves/mob/HVES_PreviewImage06_Web_v01.jpg', 'Preview photo of voltage information display.	Learn about proper voltage levels in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs featuring informative displays on correct voltage levels. Gain insights into voltage safety protocols in a simulated environment.'], ['./assets/gallery/hves/mob/HVES_PreviewImage07_Web_v01.jpg', 'Preview photo of tool selection in VR training interaction. Explore interactive tool choices in High Voltage Electrical Substation Training. Virtual Reality (VR) training with XR programs offering a glimpse into the selection of tools for simulated tasks. Experience hands-on learning by choosing the right tools in the virtual environment.']]
		},
		{ pc: './assets/slider/video/HVES.mp4', mob: null, pcThumb: './assets/gallery/hves/HVES_PreviewImage01_Web_v01.jpg', mobThumb: './assets/gallery/hves/mob/Landing-mobile-banner-592x1280-still-HVES.jpg' },
		"https://metaenga.com/download/pdf/HV-Electrical-Substation-VR-Training-Outline.pdf",
		'/assets/gallery/hves/HVES-prev.jpg',
		'VR Training: High Voltage Electrical Substation Tour. Explore immersive VR simulations for electrical safety training. Experience XR training programs for high-voltage scenarios. Enhance skills in a virtual reality environment.',
		"Explore our cutting-edge VR training program designed by Digital Engineering and Magic for individuals in the electric utility industry. Gain hands-on experience in high-voltage electric power substations, enhancing your familiarity with industry-specific equipment in a virtual environment. Our immersive training covers substation terms, brief parameters, and performance rates, offering a repeatable and flexible learning experience. Schedule your demo today to revolutionize your training in the evolving electric utility sector."
	),
	new TrainingInfoData(
		1002,
		'occupational-safety-and-health',
		'Occupational Safety and Health',
		'Safety Procedure',
		'This VR experience ensures safety for workers in hazardous areas near electrical equipment',
		'This VR Safety Training is dedicated to such important topics as maintaining safety at the workplace, helping employees to eliminate hazardous conditions and avoiding them by following the OSHA 1910.269 standards requirements.',
		'This training is designed to provide a virtual environment for comprehensive on-site training to high-risk workers.',
		'12 min',
		['Single player', 'EU standard', 'English Ul', 'Voiceovers'],
		'OSHA, HSE, Electrical Equipment, Hazard Awareness, De-energization, LOTO',
		'College, Trade school, Employee onboarding',
		'Single user',
		'No assessment',
		'Quest 2, Quest 3, Quest Pro, Pico 4',
		'English',
		'Standard',
		'https://www.youtube.com/embed/D4LarinRBFA?autoplay=1&amp',
		'https://img.youtube.com/vi/D4LarinRBFA/maxresdefault.jpg',
		{
			pc: [['./assets/gallery/osha/OSHA-01.jpg', 'Image featuring introductory information about Occupational Safety and Health Training.Set against the backdrop of the training facility, get an overview of the training environment. Virtual Reality (VR) training with XR programs designed for immersive safety education and workplace health protocols.'], ['./assets/gallery/osha/OSHA-02.jpg', 'Photo showcasing the recommended equipment for tasks in Occupational Safety and Health Training. Explore the provided gear and tools essential for training activities. Virtual Reality (VR) training with XR programs ensuring a realistic and prepared learning experience with the right equipment.'], ['./assets/gallery/osha/OSHA-03.jpg', 'Photo of the Virtual Reality (VR) training room for Occupational Safety and Health Training. Immerse yourself in a simulated environment designed for realistic and effective safety education. Explore the virtual training space with XR programs for an engaging and interactive learning experience.'], ['./assets/gallery/osha/OSHA-04.jpg', 'Photo of large-scale electrical equipment used in training scenarios. Explore the intricacies of handling oversized electrical components in specialized training sessions. Virtual Reality (VR) training with XR programs providing a close look at the operation and maintenance of large electrical equipment.'], ['./assets/gallery/osha/OSHA-05.jpg', 'Photo of an electrical panel with a user measuring voltage using a multimeter. Gain practical skills in voltage measurement within a simulated environment. Virtual Reality (VR) training with XR programs providing interactive scenarios for hands-on learning.'], ['./assets/gallery/osha/OSHA-06.jpg', 'Photo of an authorization magnetic key against the backdrop of electrical devices. Explore the integration of magnetic key access in secure electrical environments. Virtual Reality (VR) training with XR programs showcasing advanced security features in electrical systems.']],
			mob: [['./assets/gallery/osha/mob/OSHA-01.jpg', 'Image featuring introductory information about Occupational Safety and Health Training.Set against the backdrop of the training facility, get an overview of the training environment. Virtual Reality (VR) training with XR programs designed for immersive safety education and workplace health protocols.'], ['./assets/gallery/osha/mob/OSHA-02.jpg', 'Photo showcasing the recommended equipment for tasks in Occupational Safety and Health Training. Explore the provided gear and tools essential for training activities. Virtual Reality (VR) training with XR programs ensuring a realistic and prepared learning experience with the right equipment.'], ['./assets/gallery/osha/mob/OSHA-03.jpg', 'Photo of the Virtual Reality (VR) training room for Occupational Safety and Health Training. Immerse yourself in a simulated environment designed for realistic and effective safety education. Explore the virtual training space with XR programs for an engaging and interactive learning experience.'], ['./assets/gallery/osha/mob/OSHA-04.jpg', 'Photo of large-scale electrical equipment used in training scenarios. Explore the intricacies of handling oversized electrical components in specialized training sessions. Virtual Reality (VR) training with XR programs providing a close look at the operation and maintenance of large electrical equipment.'], ['./assets/gallery/osha/mob/OSHA-05.jpg', 'Photo of an electrical panel with a user measuring voltage using a multimeter. Gain practical skills in voltage measurement within a simulated environment. Virtual Reality (VR) training with XR programs providing interactive scenarios for hands-on learning.'], ['./assets/gallery/osha/mob/OSHA-06.jpg', 'Photo of an authorization magnetic key against the backdrop of electrical devices. Explore the integration of magnetic key access in secure electrical environments. Virtual Reality (VR) training with XR programs showcasing advanced security features in electrical systems.']]
		},
		{ pc: './assets/slider/video/OSHA.mp4', mob: null, pcThumb: './assets/gallery/osha/OSHA-01.jpg', mobThumb: './assets/gallery/osha/mob/Landing-mobile-banner-592x1280-still-OSHA.jpg' },
		"https://metaenga.com/download/pdf/Occupational-Safety-And-Health-VR-Training-Outline.pdf",
		'/assets/gallery/osha/OSHA-prev.jpg',
		'VR Training: Occupational Safety and Health Training. Engage in immersive VR simulations for workplace safety and health. Explore XR training programs focusing on occupational safety. Enhance skills in a virtual reality environment for a safer work environment.',
		"Prioritize electrical safety with our innovative VR training program by Digital Engineering and Magic. Designed for engineers and electricians, the program focuses on practical experience with actual-scale equipment, addressing behavioral issues that contribute to 90% of accidents in the field. The VR experience emphasizes electrical safety requirements, covering hazard identification, energy isolation, premises wiring, distribution panel operations, and proper use of personal protective equipment. Participants gain a lifelike understanding of OSHA requirements, empowering them to identify and mitigate electrical safety hazards in the workplace. Schedule your demo today to revolutionize safety training for high-risk workers."
	),
	new TrainingInfoData(
		1003,
		'transformer-oil-sampling',
		'Transformer Oil Sampling',
		'Step-by-Step Procedure',
		'Discover an easy way to perform preventative maintenance by taking samples of transformer oil',
		'Through the training, attendees are given a task to perform a preventive maintenance procedure — transformer oil sampling. Participants are invited to collect the necessary tools and step-by-step carry out the sampling procedure for transformer oil of voltage class 110 kV',
		'The participants are able to perform field-job and familiarize themselves	with a transformer oil sampling procedure.',
		'20 min',
		['Single player', 'EU standard', 'English Ul', 'Voiceovers'],
		'PPE, Power Transformers, Safety Workplace, Oil Sampling Method',
		'College, Trade school, Employee onboarding',
		'Single user',
		'No assessment',
		'Quest 2, Quest 3, Quest Pro, Pico 4',
		'English',
		'Free',
		'https://www.youtube.com/embed/zj4PurgE7Bs?autoplay=1&amp',
		'https://img.youtube.com/vi/zj4PurgE7Bs/maxresdefault.jpg',
		{
			pc: [['./assets/gallery/oil/TOS-01.jpg', 'Overview photo of the substation used in Transformer Oil Sampling Training. Gain a comprehensive view of the training environment for oil sampling procedures. Virtual Reality (VR) training with XR programs for effective and safe transformer oil sampling. Understand the layout and components of the substation in a simulated environment.'], ['./assets/gallery/oil/TOS-02.jpg', 'Photo featuring checkboxes for mandatory equipment verification. Highlighting equipment check procedures in Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs emphasizing the importance of verifying essential equipment. Experience the interactive process of checking off mandatory equipment in a simulated environment.'], ['./assets/gallery/oil/TOS-03.jpg', 'Photo capturing the moment of successfully completing Transformer Oil Sampling Training. Experience the satisfaction of mastering transformer oil sampling techniques in a simulated environment during Virtual Reality (VR) training with XR programs.'], ['./assets/gallery/oil/TOS-04.jpg', 'Photo capturing the process of oil sampling from the substation. Gain insight into the practical steps of oil sampling procedures during Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs providing a detailed and immersive look into the oil sampling process.'], ['./assets/gallery/oil/TOS-05.jpg', 'Photo depicting a safety induction session during Transformer Oil Sampling Training. Emphasize the importance of safety protocols through detailed safety briefings. 	Virtual Reality (VR) training with XR programs providing immersive safety training experiences.'], ['./assets/gallery/oil/TOS-06.jpg', 'Photo illustrating the familiarization process with the oil sampling valve device. Learn the intricacies of the valve used in oil sampling during Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs offering an immersive exploration of the oil sampling valve.']],
			mob: [['./assets/gallery/oil/mob/TOS-01.jpg', 'Overview photo of the substation used in Transformer Oil Sampling Training. Gain a comprehensive view of the training environment for oil sampling procedures. Virtual Reality (VR) training with XR programs for effective and safe transformer oil sampling. Understand the layout and components of the substation in a simulated environment.'], ['./assets/gallery/oil/mob/TOS-02.jpg', 'Photo featuring checkboxes for mandatory equipment verification. Highlighting equipment check procedures in Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs emphasizing the importance of verifying essential equipment. Experience the interactive process of checking off mandatory equipment in a simulated environment.'], ['./assets/gallery/oil/mob/TOS-03.jpg', 'Photo capturing the moment of successfully completing Transformer Oil Sampling Training. Experience the satisfaction of mastering transformer oil sampling techniques in a simulated environment during Virtual Reality (VR) training with XR programs.'], ['./assets/gallery/oil/mob/TOS-04.jpg', 'Photo capturing the process of oil sampling from the substation. Gain insight into the practical steps of oil sampling procedures during Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs providing a detailed and immersive look into the oil sampling process.'], ['./assets/gallery/oil/mob/TOS-05.jpg', 'Photo depicting a safety induction session during Transformer Oil Sampling Training. Emphasize the importance of safety protocols through detailed safety briefings. 	Virtual Reality (VR) training with XR programs providing immersive safety training experiences.'], ['./assets/gallery/oil/mob/TOS-06.jpg', 'Photo illustrating the familiarization process with the oil sampling valve device. Learn the intricacies of the valve used in oil sampling during Transformer Oil Sampling Training. Virtual Reality (VR) training with XR programs offering an immersive exploration of the oil sampling valve.']]
		},
		{ pc: './assets/slider/video/TOS.mp4', mob: null, pcThumb: './assets/gallery/oil/TOS-01.jpg', mobThumb: './assets/gallery/oil/mob/Landing-mobile-banner-592x1280-still-TOS.jpg' },
		"https://metaenga.com/download/pdf/Transformer-Oil-Sampling-VR-Training-Outline.pdf",
		'/assets/gallery/oil/TOS-prev.jpg',
		'Transformer Oil Sampling Training. Learn the proper techniques for sampling oil from transformers in immersive VR training. Enhance your skills in the safe and efficient collection of transformer oil samples. Explore XR training programs for transformer maintenance and oil analysis.',
		"Transform your approach to power transformer maintenance with our VR training program by Digital Engineering and Magic. Learn the essential skills for transformer oil sampling, including proper procedures, use of protective equipment, and workplace setup. Regular monitoring of transformer oil condition is crucial for early problem diagnosis. Our immersive training ensures a step-by-step learning process, combining audio and visual guidance for a positive onboarding experience. Gain competence in transformer maintenance and confidently apply your skills. Schedule your VR training demo today to elevate your expertise in electrical transmission and distribution networks."
	),
	new TrainingInfoData(
		1009,
		'substation-transformer-isolation',
		'Substation Transformer Isolation',
		'Step-by-Step Procedure',
		'Delve into VR training focused on the detailed procedures of medium voltage substation transformer isolation and Lockout-Tagout (LOTO) procedures.',
		'This VR solution guides learners through substation operations: from entry and PPE use to equipment handling, permissions, apparatus identification, tests, operating disconnects and breakers, to applying protective grounds with a hot stick and LOTO devices.',
		'This specially crafted VR solution guides learners from outside the substation to the core of operations.',
		'20 min',
		['Single player', 'EU standard', 'English Ul', 'Voiceovers'],
		'PPE, Power Transformers, Safety Workplace, Operating Disconnects and Vacuum Circuit Breakers',
		'College, Trade school, Employee onboarding',
		'Single user',
		'No assessment',
		'Quest 2, Quest 3, Quest Pro, Pico 4',
		'English',
		'Standard',
		'https://www.youtube.com/embed/77i1JT1yxNU?autoplay=1&amp',
		'https://img.youtube.com/vi/77i1JT1yxNU/maxresdefault.jpg',
		null,
		null,
		null,
		null,
		null,
		null
	),
	new TrainingInfoData(
		101,
		'feeder-protection-relay',
		'Feeder Protection Relay',
		'Product Knowledge',
		'Participants learn to configure primary current values in the feeder protection relay system during training',
		'The Feeder Protection Relay VR Training will give attendees functionality descriptions, input, and output devices and indicators, setting parameters, and technical data. Attendees also can explore the entire menu tree and configure the primary current value.',
		'The participants are able to configure a Feeder protection relay based on the ABB REF615 device.',
		'20 min',
		['Single player', 'EU standard', 'English Ul', 'Voiceovers'],
		'FPR parameters, technical data, entire menu tree, primary current value',
		'College, Trade school, Employee onboarding',
		'Single user',
		'No assessment',
		'Quest 2, Quest 3, Quest Pro, Pico 4',
		'English',
		'Free',
		'https://www.youtube.com/embed/Nra0XAr0aWI?autoplay=1&amp',
		'https://img.youtube.com/vi/Nra0XAr0aWI/maxresdefault.jpg',
		{
			pc: [['./assets/gallery/feeder/FRP-01.jpg', 'Overview photo of feeder protection relays used in Feeder Protection Relay Training.Gain insights into the components and functionalities of feeder protection relays. Virtual Reality (VR) training with XR programs providing a comprehensive look into relay operations and maintenance.'], ['./assets/gallery/feeder/FRP-02.jpg', 'Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.'], ['./assets/gallery/feeder/FRP-03.jpg', 'Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.'], ['./assets/gallery/feeder/FRP-04.jpg', 'Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.'], ['./assets/gallery/feeder/FRP-05.jpg', 'Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.'], ['./assets/gallery/feeder/FRP-06.jpg', 'Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.']],
			mob: [['./assets/gallery/feeder/mob/FRP-01.jpg', 'Overview photo of feeder protection relays used in Feeder Protection Relay Training.Gain insights into the components and functionalities of feeder protection relays. Virtual Reality (VR) training with XR programs providing a comprehensive look into relay operations and maintenance.'], ['./assets/gallery/feeder/mob/FRP-02.jpg', 'Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.'], ['./assets/gallery/feeder/mob/FRP-03.jpg', 'Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.'], ['./assets/gallery/feeder/mob/FRP-04.jpg', 'Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.'], ['./assets/gallery/feeder/mob/FRP-05.jpg', 'Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.'], ['./assets/gallery/feeder/mob/FRP-06.jpg', 'Photo illustrating step-by-step configuration of feeder protection relay in interactive mode. Learn the intricacies of relay setup with detailed interactive steps during Feeder Protection Relay Training. Virtual Reality (VR) training with XR programs offering an immersive and educational experience in relay configuration.']]
		},
		{ pc: null, mob: null, pcThumb: './assets/slider/poster/REF.jpg', mobThumb: './assets/gallery/feeder/mob/Landing-mobile-banner-592x1280-still-FPR.jpg' },
		"https://metaenga.com/download/pdf/Feeder-Protection-Relay-VR-Training-Outline.pdf",
		'/assets/gallery/feeder/FEEDER-prev.jpg',
		'Feeder Protection Relay Training. Participate in immersive VR training to master feeder protection relay operations. Enhance your skills in configuring and maintaining feeder protection relays. Explore XR training programs for efficient and reliable feeder protection systems.',
		"Enhance your understanding of feeder protection relay systems with our interactive VR training by Digital Engineering and Magic. Gain insights into the crucial role of protection relays in preventing electrical equipment damage and ensuring a continuous power supply. Our training provides a comprehensive overview, covering the user interface, inputs, outputs, monitoring, and control features of modern feeder protection relay systems. Elevate your knowledge and skills in power grid protection. Schedule your demo today and step into the future of electrical system management."
	),
]

export const getTrainingInfo = (id) => {
	return DATA.find(item => item.id === +id) || null
}

export const getTrainingInfoList = () => {
	const order = { 'Free': 1, 'Standard': 2, 'Premium': 3 }
	let sortedList = DATA.sort((a, b) => order[a.plan] - order[b.plan])
	return sortedList
}