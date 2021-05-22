
// import React from 'react';
// import '../../App.js';

// export default function ViewPastData() {
//   return <h1 className='viewPastData'>View Past Data</h1>;
// }
import React from 'react';
// import React from 'react';

import '../../App.js';
import '../../App.css'
//Calling Bootstrap 4.5 css
import 'bootstrap/dist/css/bootstrap.min.css';

//Calling Firebase config setting to call the data
// import firebase from './Firebase';
import fire from '../../fire';


class ViewPastData extends React.Component {

constructor(props) {
    
    super(props);
   
    this.state = {studentslist : []}
    }
    
  componentDidMount() {
   
   
     
      fire.database().ref("Aqi").on("value", snapshot => {
        let studentlist = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            studentlist.push(snap.val());
        });
        this.setState({ studentslist: studentlist });
      });
    
    
 }
  
  render(){
  return (
    <div className="view-data">
    <div className="MainDiv">
      <div class="jumb'otron text-center bg-sky" >
          <h1 > <u> Past Data </u> </h1>
          <br/>
      </div>
    
      <div className="container" style={{mergin:'5px',background: "white",padding:"4px",borderRadius:"10px",boxShadow:" inset 0 3em 3em rgba(0,0,0,0.1),0 0 0 3px rgb(255,255,255),2em 2em 2em rgba(0,0,0,0.3)"}}>
          <table id="example" class="display table">
            <thead class="thead-dark">
                <tr>
                    <th>AQI</th>
                    <th>CO</th>
                    <th>NO2</th>
                    <th>O3</th>
                    <th>PM10</th>
                    <th>PM25</th>
                    <th>SO2</th>
                    {/* <th>Main pollutant</th> */}
                    {/* <th>Main pollutant conc.</th> */}
                    <th>category</th>
                    <th>Division</th>
                    {/* <th>division</th> */}
                    {/* <th>placeName</th> */}
                    <th>updatedAt</th>
                </tr>
            </thead>
            <tbody>
            {this.state.studentslist.map(data => {
                
                return (
                    <tr>     
                    <td>{data.AQI}</td>
                    <td>{data.CO}</td>
                    <td>{data.NO2}</td>
                    <td>{data.OZONE}</td>
                    <td>{data.PM10}</td>
                    <td>{data.PM25}</td>
                    <td>{data.SO2}</td>
                    {/* <td>{data.aqiInfo.pollutant}</td> */}
                    {/* <td>{data.aqiInfo.concentration}</td> */}
                    <td>{data.aqiInfo.category}</td>
                    <td>{data.division}</td>
                    {/* <td>{data.division}</td> */}
                    {/* <td>{data.placeName}</td> */}
                    <td>{data.updatedAt}</td>
                    </tr>
                    
                );
               
                })}
        
               
            </tbody>
            
         </table>
          
     </div>
    </div>
    </div>
  );
}
}
export default ViewPastData;