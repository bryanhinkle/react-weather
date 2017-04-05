import React, {Component} from 'react';
import {Nav} from './Nav';

export var Main = (props) => {
  return (
    <div>
      <h2>Main Component</h2>
      <Nav/>
      {props.children}
    </div>
  );
}
