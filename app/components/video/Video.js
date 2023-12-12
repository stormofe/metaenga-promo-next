

function Video({ src, thumb = '', alt = '' }) {
	return (
			<video src={src} poster={thumb} autoPlay muted loop playsInline disablePictureInPicture />
	)
}

export  {Video}