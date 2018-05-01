import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Buttons from './Components/Buttons';
import Content from './Components/Content';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
		<Header/>
		<Banner/>
		<Buttons/>
		<Content/>
		<Footer/>
      </div>
    );
  }
}

export default App;
