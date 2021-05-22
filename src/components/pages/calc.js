// import React, {Component} from 'react';
// import './calc.css'
// import Calform from'./calform'
// import axios from 'axios';
// import fire from '../../fire';
// import Display from './Display'
// class calc extends Component{
//         state = {
//             method: 'GET',
//             url: 'https://api.ambeedata.com/latest/by-city',
//             params: {city:localStorage.getItem("city")},
//             headers: {'x-api-key': 'Qkg4IOmxuR1MBgqqniw7p105hHjyMUG15MUBv3FC', 'Content-type': 'application/json'},
//             details:[],
//             colour:''
//           };
//           componentDidMount(){
//             let aqi=[];
//             axios.request(this.state).then( (response)=> {
//                 aqi.push( response.data.stations[0]);
//                 this.setState({details:aqi});
//                 this.setState({colour:this.getColour(response.data.stations[0].AQI)});
//              }).catch(function (error) {
//                  console.error(error);
//              }); 
//             console.log('state city',this.state.params.city);
//             this.getColour();
//             };
//     getCity=(e)=>{
//         e.preventDefault();
//         const city =e.target.elements.city.value;
//         localStorage.setItem("city",city);
//         this.state.params.city=e.target.elements.city.value;
//         let aqi=[];
//         axios.request(this.state).then( (response)=> {
//             aqi.push( response.data.stations[0]);
//             this.setState({details:aqi});
//             fire.database().ref('Aqi').push(aqi[0]);
//             this.setState({colour:this.getColour(response.data.stations[0].AQI)});
//          }).catch(function (error) {
//              console.error(error);
//          }); 
//         console.log('state city',this.state.params.city);
//         this.getColour();

//     }
//     getColour(aqi){
//         let colour='';
//         console.log('aqi ',aqi);
//         if (aqi>= 0 && aqi <= 50) {
//                 return(colour= "#009966")
//         }else if(aqi>50 && aqi <100) {
//                 return(colour= "#FFDE33")
//         } else if (aqi > 100 && aqi <= 150) {
//             return(colour= "#FF9933")
//         }else if (aqi > 150 && aqi <= 200) {
//             return(colour= "#CC0033")
//         } else if (aqi > 200 && aqi <= 300) {
//             return(colour= "#660099")
//         } else if (aqi > 300) {
//             return(colour= "#7E0023")
//         }
//         return colour
//     }
//     render(){
//         let Style = {background:''};
//         if(this.state.colour){
//             Style.background=this.state.colour;
//         }
//         return(
//             <div className="calc">
//                 <Calform getCity={this.getCity}/>
//                 {console.log('state aqi',this.state.details)}
//                 {console.log('state color',this.state.colour)}
//                 {this.state.colour ? 
//                     <Display/>
//                     // <div className='box'>
//                     //     <div className="box1" style={Style}>
//                     //     <h1>{this.state.details[0].division}</h1> <h2 >AQI-{this.state.details[0].AQI}</h2>
//                     //     </div>
                        
//                     //     <div className="box2">
//                     //         <div className="box3"><h3>CO-</h3><h3>{this.state.details[0].CO}</h3></div>
//                     //         <div className="box3"><h3>CNO2-</h3><h3>{this.state.details[0].NO2}</h3></div>
//                     //         <div className="box3"><h3>OZONE-</h3><h3>{this.state.details[0].OZONE}</h3></div>
//                     //         <div className="box3"><h3>PM10-</h3><h3>{this.state.details[0].PM10}</h3></div>
//                     //         <div className="box3"><h3>PM25-</h3><h3>{this.state.details[0].PM25}</h3></div>
//                     //         <div className="box3"><h3>SO2-</h3><h3>{this.state.details[0].SO2}</h3></div>
//                     //     </div>
//                     // </div>
//                 :<></>}
//             </div>
//         );
//     }
// }
// export default calc;
import React, {Component} from 'react';
import './calc.css'
import Calform from'./calform'
import axios from 'axios';
import fire from '../../fire'
import Display from './Display'

class calc extends Component{
        state = {
            method: 'GET',
            url: 'https://api.ambeedata.com/latest/by-city',
            params: {city:localStorage.getItem("city")},
            headers: {'x-api-key': 'A905KHPmzS6yKRYrBKDGV2R4tf8yaMtB4EJW9BwY', 'Content-type': 'application/json'},
            details:[],
            colour:'',
            mails: [],
          };
            componentDidMount(){
            let aqi=[];
            axios.request(this.state).then( (response)=> {
                aqi.push( response.data.stations[0]);
                this.setState({details:aqi});
                this.setState({colour:this.getColour(response.data.stations[0].AQI)});
             }).catch(function (error) {
                 console.error(error);
             }); 
            console.log('state city',this.state.params.city);
            this.getColour();
            fire.database().ref("email").on("value", snapshot => {
                let mails = [];
                snapshot.forEach(snap => {
                    mails.push(snap.val());
                });
                this.setState({ mails: mails });
              });
            };
    getCity=(e)=>{
        
        e.preventDefault();
                const city =e.target.elements.city.value;
                localStorage.setItem("city",city);
                this.state.params.city=e.target.elements.city.value;
                let aqi=[];
                axios.request(this.state).then( (response)=> {
                    aqi.push( response.data.stations[0]);
                    this.setState({details:aqi});
                    fire.database().ref('Aqi').push(aqi[0]);
                    this.setState({colour:this.getColour(response.data.stations[0].AQI)});
                 }).catch(function (error) {
                     console.error(error);
                 }); 
                console.log('state city',this.state.params.city);
                this.getColour();

    }
    getColour(aqi){
        let colour='';
        console.log('aqi ',aqi);
        if(aqi>150 ) {
            console.log("sendgrid called")
            const sgMail = require('@sendgrid/mail')
            const API_key = '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'
            sgMail.setApiKey(API_key)

            const message = {
                to: this.state.mails,
                from:'aeroprobeiiita@gmail.com',
                subject: 'Aeroprobe Alert',
                text: "AQI of "+ localStorage.getItem("city") + " is "+ this.state.details[0].AQI +". It is a "+ this.state.details[0].aqiInfo.category+" condition. Please take proper precautions.",
                };
                sgMail.send(message)
                .then(respose => {console.log('sent');
                alert("AQI above 150, Email sent to all the users")
                })
                .catch(error => console.log('error'))
        }
        if (aqi>= 0 && aqi <= 50) {
                return(colour= "#009966")
        }else if(aqi>50 && aqi <100){
                return(colour= "#FFDE33")
        } else if (aqi > 100 && aqi <= 150) {
            alert("AQI above 100, Unhealthy for Sensitive Groups")
            return(colour= "#FF9933")
        }else if (aqi > 150 && aqi <= 200) {
            return(colour= "#CC0033")
        } else if (aqi > 200 && aqi <= 300) {
            return(colour= "#660099")
        } else if (aqi > 300) {
            return(colour= "#7E0023")
        }
        return colour
    }
    render(){
        let Style = {background:''};
        if(this.state.colour){
            Style.background=this.state.colour;
        }
        return(
            <div className="calc">
                <Calform getCity={this.getCity}/>
                {console.log('state aqi',this.state.details)}
                {console.log('state color',this.state.colour)}
                {/* {this.state.AQI} */}
                {this.state.colour ? <Display val={{colour: this.state.colour,props:this.state.details[0]}}/>
                :<></>}
            </div>
        );
    }
}
export default calc;