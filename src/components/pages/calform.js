import React from 'react';
import './AdminLogin.css';
import '../../App.css';
import '../HeroSection.css'
const calform=(props)=>{
    return(
            
            <form onSubmit={props.getCity}>
             <div style ={{textAlign:'center'}}className="form-inner" >
                <label className="formcitylabel" style={{fontSize:"40px"}} htmlFor="username">Location</label>
                <input className="cityinput" style={{marginLeft:"20px",width:"250px",height:"50px"}} type="text" name="city"  defaultValue={localStorage.getItem("city")}/>
                <button  className="Button3">Search</button>            
          </div>
             </form>
    );
}
export default calform;