import React, { Component } from 'react';
import './AdminLogin.css';
import firebase from '../../fire';

class FAQ_2 extends Component {

    constructor() {
        super();
        this.state = {
          question: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
      }
      handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase.database().ref('faq');
        if(this.state.question){
          const item = {
            question: this.state.question
          };
          itemsRef.push(item);
        }
        this.setState({
          question: ''
        });
      }
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

  render() {
    return (
      <div>
              <form onSubmit={this.handleSubmit}>
              <div className="form-inner">
             <div className="form-group">
                 <label htmlFor="username">Question</label>
                 <input type="text" name="question" placeholder="What's your question?" onChange={this.handleChange} value={this.state.question} />
                 {/* <input type="text" name="answer" id="answer" onChange={e=>setDetails({...details, username: e.target.value})} value={details.username} /> */}
             </div>
             <input type="submit" value="SUBMIT" />
             
           </div>
              </form>
        </div>
    );
  }
}
export default FAQ_2;