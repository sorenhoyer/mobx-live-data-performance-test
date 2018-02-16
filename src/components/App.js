import React, { Component } from 'react';
import {observer} from "mobx-react";

import './App.css';
import ChartContainer from './ChartContainer';

@observer
class App extends Component {
  render() {
    const plotOptions = {
      series: {
        turboThreshold: 10000,
        marker: {
          enabled: false
        }
      }
    };
    return <ChartContainer 
        sensors={this.props.store.sensors}
        plotOptions={plotOptions}
      />
  }
}

export default App;
