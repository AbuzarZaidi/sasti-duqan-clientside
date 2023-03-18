import React,{useState} from 'react'
import {  Link,useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { resetProductHandler } from"../../store/user/cart"
import {createOrder} from "../../functions/user/orders"
const Checkout = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.cartData.product);
    const subTotal = useSelector((state) => state.cartData.subTotal);
    const shipping = useSelector((state) => state.cartData.shipping);
    const total = useSelector((state) => state.cartData.total);
    const [shippingDetail,setShippingDetail]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        address:"",
        area:"",
        city:"",
        country:"",
        state:"",
        zipCode:"",
    })
    const placeOrderHandler=async()=>{
const info={
    userInfo:shippingDetail,
    status:"pending",
    trackingId:Math.floor(100000 + Math.random() * 900000),
    products:product,
    total
}
await createOrder(info);
dispatch(resetProductHandler())
navigate('/')
    }
    const infoHandler=(e)=>{
        const { name, value } = e.target;
        setShippingDetail(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
  return (
   <>
    {/* <!-- Breadcrumb Start --> */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <Link className="breadcrumb-item text-dark" to="#">Home</Link>
                    <Link className="breadcrumb-item text-dark" to="#">Shop</Link>
                    <span className="breadcrumb-item active">Checkout</span>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}
    {/* <!-- Checkout Start --> */}
    <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-lg-8">
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Billing Address</span></h5>
                <div className="bg-light p-30 mb-5">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>First Name</label>
                            <input className="form-control" type="text" placeholder="John" name="firstName" value={shippingDetail.firstName} onChange={infoHandler} />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Last Name</label>
                            <input className="form-control" type="text" placeholder="Doe" name="lastName" value={shippingDetail.lastName} onChange={infoHandler}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>E-mail</label>
                            <input className="form-control" type="text" placeholder="example@email.com" name="email" value={shippingDetail.email} onChange={infoHandler}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Mobile No</label>
                            <input className="form-control" type="text" placeholder="+123 456 789" name="phoneNumber" value={shippingDetail.phoneNumber} onChange={infoHandler}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Address </label>
                            <input className="form-control" type="text" placeholder="House# 123, Street# 123, ABC Road" name="address" value={shippingDetail.address} onChange={infoHandler}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Area</label>
                            <input className="form-control" type="text" placeholder="123 Street" name="area" value={shippingDetail.area} onChange={infoHandler}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Country</label>
                            <select className="custom-select" defaultValue="United States" name="country" onChange={infoHandler}>
                            <option value="unitedStates">United States</option>
                                    <option value="pakistan">Pakistan</option>
                                    <option value="india">India</option>
                                    <option value="afghanistan">Afghanistan</option>
                                    <option value="albania"> Albania</option>
                                    <option value="algeria">Algeria</option>
                            </select>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>City</label>
                            <input className="form-control" type="text" placeholder="New York" name="city" value={shippingDetail.city} onChange={infoHandler}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>State</label>
                            <input className="form-control" type="text" placeholder="New York" name="state" value={shippingDetail.state} onChange={infoHandler}/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>ZIP Code</label>
                            <input className="form-control" type="text" placeholder="123" name="zipCode" value={shippingDetail.zipCode} onChange={infoHandler}/>
                        </div>
                        {/* <div className="col-md-12 form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="newaccount"/>
                                <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="shipto"/>
                                <label className="custom-control-label" htmlFor="shipto"  data-toggle="collapse" data-target="#shipping-address">Ship to different address</label>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="collapse mb-5" id="shipping-address">
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Shipping Address</span></h5>
                    <div className="bg-light p-30">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>First Name</label>
                                <input className="form-control" type="text" placeholder="John"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Last Name</label>
                                <input className="form-control" type="text" placeholder="Doe"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>E-mail</label>
                                <input className="form-control" type="text" placeholder="example@email.com"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Mobile No</label>
                                <input className="form-control" type="text" placeholder="+123 456 789"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Address Line 1</label>
                                <input className="form-control" type="text" placeholder="123 Street"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Address Line 2</label>
                                <input className="form-control" type="text" placeholder="123 Street"/>
                            </div>
                            {/* <div className="col-md-6 form-group">
                                <label>Country</label>
                                <select className="custom-select" defaultValue="United States">
                                    <option >United States</option>
                                    <option>Pakistan</option>
                                    <option>India</option>
                                    <option>Afghanistan</option>
                                    <option>Albania</option>
                                    <option>Algeria</option>
                                    
                                </select>
                            </div> */}
                            <div className="col-md-6 form-group">
                                <label>City</label>
                                <input className="form-control" type="text" placeholder="Lahore"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>State</label>
                                <input className="form-control" type="text" placeholder="New York"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label>ZIP Code</label>
                                <input className="form-control" type="text" placeholder="123"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Order Total</span></h5>
                <div className="bg-light p-30 mb-5">
                    <div className="border-bottom">
                        <h6 className="mb-3">Products</h6>
                        {product.map((val,ind)=>{
                            return <div className="d-flex justify-content-between" key={ind}>
                            <p>{val.name}</p>
                            <p>Rs{val.price}</p>
                        </div>
                        })}
                        
                    </div>
                    <div className="border-bottom pt-3 pb-2">
                        <div className="d-flex justify-content-between mb-3">
                            <h6>Subtotal</h6>
                            <h6>Rs{subTotal}</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="font-weight-medium">Shipping</h6>
                            <h6 className="font-weight-medium">Rs{shipping}</h6>
                        </div>
                    </div>
                    <div className="pt-2">
                        <div className="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <h5>${total}</h5>
                        </div>
                    </div>
                </div>
                <div className="mb-5">
                    <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Payment</span></h5>
                    <div className="bg-light p-30">
                    <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="directcheck"/>
                                <label className="custom-control-label" htmlFor="directcheck">Cash On Delivery</label>
                            </div>
                        </div>
                        {/* <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="paypal"/>
                                <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="directcheck"/>
                                <label className="custom-control-label" htmlFor="directcheck">Direct Check</label>
                            </div>
                        </div>
                        <div className="form-group mb-4">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" name="payment" id="banktransfer"/>
                                <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
                            </div>
                        </div> */}
                        <button className="btn btn-block btn-primary font-weight-bold py-3"onClick={placeOrderHandler}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Checkout End --> */}

   </>
  )
}

export default Checkout