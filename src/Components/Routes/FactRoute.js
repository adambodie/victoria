import React from 'react';
import '../../Styles/Learn.css';
import FactList from '../Containers/FactList';
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		facts: state.facts
	}
}
const FactRoute = ({facts}) => (
	<div className="factRoute">
		<h1 className='pageTitle'>Fun Facts</h1>
		<FactList data={facts} />
	</div>
);

export default connect(mapStateToProps)(FactRoute)