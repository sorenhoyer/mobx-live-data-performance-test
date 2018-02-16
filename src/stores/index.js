import {observable} from 'mobx';
import Sensor from '../models/Sensor';

export default class RootStore {
  @observable sensors = new Map();

  constructor(){
    let self = this;
    const sensorIds = ['sensor1', 'sensor2', 'sensor3','sensor4', 'sensor5', 'sensor6','sensor7', 'sensor8', 'sensor9', 'sensor10'];
    
    for(let sensor of sensorIds) {
      self.sensors.set(sensor, new Sensor(2000));
    }

    setInterval(function(){ 
      let out = {};
      const x = + new Date()  // unix timestamp
      for(let sensor of sensorIds){
        const y = Math.floor(Math.random() * 10000) + 1  
        const m = {x: x, y: y}
        out[sensor] = m;
      }
      
      self.addMeasurement(out)
    }, 100);
  }

  addMeasurement(sensorMeasurementMap) {
    let self = this;
    const keys = self.sensors.keys();
    
    if (keys.length === 0) { // never really gonna happen, since we already set them by default in the INIT action above
      // for (const key in sensorMeasurementMap) {
      //   const d = Datapoint.create();
      //   d.add(Measurement.create(sensorMeasurementMap[key])); // measurement
      //   self.updateDatapoints(key, d);
      // }
    } else {
      for (const key in sensorMeasurementMap) {
        
        if(self.sensors.keys().indexOf(key) > -1){
          self.sensors.get(key).add(sensorMeasurementMap[key]);
        } else {
          // const d = Datapoint.create();
          // d.add(Measurement.create(sensorMeasurementMap[key])); // measurement
          // self.updateDatapoints(key, d);
        }
      }
    }
    console.log(self.sensors.values())
  }
}