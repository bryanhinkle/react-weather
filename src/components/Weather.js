import React, {Component} from 'react';

import {WeatherForm} from './WeatherForm';
import {WeatherMessage} from './WeatherMessage';

import { getTemp } from '../api/OpenWeatherMap';

export class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(location) {
    var that = this;

    this.setState({
      isLoading: true
    })

    getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      })
    }, function (errorMessage) {
      alert(errorMessage);
      console.log(errorMessage);
      that.setState({
        isLoading: false
      })
    });
  }

  render() {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if(isLoading) {
        return <h3>Fetching weather...</h3>
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    };

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    );
  }
}
