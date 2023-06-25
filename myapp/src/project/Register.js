import React from 'react'
import "./Register.css";
export default function Register(props) {
    let msgclass =["text-center"];
    if(props.type){
        msgclass.push("text-success");
    }
    else{
        msgclass.push("text-danger");
    }
  return (
    <div class ="container">
        <div class = "card bg-light">
            <article class ="card-body mx-auto" style ={{width :"500px"}}>
                <h4 class ="card-title mt-3 text-center">Create account</h4>
                <p class ="text-center">Get started with your free account</p>
                <p class ={msgclass.join(" ")}>{props.message}</p>
                <p>
                    <a href ="" onClick ={props.google} class =" btn btn-black btn-twitter">
                        <i class ="fab fa-twitter">Signup via Google</i>
                    </a>
                    <a href ="" class =" btn btn-black btn-facebook">
                        <i class ="fab fa-twitter">Signup via facebook</i>
                    </a>
                </p>
                <p class ="divider-text">
                    <span class ="bg-light">OR</span>
                </p>
                <form onSubmit={props.register} >
                     <div class ="form-group input-group">
                    <div class ="input-group-prepend">
                        <span class ="input-group-text">
                            <i class ="fa fa-envelope"></i>
                        </span>
                    </div>
                    <input
                    name ="email"
                    class ="form-control"
                    placeholder ="Email address"
                    typr ="email"
                    ></input>
                    </div>
                    <div class ="form-group input-group">
                    <div class ="input-group-prepend">
                        <span class ="input-group-text">
                            <i class ="fa fa-lock"></i>
                        </span>
                    </div>
                    <input
                    name ="password"
                    class ="form-control"
                    placeholder =" Create Password"
                    type ="password"
                    ></input>
                    </div>
                    <div class ="form-group input-group">
                    <div class ="input-group-prepend">
                        <span class ="input-group-text">
                            <i class ="fa fa-lock"></i>
                        </span>
                    </div>
                    <input
                    name ="confirmpassword"
                    class ="form-control"
                    placeholder =" Repeat Password"
                    type ="password"
                    ></input>
                    </div>
                    <div class ="form-group">
                        <button type ="submit" class ="btn btn-primary btn-black">Create account</button>
                    </div>
                    <p class ="text-center">
                        Have an account <a href ="#" onClick ={props.switch}>Log In</a>
                    </p>
                </form>
            </article>
        </div>
      
    </div>
  )
}
