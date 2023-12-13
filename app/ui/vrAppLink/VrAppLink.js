import Link from 'next/link';

import classNames from 'classnames';

import cl from './VrAppLink.module.css'


function VrAppLink({ gray = false }) {
	return (
		<>
			{gray ?
				<Link href='https://www.meta.com/experiences/4950000178436188' target='_blank' className={classNames(cl.link, cl.gray)}>
					<i className="icon-logo_meta" />
					<span>Get for Quest</span>
				</Link>
				: <Link href='https://www.meta.com/experiences/4950000178436188' target='_blank' className={cl.link}>
					<i className="icon-logo_meta" />
					<span>Get for Quest</span>
				</Link>}
		</>
	)
}

export { VrAppLink }