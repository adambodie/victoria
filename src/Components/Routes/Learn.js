import React, { Component } from 'react';
import test from "../../fact.jpg";

export default class Learn extends Component {
	
	constructor() {
		super();
		this.state = {
			facts: [
			"John Elway was born in Port Angeles", 
			"Congregation Emanu-El is the oldest Jewish Synagogue in Canada",
			"The population of Port Angeles is about 19,500",
			"Port Angeles is anglicized from its original name, Puerto de Nuestra de los Angeles (Port of Our Lady of the Angels), named by Spanish explorer Francisco de Eliza in 1791",
			"In 2003, during a proposed construction project, human remains and artifacts were found in Port Angeles, which led to the discovery of the largest prehistoric Indian village and burial ground found in the United States, known as Tse-whit-zen.",
			"The Klallam native American tribe lived Port Angeles, whose historical presence led to the installment of street signs in the Klallam language, in addition to English.",
			"Port Angeles is the most populated city on the Olympic Peninsula, and home of the headquarters of Olympic National Park, which consists of the majority of the mountain range in the peninsula.",
			"The MV Coho, which carries passengers and vehicles from Port Angeles to Victoria, takes 90 minutes, traveling 20 nautical miles at a speed of 15 knots (about 17 mph)",
			"The MV Coho can hold up to 110 vehicles and 1,000 passengers",
			"The length of the MV Coho is 341 feet",
			"The Strait of Juan de Fuca, known in Canada as the Juan de Fuca Strait, which separates the Olympic Peninsula of Washington State from Vancouver Island of British Columbia, is about 96 miles long",
			"The international border runs right through the center of the Strait of Juan de Fuca",
			"Juan de Fuca was a Greek navigator who claimed to be the first non-native to explore the strait, looking for a semi-mythical Strait of Anian that theoretically separated North America from Asia",
			"The United States and Canada have a maritime boundary dispute over the seaward boundary west of the mouth of the Strait of Juan de Fuca",
			"Victoria lies on the southern end of Vancouver Island, just off the coast of Canada",
			"Vancouver Island is 290 miles in length and 62 miles in width at its widest point",
			"Vancouver Island is the largest island on the West Coast of North America",
			"The southern part of Vancouver island is the only part of Western Canada below the 49th parallel",
			"The southern part of Vancouver Island one of the warmest climates in Canada",
			"Vancouver Island is one of the few areas of Canada that can grow subtropical Mediterranean crops such as olives and lemons",
			"Vancouver Island has a population of about 780,000, which about half of them living in Greater Victoria"
 ]
		}

	}
	
  render() {
	  const listOfFacts = this.state.facts.map((fact, index)=>
				<div className="photo-container" key={ index }>
					<div className="photo slide">
						<img src={test} alt="Did You Know?"/>
						<div className="photo-overlay">
							<h3>{fact}</h3> 
						</div>
					</div>
				</div> 
		  );
	return (
		<div>
			<div className="facts">
				{listOfFacts}
			</div>
		</div>
	);
	}
}
