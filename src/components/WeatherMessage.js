import React, {Component} from 'react';

export const WeatherMessage = ({temp, location}) => {
  return(
    <div>
      <p>The Weather is {temp} F&deg; in {location}!</p>
    </div>
  );
}
