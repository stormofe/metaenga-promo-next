import {VrAppLink} from '../../ui/vrAppLink/VrAppLink';
import cl from './GetVRApp.module.css'
import './Quote.css';

function GetVRApp() {
	return (
		<div className="quote">
			<div className="container">
				<div className={cl.get}>
					<div className="container">
						<div className={cl.get__content}>
							<h5 className='main__header'>Get free VR app</h5>
							<p className='text__body'>
								To access the our cutting-edge VR training library, download free <br /> the XR training platform on your preferred headset.
							</p>
							<div className={cl.get__content_buttons}>
								<VrAppLink />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export  {GetVRApp}