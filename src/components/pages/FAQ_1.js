import React from "react";
import '../../App.css';
import '../../App.js';
import FAQ_2 from './FAQ_2';
import fire from '../../fire';
class FAQ_1 extends React.Component{

    constructor(props) {
    
        super(props);
       
        this.state = {
            items: [],
            question: '',
            id: '',
            ans: []
        }
        

        
        }

        componentDidMount(){
            const itemsRef = fire.database().ref('faq');
            fire.database().ref("ans").on("value", snapshot => {
                let answerlist = [];
                snapshot.forEach(snap => {
                    // snap.val() is the dictionary with all your keys/values from the 'students-list' path
                    answerlist.push(snap.val());
                });
                this.setState({ ans: answerlist });
              });
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
        return (
            <div className="FAQ_1">
                <h1><u>FAQs</u></h1>
                <div className="faq-container">
                {this.state.items.map((data,index) => {
                    return(
                        <div  >
                           <h2>Q{index+1}). {data.question}</h2>
                           {this.state.ans.map(da => {
                           if(da.idans===data.id){
                               return(
                                   <h3>Ans: {da.answer}</h3>
                               );
                    
                            }
                            }
                           )}
                        </div>
                    );
                })}
                </div>
                <br/>
                <h3><u>Post Question</u></h3>
                <FAQ_2/>
            </div>
        );
    }
}

export default FAQ_1;

