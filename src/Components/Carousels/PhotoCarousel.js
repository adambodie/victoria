import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from '../Containers/PhotoList';
import '../../Styles/Slick.css';


export default class Carousel extends Component {
  constructor(props) {
      super(props);
      this.state = {
        photographs: [],
      };
    }

    componentDidMount() {
      axios.get(`https://s3-us-west-2.amazonaws.com/victoria.bodiewebdesign.com/data.json`)
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
      return (
		    <div>
          <PhotoList data={this.state.photographs} begin={this.props.begin} end={this.props.end} />
        </div>
      );
    }
}
