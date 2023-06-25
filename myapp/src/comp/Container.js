// import React, { Component } from "react";
// import Details from "./Details";
// import Question from "./Question";
// import { v4 as uuidv4 } from "uuid";
// import firebase from "firebase/compat/app";
//  import  "firebase/compat/database";
//  import "firebase/compat/auth";

//  const firebaseConfig = {
//   apiKey: "AIzaSyBQjRwmy67VKlJU8k0K8aPFLiZZumlLszU",
//   authDomain: "ws-survey-40870.firebaseapp.com",
//   databaseURL: "https://ws-survey-40870-default-rtdb.firebaseio.com",
//   projectId: "ws-survey-40870",
//   storageBucket: "ws-survey-40870.appspot.com",
//   messagingSenderId: "578422150537",
//   appId: "1:578422150537:web:290dde3c0b2de426627d58"
// };
// // if(firebase.apps.length<0){
//     firebase.initializeApp(firebaseConfig);
//  //}

// class Container extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          id : uuidv4(),
//          name :null,
//          email: null,
//          questions : { 
//           q1: null,
//           q2: null,
//           q3 : null,
//           other : null,
//          },
//          isSubmitted: false,
//       };
//     }
//     detailsSubmitHandler =(event) =>{
//     //  alert();
//       const x = event.target.name.value;
//       const y = event.target.email.value;
//       this.setState({name :x,email:y},()=>{
//         console.log(this.state);
//       });
//   event.preventDefault();
//     };
//     questionSubmitHandler =(event) =>{
//       const questions ={};
//        questions.q1 = event.target.q1.value;
//       questions.q2 = event.target.q2.value;
//       questions.q3 = event.target.q3.value;
//       questions.other = event.target.other.value;
//       const sub = true;
//       this.setState({questions : questions,isSubmitted : sub});
//       event.preventDefault();
//       const date = firebase.database();
//       date.ref("survey/"+ this.state.id).set({
//         name : this.state.name,
//         email: this.state.email,
//         questions: this.state.questions,
//       });
//     };
//   render() {
//     return (
//       <>
//        <div class ="container-fluid">
//           <div class ="container card mt-2">
//             <h1 class = "text-center text-primary"> WSCube tech</h1>
//           </div>

//        </div>
//       {this.state.isSubmitted ? (
//       <div class ="card">
//         <h1>thank you</h1>
//       </div>
//       ):
//       this.state.name===null && this.state.email===null ? (<Details
//       submit ={this.detailsSubmitHandler}
//       />):(<Question submit ={this.questionSubmitHandler} />)}
//       </>
//     );
//   }
// }

// export default Container;


/************************************ */
import React, { Component } from "react";
import Details from "./Details";
import Question from "./Question";

import firebase from "firebase/compat/app";
 import  "firebase/compat/database";
 import "firebase/compat/auth";

 const firebaseConfig = {
  apiKey: "AIzaSyBQjRwmy67VKlJU8k0K8aPFLiZZumlLszU",
  authDomain: "ws-survey-40870.firebaseapp.com",
  databaseURL: "https://ws-survey-40870-default-rtdb.firebaseio.com",
  projectId: "ws-survey-40870",
  storageBucket: "ws-survey-40870.appspot.com",
  messagingSenderId: "578422150537",
  appId: "1:578422150537:web:290dde3c0b2de426627d58"
};
// if(firebase.apps.length<0){
    firebase.initializeApp(firebaseConfig);
 //}

class Container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id : uuidv4(),
         name :null,
         email: null,
         questions : { 
          q1: null,
          q2: null,
          q3 : null,
          other : null,
         },
         isSubmitted: false,
      };
    }
    detailsSubmitHandler =(event) =>{
    //  alert();
      const x = event.target.name.value;
      const y = event.target.email.value;
      this.setState({name :x,email:y},()=>{
        console.log(this.state);
      });
  event.preventDefault();
    };
    questionSubmitHandler =(event) =>{
      const questions ={};
       questions.q1 = event.target.q1.value;
      questions.q2 = event.target.q2.value;
      questions.q3 = event.target.q3.value;
      questions.other = event.target.other.value;
      const sub = true;
      this.setState({questions : questions,isSubmitted : sub});
      event.preventDefault();
      const date = firebase.database();
      date.ref("survey/"+ this.state.id).set({
        name : this.state.name,
        email: this.state.email,
        questions: this.state.questions,
      });
    };
  render() {
    return (
      <>
       <div class ="container-fluid">
          <div class ="container card mt-2">
            <h1 class = "text-center text-primary"> WSCube tech</h1>
          </div>

       </div>
      {this.state.isSubmitted ? (
      <div class ="card">
        <h1>thank you</h1>
      </div>
      ):
      this.state.name===null && this.state.email===null ? (<Details
      submit ={this.detailsSubmitHandler}
      />):(<Question submit ={this.questionSubmitHandler} />)}
      </>
    );
  }
}

export default Container;
