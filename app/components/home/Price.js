import { Calculator } from "./price/Calculator"
import { Table } from "./price/Table"
import cl from './Price.module.css'

const Price = () => {
	return (
		<div className='container' style={{ padding: 0 }}>
			<Calculator />
			<Table />
		</div>
	)
}

export { Price }