import React, { Component } from 'react';
// components
import * as AnalyticsService from './services/AnalyticsService';

// images
import _ from 'lodash';
// ReactGA.initialize('#############'); // ADD GA-PAGE
// ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    //AnalyticsService.postEvent();
    return (
      <div>
        <img src={require('./utils/images/offerzen.png')} />
        <h2>HELLO WORLD SWAG</h2>
      </div>
    );
  }
}

export default App;