
import React, {Component} from 'react';
import './calc.css'
import Calform from'./calform'
import axios from 'axios';
import fire from '../../fire'
import Display from './Display'
import emailjs from 'emailjs-com'

class calc extends Component{
        state = {
            method: 'GET',
            url: 'https://api.ambeedata.com/latest/by-city',
            params: {city:localStorage.getItem("city")},
            headers: {'x-api-key': 'Qkg4IOmxuR1MBgqqniw7p105hHjyMUG15MUBv3FC', 'Content-type': 'application/json'},
            details:[],
            colour:'',
            mails:[],
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
        console.log(this.state.mails,"emails")
        let colour='';
        console.log('aqi ',aqi);
        if(aqi>150 ) {
              this.state.mails.forEach((value)=>{
                let templateParams = {
                    to: value.email,
                    subject: 'Aeroprobe Alert',
                    html: `
                    <h2>Hello ${value.username},</h2>
                    <p>AQI of ${localStorage.getItem("city")} is ${this.state.details[0].AQI}. It is a ${this.state.details[0].aqiInfo.category} condition. Please take proper precautions.</p>`
                  }
                emailjs.send('service_r7y94wh', 'template_ef0m6mj', templateParams,'user_FpUWuFoihlnVVesbSGBYE')
                .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                console.log('FAILED...', error);
                });
              })
              
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