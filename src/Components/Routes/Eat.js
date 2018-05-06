import React, { Component } from 'react';
import '../../Styles/Eat.css';

export default class Eat extends Component {
	render() {
		return (
			<div className='eat'>
				<h1 className='pageTitle'>Restaurant Reviews</h1>
				<div className='restaurant'>
					<div>
						<h2>Frugals</h2>
						<img src={require('../../fact.jpg')} alt="Did You Know?" className="img-fluid"/>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia nisl eget metus eleifend, ut gravida elit lobortis. Aliquam nec congue nunc, et sollicitudin dui. Nam tincidunt neque tempor libero scelerisque sagittis. Cras justo sem, pretium ac tempor nec, ultrices sit amet metus. Mauris porta tellus vitae dui luctus feugiat. Suspendisse nisl ex, convallis ut tortor viverra, posuere congue nisi. Aliquam erat volutpat. Cras et bibendum erat. Donec dolor ante, suscipit ac est sed, interdum laoreet ante. Sed dolor tellus, sodales luctus sagittis interdum, ultrices et mi. Nunc eu condimentum sem. Nullam tempus pharetra purus, sed dictum sem pharetra id. Praesent at condimentum arcu, eget aliquet dolor. Maecenas quis mi luctus, consequat risus id, interdum mauris. Morbi ornare lorem et luctus feugiat.</p>
				</div>
			</div>
		)
	}
}
