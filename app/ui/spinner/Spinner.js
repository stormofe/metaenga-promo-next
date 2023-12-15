import Image from 'next/image'
import cl from './Spinner.module.css'

function Spinner({width = 50}) {
  return (
	 <div style={{width: width, height: width}} className={cl.container}>
		<Image src='./icons/svg/spinner.svg' alt="spinner" width={50} height={50} />
	 </div>
  )
}

export  {Spinner}