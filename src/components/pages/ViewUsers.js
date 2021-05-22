
import React, { Component } from 'react';

import '../../App.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from '../../fire';


class ViewUsers extends React.Component {

constructor(props) {
    
    super(props);
   
    this.state = {studentslist : []}
    }
    
  componentDidMount() {
   
   
     
      fire.database().ref("email").on("value", snapshot => {
        let studentlist = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            studentlist.push(snap.val());
        });
        this.setState({ studentslist: studentlist });
      });
    
    
 }
  
  render(){
    if(localStorage.getItem("adminstat")===null){
      this.props.history.push('/AdminLogin')
    }
    return (
    <div className="view-user">
    <div className="MainDiv">
      <div class="jumb'otron text-center bg-sky">
          <br/>
          <h3> <u> View Users </u> </h3>
          <br/>
      </div>
    
      <div className="container" style={{mergin:'5px',background: "white",padding:"4px",borderRadius:"10px",boxShadow:" inset 0 3em 3em rgba(0,0,0,0.1),0 0 0 3px rgb(255,255,255),2em 2em 2em rgba(0,0,0,0.3)"}}>
          <table id="example" class="display table" >
            <thead class="thead-dark">
                <tr>
                    <th>Email</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
            {this.state.studentslist.map(data => {
                
                return (
                    <tr>     
                    <td>{data.email}</td>
                    <td>{data.username}</td>
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
export default ViewUsers;