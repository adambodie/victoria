import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from '../Containers/PhotoList';
import '../../Styles/Slick.css';
import formUrl from '../formUrl.js';

export default class Carousel extends Component {
  constructor(props) {
      super(props);
      this.state = {
        photographs: [],
        per_page: this.props.page
      };
    }

    componentDidMount() {
      let photoset_id = this.props.id;
      let per_page = this.props.page;
      const url = formUrl(photoset_id, per_page);
      axios.get(url)
        .then(response => {
          this.setState({
            photographs: response.data.photoset.photo,
          });
        })
        .catch(error => {
          console.log('Error fetching and parsing Photographs data', error);
        });
    }

    render() {
      return (
		<div><PhotoList data={this.state.photographs} page={this.state.per_page}/></div>
      );
    }
}
