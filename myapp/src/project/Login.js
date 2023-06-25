import React from "react";
import "./Register.css";

export default function Login(props) {
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
                <h4 class ="card-title mt-3 text-center">Login</h4>
                <p class ={msgclass.join(" ")}>{props.message}</p>
                <p>
                    <a href ="" class =" btn btn-black btn-twitter">
                        <i class ="fab fa-twitter">Login via twitter</i>
                    </a>
                    <a href ="" class =" btn btn-black btn-facebook">
                        <i class ="fab fa-twitter">Login via facebook</i>
                    </a>
                </p>
                <p class ="divider-text">
                    <span class ="bg-light">OR</span>
                </p>
                <form onSubmit ={props.login}>
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
                    placeholder ="Password"
                    type ="password"
                    ></input>
                    </div>
                    <div class ="form-group">
                        <button type ="submit" class ="btn btn-primary btn-black">Login</button>
                    </div>
                    <p class ="text-center">
                        <a href ="" onClick ={props.switch}>Create</a> an account
                    </p>
                </form>
            </article>
        </div>
      
    </div>
  )
}
