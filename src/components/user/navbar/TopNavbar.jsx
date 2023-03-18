import React from 'react'
import {  Link,useNavigate } from "react-router-dom";
import { useSelector,useDispatch} from "react-redux";
import {
    setlogoutHandler
  } from "../../../store/auth";
import { setCategoryHandler } from "../../../store/user/products";
import '../../../css/style.css';
const TopNavbar = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    let isLogin= useSelector((state) => state.authData.isLogin);
    const { data: category, status } = useSelector((state) => state.categoryData);
    const totalProduct = useSelector((state) => state.cartData.product);
   
    const categoryHandler = (value) => {
      dispatch(setCategoryHandler(value));
    }
    const signupHandler=()=>{
      
        navigate("../signup", { replace: true });
    }
    const signinHandler=()=>{
        
        navigate("../signin", { replace: true });
    }
    const logoutHandler=()=>{
        navigate("/", { replace: true });
       
        dispatch(setlogoutHandler());
        localStorage.removeItem("userData");
    }
  return (
    <>
     {/* <!-- Topbar Start --> */}
    <div className="container-fluid">
        {/* <div className="row bg-secondary py-1 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                    <Link to='/about' className="text-body mr-3" >About</Link>
                   <Link to={isLogin?'/contact':'/signin'} className="text-body mr-3" >Contact</Link>
                    <Link to='/' className="text-body mr-3" >Help</Link>
                    <Link to='/' className="text-body mr-3" >FAQs</Link>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">My Account</button>
                        <div className="dropdown-menu dropdown-menu-right">
                           {!isLogin&&<button className="dropdown-item" type="button" onClick={signinHandler}>Sign in</button>}
                           {!isLogin&& <button className="dropdown-item" type="button" onClick={signupHandler}>Sign up</button>}
                           {isLogin&& <button className="dropdown-item" type="button" onClick={logoutHandler} style={{textAlign:"center"}}><img src="./img/logout.png" style={{height:"20px",border:"none",marginRight:"5px"}}  alt="" />Log out</button>}
                        </div>
                    </div>
                    <div className="btn-group mx-2">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">USD</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">EUR</button>
                            <button className="dropdown-item" type="button">GBP</button>
                            <button className="dropdown-item" type="button">CAD</button>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item" type="button">FR</button>
                            <button className="dropdown-item" type="button">AR</button>
                            <button className="dropdown-item" type="button">RU</button>
                        </div>
                    </div>
                </div>
                <div className="d-inline-flex align-items-center d-block d-lg-none">
                    <Link to='/' className="btn px-0 ml-2">
                        <i className="fas fa-heart text-dark"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0</span>
                    </Link>
                    <Link to='/' className="btn px-0 ml-2">
                        <i className="fas fa-shopping-cart text-dark"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0</span>
                    </Link>
                </div>
            </div>
        </div> */}
        <div className="row align-items-center bg-light  px-xl-5 d-none d-lg-flex" style={{height:"80px"}}>
            <div className="col-lg-4">
                <Link to='/' className="text-decoration-none">
                    {/* <span className="h1 text-uppercase text-primary bg-dark px-2">Buy</span>
                    <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Now</span> */}
                    <img src="img/logo3.png" alt="" style={{width:"70px",height:"70px"}}/>
                </Link>
            </div>
            <div className="col-lg-4 col-6 text-left">
                <form action="">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for products"/>
                        <div className="input-group-append">
                            <span className="input-group-text bg-transparent text-primary">
                                <i className="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col-lg-4 col-6 text-right">
               
            <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <Link
                    to="/"
                    className="btn px-0"
                    style={{ paddingTop: "20px" }}
                  >
                    <i className="fas fa-heart heart-color"></i>
                    <span className="badge black-color border border-secondary rounded-circle">
                      0
                    </span>
                  </Link>
                  <Link
                    to="/cart"
                    className="btn px-0 ml-3"
                    style={{ paddingTop: "20px" }}
                  >
                    <i className="fas fa-shopping-cart cart-color"></i>
                    <span className="badge black-color border border-secondary rounded-circle">
                      {totalProduct.length}
                    </span>
                  </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default TopNavbar