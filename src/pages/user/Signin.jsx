import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { setTokenHandler, setIdHandler } from"../../store/auth.js"
import {logIn} from '../../functions/user/users'
const Signin = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const[email,setEmail]=useState(""); 
  const[password,setPassword]=useState(""); 
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const loginHandler=async()=>{
    console.log(email)
    console.log(password)
    if (email && password) {
      console.log("here")
      const user = {
        email,
        password,
      };
      const result = await logIn(user);
     
      if (result.response) {
        if (result.response.status === 422 || result.response.status === 400) {
          setShowError(true);
          setErrorMessage(result.response.data.error);
          setTimeout(() => {
            setShowError(false);
          }, 2000);
        }
      } else {
        dispatch(setTokenHandler(result.token));
        dispatch(setIdHandler(result.id));
        const tokenExpirationDate = new Date(
          new Date().getTime() + 1000 * 600 * 60
        );
        console.log("inside")
        console.log(result)
        localStorage.setItem(
          "userData",
          JSON.stringify({
            token: result.token,
            userId: result.id,
            userName: result.name,
            expiration: tokenExpirationDate.toISOString(),
          })
        );
        navigate("../", { replace: true });
      }
    } else {
      setShowError(true);
      setErrorMessage("Please Fill The Form.");
      setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
  };
  const googleAuth=()=>{
    window.open("http://localhost:5000/users/google", "_self");
  }
  return (
  <>
  <div className="d-flex justify-content-center">
    <div className="w-25 p-3 " style={{backgroundColor: "#ffffff",color:"black"}}>
    <p className="h3">Sign-In</p>
    {showError &&  <p style={{color:"red"}}>{errorMessage}</p>}
      <div className="mb-3 ">
  <label htmlFor="exampleFormControlInput1" className="form-label"   >Email address*</label>
  {/* <figcaption className="blockquote-footer">
  Emails are collected only for password resets <br/>and are one-way hashed
  at time of collection.
  </figcaption> */}
  {/* <div id="emailHelp" className="form-text">Emails are collected only for password resets <br/>and are one-way hashed
  at time of collection. </div> */}
  <input type="email" className="form-control " id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => {
            setEmail(e.target.value);
          }}/>
</div>
<div className="mb-3 ">
  <label htmlFor="exampleFormControlInput1" className="form-label"   >Password*</label>
 
  <input type="password" className="form-control " id="exampleFormControlInput1" placeholder="At least six characters."onChange={(e) => {
            setPassword(e.target.value);
          }}/>
</div>
<button className="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={loginHandler}>sign in</button>
<p className='d-flex justify-content-center'>or</p>
<div className='d-flex justify-content-center' >
<button className="btn btn-block btn-primary font-weight-bold my-1 py-1 " onClick={googleAuth} style={{backgroundColor:"white",border: '1px solid black',width:"50px"}}>
  <img src="./img/google.png" style={{height:"20px",border:"none"}}  alt="" />
 
</button></div>
    </div></div>
  </>
  )
}

export default Signin