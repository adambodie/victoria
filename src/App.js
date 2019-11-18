import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import HomeRoute from './components/routes/HomeRoute';
import PhotoRoute from './components/routes/PhotoRoute';
import FactRoute from './components/routes/FactRoute';
import BuyRoute from './components/routes/BuyRoute';
import RestaurantRoute from './components/routes/RestaurantRoute';
import SpeakRoute from './components/routes/SpeakRoute';
import NotFoundRoute from './components/routes/NotFoundRoute';
import Footer from './components/Footer';
import ButtonCarousel from './components/carousels/ButtonCarousel.js';

class App extends Component {
  render() {
    return (
      	<Router>
			<div className="App">
				<Header/>
					<Switch>
						<Route exact path = "/" render={() => <HomeRoute />}/>
						<Route path = "/visit" render={() => <PhotoRoute />}/>
						<Route path = "/eat" render={() => <RestaurantRoute />}/>
						<Route path = "/learn" render={() => <FactRoute />}/>
						<Route path = "/buy" render={() => <BuyRoute />}/>
						<Route path = "/speak" render={()=> <SpeakRoute />}/>
						<Route component={NotFoundRoute} />
					</Switch>
				<ButtonCarousel />
				<Footer/>
			</div>
      </Router>
    );
  }
}

export default App;
