import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './Styles/App.css';
import Header from './Components/Header';
import Home from './Components/Routes/Home';
import Visit from './Components/Routes/Visit';
import Learn from './Components/Routes/Learn';
import Buy from './Components/Routes/Buy';
import Eat from './Components/Routes/Eat';
import NotFound from './Components/Routes/NotFound';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      	<Router>
			<div className="App">
				<Header/>
				<Switch>
				<Route exact path = "/" render={() => <Home/>}/>
				<Route path = "/visit" render={() => <Visit />}/>
				<Route path = "/eat" render={() => <Eat />}/>
				<Route path = "/learn" render={() => <Learn />}/>
				<Route path = "/buy" render={() => <Buy />}/>
				<Route component={NotFound} />
				</Switch>
				<Footer/>
			</div>
      </Router>
    );
  }
}


export default App;
