import React from 'react'
import { Link } from 'react-router-dom'
import BannerCarousel from './carousels/BannerCarousel'
import '../styles/Header.css'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return { links: state.links }
}

const Header = ({links}) => (
	<div>
		<div className='header'>
			<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
				<Link to='/' className='navbar-brand'>Adam's Black Ball</Link>
				<button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarCollapse'>
					<ul className='navbar-nav mr-auto'>
						{links.map((x, index) =>
							<li className='nav-item' key={index}>
								<Link to={x.link}>{x.name}</Link>
							</li>
						)}
					</ul>
				</div>
			</nav>
		</div>
		<BannerCarousel />
	</div>
)
export default connect(mapStateToProps)(Header)