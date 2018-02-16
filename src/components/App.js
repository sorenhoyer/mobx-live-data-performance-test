import React, { Component } from 'react';
import Chart from './Chart';
import './App.css';


class App extends Component {
  render() {
    const { store } = this.props;
    const sensors = store.sensors;

    const plotOptions = {
      series: {
        turboThreshold: 10000,
        marker: {
          enabled: false
        }
      }
    };

    return (
      <div>
        <p>count: {sensors.get('sensor1') && sensors.get('sensor1').queue.data.length}</p>
        {
          sensors && sensors.keys() && sensors.keys().filter(key=>key ==='sensor1').map(key =>
            <div key={key}>
              <p>min: {sensors.get('sensor1').minHeap.data[0]} | max: {sensors.get('sensor1').maxHeap.data[0]}</p>
              <Chart
                key={key}
                chartKey={key}
                title={key}
                subtitle=''
                xAxisTitle='Time'
                yAxisTitle='Level'
                data={sensors.get('sensor1').queue.data.slice()}
                overlayCharts={[]}
                plotOptions={plotOptions}
              />
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
