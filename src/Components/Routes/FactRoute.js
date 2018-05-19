import React, { Component } from 'react';
import '../../Styles/Learn.css';
import FactList from '../Containers/FactList';
import shuffle from '../shuffle.js';

export default class FactRoute extends Component {
	
	constructor() {
		super();
		this.state = {
			facts: [
				"Hall of Fame Football player John Elway was born in Port Angeles", 
				"Congregation Emanu-El is the oldest Jewish Synagogue in Canada",
				"The population of Port Angeles is about 19,500",
				"Totem poles are mostly made to commemorate ancestors, mythology and other positive events regarding the culture, but a few of them have been built to bring shame to those who have wronged said tribe that built them.",
				"The United States and Canada have a maritime boundary dispute over the seaward boundary west of the mouth of the Strait of Juan de Fuca",
				"Port Angeles is the most populated city on the Olympic Peninsula, and home of the headquarters of Olympic National Park, which consists of the majority of the mountain range in the peninsula.",
				"Port Angeles is anglicized from its original name, Puerto de Nuestra de los Angeles (Port of Our Lady of the Angels), named by Spanish explorer Francisco de Eliza in 1791",
				"Victoria's Chinatown is the second oldest Chinatown in North America, after San Francisco's",
				"Thunderbird is a legendary creature of many Native American cultures, specifically of those along the Pacific Northwest Coast",
				"In 2003, during a proposed construction project, human remains and artifacts were found in Port Angeles, which led to the discovery of the largest prehistoric Indian village and burial ground found in the United States, known as Tse-whit-zen.",
				"Vancouver Island, like the city (in British Columbia and in Washington), is named after the British Officer of Royal Navy, George Vancouver, who explored the Pacific Northwest coast regions in 1791-1795",
				"The Klallam native American tribe lived Port Angeles, whose historical presence led to the installment of street signs in the Klallam language, in addition to English.",
				"For many years, the Empress Hotel did not have a front entrance sign, which once led workers to put up a sign stating 'Anyone who doesn't know this is The Empress shouldn't be staying here.'",
				"The MV Coho, which carries passengers and vehicles from Port Angeles to Victoria, takes 90 minutes, traveling 20 nautical miles at a speed of 15 knots (about 17 mph)",
				"Port Angeles sits in the Olympic Mountains rain shadows, receiving only 15-20 inches a rain per year, a sharp contrast to the 140-170 inches of rain per year the Olympic Mountains's Hoh Rainforest receives, considered the rainiest part of the continous United States",
				"Vancouver Island is 290 miles in length and 62 miles in width at its widest point",
				"Terry Fox, whose statue stands in Beacon Hill Park, attempted to run across Canada with an artifical leg to raise money for cancer awareness.  Starting in Newfoundland, he had to stop in Thunder Bay, Ontario due to declining health and later passed away.",
				"The MV Coho can hold up to 110 vehicles and 1,000 passengers",
				"Canada 150 is to honor the 150th Anniversary of the formation of the Canadian Confederation, in which the British colonies formed with Nova Scotia and New Brunswick to become Canada, which occurred on July 1, 1867",
				"Vancouver Island is one of the few areas of Canada that can grow subtropical Mediterranean crops such as olives and lemons",
				"Thunderbird Park, part of the Royal BC Museum, is home of totem poles, mostly from the Haida, Gitxsan and Kwakwaka'wakw tribes.",
				"Due to its climate and location, Sequim, Washington is nicknamed the 'Lavender Capital of North America,' cultivating more Lavender than anywhere outside of France",
				"Mile Zero of the Trans Canada Highway, which spans from British Columbia to Newfoundland & Labrador, begins in Victoria",
				"The Strait of Juan de Fuca, known in Canada as the Juan de Fuca Strait, which separates the Olympic Peninsula of Washington State from Vancouver Island of British Columbia, is about 96 miles long",
				"Juan de Fuca was a Greek navigator who claimed to be the first non-native to explore the strait, looking for a semi-mythical Strait of Anian that theoretically separated North America from Asia",
				"Vancouver Island is the largest island on the West Coast of North America, and the largest island in the Pacific Ocean east of New Zealand",
				"The southern part of Vancouver island is the only part of Western Canada below the 49th parallel",
				"Vancouver Island has a population of about 780,000, with about half of them living in Greater Victoria",
				"As of 2011, Aboriginal Canadians (including the First Nations tribes) consisted of about 6% of Victoria’s population.",
				"An average of 500,000 daily passengers arrive in Victoria docking in the Inner Harbour.",
				"Victoria is a popular filming location in Canada due to its proximity to Vancouver and a 6% distance location tax credit.",
				"Cricket has been played at Victoria’s Beacon Hill Park since the mid 19th century.",
				"Victoria is home of the world’s largest all-seaplane airline, Harbour Air.",
				"Future Hall of Fame Basketball player Steve Nash spent most of his childhood in Victoria.",
				"Sequim is pronounced as one syllable, like ‘skwim’",
				"The Hood Canal Bridge, connecting the Olympic and Kitsap Peninsulas, is the longest floating bridge in the world located in a saltwater tidal basin.",
				"Franklin D Roosevelt visited Port Angeles in 1937 to help establish Olympic National Park."
			],
		}
		
		this.newFacts = this.newFacts.bind(this);
	}
	
	newFacts() {
		alert("New Facts have been loaded");
		  this.setState(prevState => ({
			facts: shuffle(this.state.facts)
    }));
	}
  render() {

	return (
		<div>
		<h1 className='pageTitle'>Fun Facts</h1>
			<FactList data={this.state.facts} />
			<button className="factButton" onClick={this.newFacts}>More Facts</button>
		</div>
	);
	}
}
