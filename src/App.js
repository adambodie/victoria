import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './Styles/App.css';
import Header from './Components/Header';
import HomeRoute from './Components/Routes/HomeRoute';
import PhotoRoute from './Components/Routes/PhotoRoute';
import FactRoute from './Components/Routes/FactRoute';
import BuyRoute from './Components/Routes/BuyRoute';
import RestaurantRoute from './Components/Routes/RestaurantRoute';
import NotFoundRoute from './Components/Routes/NotFoundRoute';
import Footer from './Components/Footer';

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
						<Route component={NotFoundRoute} />
					</Switch>
				<Footer/>
			</div>
      </Router>
    );
  }
}

export default App;
