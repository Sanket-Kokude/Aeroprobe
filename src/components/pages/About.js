import React from 'react';
// import '../../App.css';
import './About.css'

export default function About() {
  return (
  <div className='About-container'>
    <h1>Welcome to aeroprobe</h1>
    <br></br>
    <p>The purpose of our project is to monitor the level of hazardous gases present in the environment. In an alarming situation the system must be able to generate alarm.</p>
    <img src="https://www.epa.gov/sites/production/files/2014-09/aqiguidepm.png" alt="Flowers in Chania" style={{alignSelf:"center",width:"80%",height:"auto"}}></img>
</div>
);
}
