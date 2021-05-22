import React, { useEffect, useState } from "react";
//import React from 'react';
import '../../App.css';
import '../../App.js';
import FAQ_2 from './FAQ_2';
// import Faq from "react-faq-component";
import fire from '../../fire';

// const data = {
//     title: "FAQ",
//     rows: [
//         {
//             title: "What is Aeroprobe?",
//             content: `Aeroprobe is an Air Quality Monitering System which alerts the users if the Air has harmful gases in higher concentrations.`,
//         },
//         {
//             title: "What are the harmful effects of higher concentration of Carbon Monooxide?",
//             content:"Carbon monoxide (CO) is a poisonous, colorless, odorless and tasteless gas. Although it has no detectable odor, CO is often mixed with other gases that do have an odor. So, you can inhale carbon monoxide right along with gases that you can smell and not even know that CO is present.",
//         },
//         {
//             title: "What are the harmful effects of pm10?",
//             content: `Exposure to high concentrations of PM10 can result in a number of health impacts ranging from coughing and wheezing to asthma attacks and bronchitis to high blood pressure, heart attack, strokes and premature death.`,
//         },
//     ],
// };

// const styles = {
//     // bgColor: 'white',
//     titleTextColor: "blue",
//     rowTitleColor: "blue",
//     // rowContentColor: 'grey',
//     // arrowColor: "red",
// };

// const config = {
//     animate: true,
//     arrowIcon: "V",
//     tabFocus: true
// };



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

    //   componentDidMount() {
       
       
         
    //       fire.database().ref("faq").on("value", snapshot => {
    //         let studentlist = [];
    //         let id=snapshot.val();
    //         snapshot.forEach(snap => {
    //             // snap.val() is the dictionary with all your keys/values from the 'students-list' path
    //             studentlist.push(snap.val());
    //         });
    //         this.setState({ studentslist: studentlist });
    //       });
        
        
    //  }


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
                // if(data.answer){
                //     return (
                //         <div>
                //             <h5>Q).{data.question}?</h5>
                //             <h6>Ans: {data.answer}</h6>
                //         </div>
                        
                //     );
                // }
                })}
                {/* <Faq
                    data={data}
                    styles={styles}
                    config={config}
                /> */}
                </div>
                <br/>
                <h3><u>Post Question</u></h3>
                <FAQ_2/>
            </div>
        );
    }
}

export default FAQ_1;

