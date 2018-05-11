import React, { Component } from 'react';
import '../../Styles/Eat.css';

export default class Eat extends Component {
	render() {
		
		const restaurants = [
			{
				'title': 'Frugal\'s',
				'image': require('../../Images/frugal.jpg'),
				'address': {
						'one': '1520 E Front Street',
						'two': 'Port Angeles, WA 98363'
					},
				'paragraph': {
						'one': 'Not wanting to stay out too late for dinner and ensuring I\'d be rested enough for the journey to Victoria, I found Frugal\'s, a fast food burger joint that proclaims itself to be the Best of the Northwest.  Located next door to the Days Inn I stayed at, I headed there on foot, only to realize it was only a drive-thru, so I walked back and hopped in my car.',
						'two': 'With two sides of the drive thru, even at 7:00 pm, there were plenty of cars in line.  Wanting something juicy, I got myself a burger in fries, and though I entered the left hand side of the drive thru, not realizing it would be a reach to grab my food on the opposite side of me, I was able to easily get my burger and fries, at a reasonable price of $5.96.  As I drove off, I was greeted with a Thank You sign in English, Clallam and another language (which also appeared to be Native American).',
						'three': 'After a hop skip of a drive back to my hotel room, I opened my burger and fries, enjoying each an every bite of it.  The burger was delicious and juicy, and along with the tasty french fries, it was the perfect meal to enjoy in your hotel room and watch basketball on the TV.  I also brought a little Pendleton Whiskey from home, which complemented the meal.  In all, a perfect easy meal.'
					}
			},
			{
				'title': 'Frankie\'s Modern Diner',
				'image': require('../../Images/frankie.jpg'),
				'address': {
						'one': '910 Government St #38',
						'two': 'Victoria, BC V8W 1X3, Canada'
					},
				'paragraph': {
						'one': 'Located in downtown Victoria, I thought it would be a fun place to eat while researching online, so I had my lunch here.  I was expecting more of a Retro Cafe, the type where oldies jams would play on the jukebox.  I could envision my newly discovered Grandpa Buddy doing his best Fonz impression.  Entering the place, as soon as I walked up the stairs, I soon realized I would not be having that type of experience.  Instead, I found a nice friendly eatery with plenty of food options, drinks and all the pleasentries you would expect in Canada.',
						'two': 'Wanting to try a Canadian beer, not the kind you\'d find stacked with the Bud and Coors of the world, I opted for a Hoyne Pilsner, to have something different.  A crisp summer beer seemed perfect for the type of weather outside.  Though the glass was frozen, the beer itself had a nice refreshing taste.  Sticking to wanting to have something different, I had a bowl of Chowder, which was presented nicely and tasted well also.',
						'three': 'When it was all said and done, I enjoyed my first Canadian meal, all at the price of 21.50 dollars, which of course, is Canadian dollars.  After entering my debit card into a machine and answering a few questions on the handheld device, which was a little confusing due to its United States related questions, I got my receipt, which kindly told me that I only spent about 17.00 US Dollars.'
					}
			},
			{
				'title': 'Coyote BBQ Pub',
				'image': require('../../Images/coyote.jpg'),
				'address': {
						'one': '201 E Front St',
						'two': 'Port Angeles, WA 98362'
					},
				'paragraph': {
					
						'one': 'Making my way back to Port Angeles, tired from a long and fun day in Victoria, I again opted for a different food experience, finding a BBQ restaurant named Coyotes.  The building itself was kind of ambiguous, which made it not stand out particularly, but once I walked inside, I felt like I was in the Wild West.',
						'two': 'Starting with a beverage, I chose the classic but not a drink I usually have, a Sidecar.  Noted with having Remy Martin cognac, the cocktail was tasty.',
						'three': 'For dinner, I again opted for something less traditional than my usual food, so I ordered a Nacho plate with Chili.  The chili, according to the server, was a new recipe. With plenty of meats, beans and spices, it was delicious, which I assured the server it was.  It complemented the Nachos well, which contained cheese, salsa and jalapeños, among other things. The only downside was that I wasn’t able to finish the whole plate, stopping having eaten a good 90%.'

					}
			}
		];
		let restaurantReviews = restaurants.map((restaurant, index) => 
			<div className='restaurant' key={index}>
					<h2 className="restaurantTitle">{restaurant.title}</h2>
					<div>
						<img src={restaurant.image} alt={restaurant.title} className="img-fluid"/>
						<div className="address">
							<p>{restaurant.address.one}</p>
							<p>{restaurant.address.two}</p>
						</div>
					</div>
					<div className='paragraph'>
						<p>{restaurant.paragraph.one}</p>
						<p>{restaurant.paragraph.two}</p>
						<p>{restaurant.paragraph.three}</p>
					</div>
				</div>
	);
		return (
			<div className='eat'>
				<h1 className='pageTitle'>Restaurant Reviews</h1>
				{restaurantReviews}
			</div>
		)
	}
}
