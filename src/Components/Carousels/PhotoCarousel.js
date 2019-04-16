import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from '../Containers/PhotoList';
import '../../Styles/Slick.css';


export default class Carousel extends Component {
  constructor() {
      super();
      this.state = {
        photographs: [],
      };
    }

    componentDidMount() {
      axios.get(`https://victoria.bodiewebdesign.com/data.json`)
        .then(response => {
          this.setState({
            photographs: response.data
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing Photographs data', error);
        });
    }

    render() {
		const { photographs} = this.state;
		const { begin, end } = this.props;
		return (
			<PhotoList data={photographs} begin={begin} end={end} />
		);
	}
}
