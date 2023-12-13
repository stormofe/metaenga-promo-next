import { Calculator } from "./price/Calculator"
import { Table } from "./price/Table"
import cl from './Price.module.css'

const Price = () => {
	return (
		<div className='container' style={{ padding: 0 }}>
			<div className={cl.title}>
				<h6 className='mid__header'>Choose your subscription plan</h6>
				{/*{winWidth > 767.5 && <p className='text__body-light'>Small businesses and Enterprises can take advantage of Metaenga platform <br /> without compromising on quality of the content.</p>}*/}
			</div>
			<Calculator />
			<Table />
		</div>
	)
}

export { Price }