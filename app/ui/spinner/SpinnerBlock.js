import React from 'react'
import Spinner from './Spinner'

import cl from './SpinnerBlock.module.css'

function SpinnerBlock({height = 50, width = '100%', spinnerWith = 50}) {
  return (
	 <div style={{width: width, height: height}} className={cl.block}>
		<Spinner width={spinnerWith} />
	 </div>
  )
}

export default SpinnerBlock