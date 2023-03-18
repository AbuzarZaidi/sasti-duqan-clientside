import React,{useState} from 'react'
import {  useNavigate } from "react-router-dom";
import {signUp} from '../../functions/user/users'
const Signup = () => {
  let navigate = useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const signupHandler=async()=>{
    if (name && email && password) {
      const user = {
        name,
        email,
        password,
        confirmPassword
      };
      const data = await signUp(user);

      if (data.response) {
        if (data.response.status === 422) {
          setShowError(true);
          setErrorMessage(data.response.data.error);
          setTimeout(() => {
            setShowError(false);
          }, 2000);
        }
      } else {
        navigate("../signin", { replace: true });
      }
    } else {
      setShowError(true);
      setErrorMessage("Please Fill The Form.");
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  }
  const googleAuth=()=>{
    
  }
  return (
    <div className="d-flex justify-content-center">
    <div className="w-25 p-3 " style={{backgroundColor: "#ffffff",color:"black"}}>
    <p className="h3">Create Account</p>
    {showError &&  <p style={{color:"red"}}>{errorMessage}</p>}
    <div className="mb-3 mt-4">
  <label htmlFor="exampleFormControlInput1" className="form-label">UserName*</label>
 
  <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="Enter your first and last name"
  onChange={(e) => {
    setName(e.target.value);
  }}/>
</div>
      <div className="mb-3 ">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address*</label>
  {/* <figcaption className="blockquote-footer">
  Emails are collected only for password resets <br/>and are one-way hashed
  at time of collection.
  </figcaption> */}
  {/* <div id="emailHelp" className="form-text">Emails are collected only for password resets <br/>and are one-way hashed
  at time of collection. </div> */}
  <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com"
  onChange={(e) => {
    setEmail(e.target.value);
  }}/>
</div>
<div className="mb-3 ">
  <label htmlFor="exampleFormControlInput1" className="form-label">Password*</label>
 
  <input type="password" className="form-control " id="exampleFormControlInput1" placeholder="At least six characters."
   onChange={(e) => {
    setPassword(e.target.value);
  }}/>

</div>
<div className="mb-3 ">
  <label htmlFor="exampleFormControlInput1" className="form-label">Confirm Password*</label>
 
  <input type="password" className="form-control " id="exampleFormControlInput1" placeholder="At least six characters."
   onChange={(e) => {
    setConfirmPassword(e.target.value);
  }}/>

</div>

<button className="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={signupHandler}>sign up</button>
<div className='d-flex justify-content-center' >
<button className="btn btn-block btn-primary font-weight-bold my-1 py-1 " onClick={googleAuth} style={{backgroundColor:"white",border: '1px solid black',width:"50px"}}>
  <img src="./img/google.png" style={{height:"20px",border:"none"}}  alt="" />
 
</button></div>
    </div></div>
  )
}

export default Signup