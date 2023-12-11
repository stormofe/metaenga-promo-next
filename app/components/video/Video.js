import Image from "next/image"

function Video({ src, thumb = '', alt = '' }) {
	console.log('Video src: ', src)
	return (
			<video src={src} poster={thumb} autoPlay muted loop playsInline disablePictureInPicture />
	)
}

export  {Video}