import React from 'react'
import Spinner from './Spinner'

import cl from './SpinnerOverlay.module.css'

function SpinnerOverlay(props) {
  return (
	 <div className={cl.overlay}>
		<Spinner {...props} />
	 </div>
  )
}

export default SpinnerOverlay