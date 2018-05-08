import React, { Component } from 'react';
import '../../Styles/Eat.css';

export default class Eat extends Component {
	render() {
		return (
			<div className='eat'>
				<h1 className='pageTitle'>Restaurant Reviews</h1>
				
				<div className='restaurant'>
					<h2 className="restaurantTitle">Frugal's</h2>
					<div>
						<img src={require('../../Images/frugal.jpg')} alt="Frugal's" className="img-fluid"/>
						<div className="address">
							<p>1520 E Front St</p>
							<p>Port Angeles, WA 98363</p>
						</div>
					</div>
					<div className='paragraph'>
						<p></p>
						<p></p>
						<p></p>
					</div>
				</div>

				<div className='restaurant'>
					<h2 className="restaurantTitle">Frankie's Modern Diner</h2>
					<div>
						<img src={require('../../Images/frankie.jpg')} alt="Frankie's Modern Diner" className="img-fluid"/>
						<div className="address">
							<p>910 Government St #38</p>
							<p>Victoria, BC V8W 1X3, Canada</p>
						</div>
					</div>
					<div className='paragraph'>
						<p>Located in downtown Victoria, I thought it would be a fun place to eat while researching online, so I had my lunch here.  I was expecting more of a Retro Cafe, the type where oldies jams would play on the jukebox.  I could envision my newly discovered Grandpa Buddy doing his best Fonz impression.  Entering the place, as soon as I walked up the stairs, I soon realized I would not be having that type of experience.  Instead, I found a nice friendly eatery with plenty of food options, drinks and all the pleasentries you would expect in Canada.</p>
						<p>Wanting to try a Canadian beer, not the kind you'd find stacked with the Bud and Coors of the world, I opted for a Hoyne Pilsner, to have something different.  A crisp summer beer seemed perfect for the type of weather outside.  Though the glass was frozen, the beer itself had a nice refreshing taste.  Sticking to wanting to have something different, I had a bowl of Chowder, which was presented nicely and tasted well also.</p>
						<p>When it was all said and done, I enjoyed my first Canadian meal, all at the price of 21.50 dollars, which of course, is Canadian dollars.  After entering my debit card into a machine and answering a few questions on the handheld device, which was a little confusing due to its United States related questions, I got my receipt, which kindly told me that I only spent about 17.00 US Dollars.</p>
					</div>
				</div>
			</div>
		)
	}
}
