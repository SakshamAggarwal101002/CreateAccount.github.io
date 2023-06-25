import React from 'react'

export default function Details(props) {
  return (
  <div class ="container-fluid">
    <div class ="col-md-5 m-auto">
      <div class ="mt-3">
        <div class ="card text-left">
          <div class = "card-body">
            <form  onSubmit ={props.submit}>
              <div class ="form-group">
                <label HtmlFor ="">
                  {" "}
                  <b>1.</b> Name
                </label>
                <input type ="text"
                name ="name"
                class ="form-control"
                placeholder ="Please enter your name "
                required
                ></input>
              </div>
              <div class ="form-group">
                <label HtmlFor ="">
                  {" "}
                  <b>2.</b> Email
                </label>
                <input type ="email"
                name ="email"
                class ="form-control"
                placeholder ="Please enter your email"
                required
                ></input>
              </div>
              <button type ="submit" class ="btn btn-primary">Next</button>
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
  );
}
