import React, { useEffect, useState } from "react";
//import React from 'react';
import '../../App.css';
import '../../App.js';
import './AdminLogin.css';
import Adminlogin from "./AdminLogin";
// import { useHistory } from 'react-router-dom';
import fire from '../../fire';
class Answer extends React.Component{

    constructor(props) {
      // let history = useHistory();
        super(props);
        this.state = {
            answer: '',
            items: [],
            question: '',
            id: '',
            idans: '',
            qno:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        }

        handleSubmit(e) {
            e.preventDefault();
            const itemsRef = fire.database().ref('ans');
            if(this.state.qno){
            const temp = {
                idans: this.state.items[this.state.qno-1].id,
                answer: this.state.answer
              };
              if(temp.answer){itemsRef.push(temp);}
          }
            // console.log(this.state.items[this.state.qno].id)
            
            this.setState({
              answer: '',
              idans: '',
              qno:''
            });
          }
          handleChange(e) {
            this.setState({
              [e.target.name]: e.target.value
            });
          }

        componentDidMount(){
            const itemsRef = fire.database().ref('faq');
            itemsRef.on('value', (snapshot) => {
              let items = snapshot.val();
              let newState = [];
              for (let item in items) {
                newState.push({
                  id: item,
                  question: items[item].question,
                });
              }
              this.setState({
                items: newState
              });
            });
          };


    render(){
      if(localStorage.getItem("adminstat")===null){
        this.props.history.push('/AdminLogin')
        // history.replaceState('/AdminLogin')
      }
        return (
            <div className="FAQ_1">
              <div className="faq-container">
                {this.state.items.map((data,id) => {
                    return(
                        <h3>
                            Q{id+1}.{data.question}
                        </h3>
                    );

                })}
                </div>
                <form onSubmit={this.handleSubmit}>
              <div className="form-inner">
             <div className="form-group">
                 <label htmlFor="username">Answer Question</label>
                 <input type="text" name="qno" placeholder="question id" onChange={this.handleChange} value={this.state.qno} />
                 <input type="text" name="answer" placeholder="answer" onChange={this.handleChange} value={this.state.answer} />
             </div>
             <input type="submit" value="SUBMIT" />
             
           </div>
              </form>
                
            </div>
        );
    }
}

export default Answer;

