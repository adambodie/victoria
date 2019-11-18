import React from 'react'
import Fact from '../items/Fact'
import { connect } from 'react-redux'
import { increment, decrement } from '../../store/actions';

const mapStateToProps = state => {
	return {
		counter: state.counter
	}
}
const mapDispatchToProps = { increment, decrement }


const FactList = ({ data, counter, increment, decrement }) => (
	<React.Fragment>
	<div className="factButtons">
		<button onClick={decrement}>Less</button>
		<button onClick={increment}>More</button>
	</div>
	<div className='facts'>
		{data.map((x, index) => 
			<div key={index}>
				<Fact name={x}/>
			</div>
			).filter((x, index) => index < counter)
		}
	</div>
	</React.Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps)(FactList)