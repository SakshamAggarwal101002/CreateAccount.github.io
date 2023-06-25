// import React ,{Component} from "react";
// import "./App.css";
// import Register from "./components/Register.js";
// import Greet from "./components/Greet.js";
  
//  class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state ={
//       isRegistered :false,
//       name : null,
//       email : null,
//       password : null,
//       showPass : false,
//     }
//   }
//   registrationHandler =(event) =>{
//  const name = event.target.name.value;
//  const email = event.target.email.value;
//  const password = event.target.password.value;
//  this.setState({name,email,password,isRegistered : true});
//  event.preventDefault();
//   };
//   showPasswordHandler =() =>{
//     console.log(this.state);
//     this.setState({showPass : !this.state.showPass}, () =>{
//       console.log(this.state);
//     });
//   };
//   render() {
//     return (
//       <div>
//         {this.state.isRegistered ? <Greet name ={this.state.name} email ={this.state.email} password ={this.state.email}></Greet> :
//         <Register
//          submit ={this.registrationHandler} 
//         showPass ={this.state.showPass}
//         click ={this.showPasswordHandler}
//         ></Register>}
//       </div>
//     )
//   }
// }

// export default App

/****************************************** */

  // import Container from'./comp/Container';
  
  //  function App() {
  //   return (
  //     <div>
  //     <Container/>
  //     </div>
  //   );
  // }
  // export default App;
  
  /************************** */

  import React, { Component } from "react";
import Register from "./project/Register";
import Login from "./project/Login";
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
const auth =firebase.auth();
class Container extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       page :1,
       message : "",
       type :1,
    }
  }
  pageSwitchHandler =(e)=>{
  this.setState({page :!this.state.page,message:null});
  e.preventDefault();
  };
  registrationHandler =(event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmpassword = event.target.confirmpassword.value;
    if(password !== confirmpassword){
       this.setState({message:"password does not match",type :0})
       return;
    }
   
    const authPromise =auth.createUserWithEmailAndPassword(email,password);
    authPromise.then((data) => {
      auth.currentUser.sendEmailVerification()
      this.setState({message:"user registered successfully",type:1},()=>{
        event.target.email.value="";
        event.target.password.value="";
        event.target.confirmpassword.value="";
      })
    }).catch((error)=>{
      this.setState({message:error.message,type:0},()=>{
        event.target.email.value="";
        event.target.password.value="";
        event.target.confirmpassword.value="";
      })
    });
  }
  loginHandler =(event)=>{
event.preventDefault();
const auth =firebase.auth();
const email = event.target.email.value;
const password = event.target.password.value;
auth.signInWithEmailAndPassword(email,password).then((data) => {
  if(data.user.emailVerified === true){
  this.setState({message:"login successful",type:1})}
  else{
    this.setState({message:"email not verified",type:0})
  }
  //()=>{
  //   event.target.email.value="";
  //   event.target.password.value="";
  //   event.target.confirmpassword.value="";
  // }
  
}).catch((error)=>{
  this.setState({message:error.message,type:0},//()=>{
  //   event.target.email.value="";
  //   event.target.password.value="";
  //   event.target.confirmpassword.value="";
  // }
  )
});
  }
googleLogin =(event) =>{
  event.preventDefault();
  var provider = new firebase.auth.GoogleAuthProvider();
  auth
  .signInWithPopup(provider)
  .then((response)=>{
    console.log(response);
  })
  .catch((error) =>{
    console.log(error);
  })

}
  render() {
    return (
    <div>{this.state.page?
      <Register switch ={this.pageSwitchHandler} register ={this.registrationHandler} message ={this.state.message} type ={this.state.type}
      google ={this.googleLogin}/>:
      <Login switch ={this.pageSwitchHandler} login ={this.loginHandler} message ={this.state.message} type ={this.state.type} />}
    </div>
    );
  }
}

export default Container;

 

