import React, { Component } from 'react';
import '../App.css';
import './HeroSection.css';
import fire from '../fire';

class HeroSection extends Component{
  constructor() {
    super()
    this.state = {
      AQI_value: 0,
      listitems: [
        {AQI: 68,pm2: 165,pm10: 141,o3: 10,no2: 24,so2: 10,co: 10,},
        {AQI: 119,pm2: 68,pm10: 119,o3: 11,no2: 27,so2: 9,co: 6,},
        {AQI: 102,pm2: 102,pm10: 79,o3: 31,no2: 18,so2: 12,co: 7,},
        {AQI:70,pm2:70,pm10:47,o3:11,no2:7,so2:3,co:0,},
        {AQI:167,pm2:167,pm10:50,o3:8,no2:8,so2:1,co:0,},
        {AQI:99,pm2:99,pm10:85,o3:37,no2:10,so2:8,co:6,},
        {AQI:210,pm2:210,pm10:170,o3:24,no2:41,so2:18,co:14,},
        {AQI:203,pm2:203,pm10:173,o3:15,no2:58,so2:39,co:15,},
        {AQI:225,pm2:225,pm10:138,o3:18,no2:160,so2:1,co:51,},
        {AQI:145,pm2:145,pm10:115,o3:30,no2:122,so2:2,co:104,},
        {AQI:83,pm2:78,pm10:83,o3:20,no2:58,so2:1,co:51,},
        {AQI:145,pm2:145,pm10:115,o3:30,no2:122,so2:1,co:104,},
        {AQI:151,pm2:151,pm10:62,o3:28,no2:19,so2:7,co:10,},
    ]
    }
  }

  calc() {
    this.setState((prevState) => ({
      AQI_value: Math.floor(Math.random()*13)
    }));
    // let AqiRef = fire.database().ref('Aqi').orderByKey().limitToLast(5);
    // fire.database().ref('Aqi').push(this.state.AQI_value);
  }

  aqi_submit(){
    this.calc();
    
    // let AqiRef = fire.database().ref('Aqi').orderByKey().limitToLast(5);
    fire.database().ref('Aqi').push(this.state.listitems[this.state.AQI_value]);

  }



  render(){
    // const [count, setCount] = useState(0);
  return (
    <div className='hero-container'>
      {/* <video src='/videos/home.mp4' autoPlay loop muted /> */}
      {/* <h1>AQI</h1> */}
      
        {/* <h className="list-group"> */}
        {/* <h>{this.state.listitems.map(listitem => (
            <li key={listitem.id} >AQI- 
              {listitem.AQI} pm2-{listitem.pm2}
            </li>
          ))}</h> */}
        <div className="container-1">
          <div className="box">
            <h3>AQI</h3>
            <p>{this.state.listitems[this.state.AQI_value].AQI}</p>
          </div>
          <div className="box">
            <h3>PM2</h3>
            <p>{this.state.listitems[this.state.AQI_value].pm2}</p>
          </div>
          <div className="box">
            <h3>PM10</h3>
            <p>{this.state.listitems[this.state.AQI_value].pm10}</p>
          </div>
          <div className="box">
            <h3>O3</h3>
            <p>{this.state.listitems[this.state.AQI_value].o3}</p>
          </div>
          <div className="box">
            <h3>NO2</h3>
            <p>{this.state.listitems[this.state.AQI_value].no2}</p>
          </div>
          <div className="box">
            <h3>SO2</h3>
            <p>{this.state.listitems[this.state.AQI_value].so2}</p>
          </div>
          <div className="box">
            <h3>CO</h3>
            <p>{this.state.listitems[this.state.AQI_value].co}</p>
          </div>
          {console.log(this.state.AQI_value)}
        </div>
            {/* <p>AQI - {this.state.listitems[this.state.AQI_value].AQI}</p>
            <p>pm2 - {this.state.listitems[this.state.AQI_value].pm2},pm10- {this.state.listitems[this.state.AQI_value].pm10},O3- {this.state.listitems[this.state.AQI_value].o3},NO2- {this.state.listitems[this.state.AQI_value].no2},SO2- {this.state.listitems[this.state.AQI_value].so2},CO- {this.state.listitems[this.state.AQI_value].co}</p> */}
      
      <button className="Button" onClick={() => this.aqi_submit()}>Calculate AQI</button >
      </div>
  );
  }
}

export default HeroSection;
