import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'

const figtree = Figtree({ subsets: ['latin'], style: 'normal', weight: ['400', '500', '600', '700'] })

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Head from 'next/head'

export const metadata: Metadata = {
	title: 'Metaenga | XR Training Platform for Managing VR Training Solutions',
	description: 'Empowering workforce development through the XR Training Platform for managing enterprise virtual reality safety training programs with analytics and reporting',
	keywords: [
		'metaenga',
		'vr training',
		'VR Safety Training',
		'vr simulation training',
		'VR Platform',
		'VR Training Solution',
		'VR Training Program',
		'XR Platform',
		'XR Training',
		'meta vr platform',
		'vr platform price',
		'virtual reality platform enterprises',
		'safety training for employees',
		'VR Training App',
		'XR Training App',
		'Edtech',
		'VR Safety',
		'XR Safety',
		'VR Safety Solution',
		'VR Training Program',
		'VR Training Solution',
		'VR Simulator',
		'XR Simulator',
		'VR Training Platform',
		'XR Training Platform',
		'VR learning',
		'VR Workforce Development',
		'XR Workforce Development',
		'VR for OSHA',
		'VR for HSE',
		'vr educational experiences',
		'vr educational apps',
		'VR Skill Development',
		'XR Skill Development',
		'VR safety training Program',
		'XR safety training program',
		'immersive platform',
		'immersive training',
		'immersive education',
		'immersive learning',
		'VR power industry',
		'VR substation',
		'VR electricity',
		'VR high voltage',
		'XR power industry',
		'XR substation',
		'XR electricity',
		'XR high voltage',
		'VR utility',
		'XR utility'
	],
	openGraph: {
		title: 'Metaenga | XR Training Platform for Managing VR Training Solutions',
		description: 'Empowering workforce development through the XR Training Platform for managing enterprise virtual reality safety training programs with analytics and reporting',
		type: 'website',
		locale: 'en_US',
		url: 'https://metaenga-promo-next.vercel.app',
		siteName: "Metaenga",
		images: [
			{
				url: 'https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
				width: 1200,
				height: 600,
			},
			{
				url: 'https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
				width: 1200,
				height: 600,
			},
		]
	},
	twitter: {
		card: "summary_large_image",
		site: "https://metaenga-promo-next.vercel.app",
		creator: "Metaenga",
		images: [{
			url: 'https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
			width: 1200,
			height: 600,
		},
		{
			url: 'https://images.unsplash.com/photo-1682687981715-fa2ff72bd87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
			width: 1200,
			height: 600,
		},]
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'google',
		yandex: 'yandex',
		yahoo: 'yahoo',
		other: {
			me: ['my-email', 'https://metaenga-promo-next.vercel.app'],
		},
	},
	alternates: {
		canonical: 'https://metaenga-promo-next.vercel.app',
		types: {
			'application/rss+xml': 'https://metaenga-promo-next.vercel.app',
		},
	},

}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">

			<body className={figtree.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
