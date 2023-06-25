import React from 'react'

export default function Question(props) {
  return (
    <div class ="container-fluid">
    <div class ="col-md-5 m-auto">
      <div class ="mt-3">
        <div class ="card text-left">
          <div class = "card-body">
            <form onSubmit ={props.submit} >
              <div class ="form-group">
                <label HtmlFor ="">
                  {" "}
                  <b>3.</b> What are you currently doing ?
                </label>
                <br/>
                <input type ="radio"
                id ="teacher"
                name ="q1"
                value ="teaching"
                ></input>
              <label HtmlFor ="teacher">teaching</label>
              <input 
              type ="radio"
              id ="student"
              name ="q1"
              value ="student"
              ></input>
                 <label HtmlFor ="student">student</label>
              <input 
              type ="radio"
              id ="programmer"
              name ="q1"
              value ="programmer"
              ></input>
               <label HtmlFor ="programmer">programmer</label>
               <input 
              type ="radio"
              id ="other"
              name ="q1"
              value ="other"
              ></input>
               <label HtmlFor ="other">other</label>
               <br/>
               <input 
              type ="text"
              id ="form-control"
              name ="other"
              placeholder="Type here if not listed."
              ></input>
              </div>
               <div class ="form-group">
                <label HtmlFor ="">
                  {" "}
                  <b>4.</b> PLease rate yor course.
                </label>
                <br />
                <input 
              type ="radio"
              id ="poor"
              name ="q2"
              value ="poor"
              ></input>
               <label HtmlFor ="poor">poor</label>
               <input 
              type ="radio"
              id ="good"
              name ="q2"
              value ="good"
              ></input>
               <label HtmlFor ="good">good</label> <input 
              type ="radio"
              id ="excellent"
              name ="q2"
              value ="excellent"
              ></input>
               <label HtmlFor ="excellent">excellent</label>
                </div>
                <div class ="form-group">
                <label HtmlFor ="">
                  {" "}
                  <b>5.</b> Write your review here
                  <textarea clas  ="form-control" name ="q3"></textarea>
                </label>
                </div>
                <button type ="submit" class ="btn btn-primary">Save</button>
            </form>
            <center>
              <span class ="badge badge-pill badge-primary">1</span>
              <span class ="badge badge-pill disabled">2</span>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
