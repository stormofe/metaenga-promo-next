import Image from "next/image"

function Video({ src, thumb = '', alt = '' }) {
	return (
		<>
			{/*<Image src={thumb} alt={alt} width={0} height={0} />*/}
			<video src={src} poster={thumb} autoPlay muted loop playsInline disablePictureInPicture />
		</>
	)
}

export  {Video}