import React from 'react'
import Styled from "styled-components"
export default function Register(props) {
  // const btnstyle={
  //    backgroundColor :"green",
  //    color : "white",

  // };
  let btnclasses =["btn","m-1"]
  let btntext,passboxtype;
  if(props.showPass === true){
  //  btnstyle.backgroundColor ="red";
    btntext = "Hide password";
    passboxtype = "text";
    btnclasses.push("btn-danger");
  }
  else{
    btntext ="show password";
    passboxtype = "password";
    btnclasses.push("btn-success");
  }
  console.log(btnclasses);
  const StyledButton = Styled.button`
  display : ${(props) => (props.flag ===1 ? "inline-block" : "block")};
  padding : 10px 5px;
  background-color:${(props) => props.color};
  color:white;
  width:${(props) => (props.flag ===1 ? "45%" : "100%")};
  border:none;
  margin:5px;
  `;
  const StyledRegisterClass = Styled.div`
  width: 690px;
  &:hover{
    box-shadow: 0px 0px 5px grey;
  }
  @media (min-width:0px) ans (max-width:600px){
    width:300px;
  }
  `
  ;
  return (
    
    <StyledRegisterClass className='container card p-3 mt-2 '>
      <form onSubmit ={props.submit}>
        <h1 className ="text-center">REGISTRATION FORM</h1>
        <div className='form-group'>
            <label htmlFor ="name">Name</label>
            <input type ="text" name ="name" className='form-control' required></input>
        </div>
        <div className='form-group'>
            <label htmlFor ="email">Email</label>
            <input type ="email" name ="email" className='form-control' required></input>
        </div>
        <div className='form-group'>
            <label htmlFor ="password">Password</label>
            <input type ={passboxtype} name ="password" className='form-control' required></input>
        </div>
        <button type ="submit" className ="btn-btn-primary m-1">Register</button>
        <button type ="button" className = {btnclasses.join(" ")} onClick={props.click}>{btntext}</button>
        <br/>
        <StyledButton color ="orange" flag ="2" type ="button">login</StyledButton>
        <StyledButton color ="green" flag ="3" type ="button">t an c</StyledButton>
        <StyledButton color ="blue" flag ="" type ="button">facebook</StyledButton>

      </form>
    </StyledRegisterClass>
  )
}
