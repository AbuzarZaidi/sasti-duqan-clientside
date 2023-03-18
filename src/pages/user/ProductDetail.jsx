import React,{useState,useEffect} from 'react'
import { HashLink as Link } from "react-router-hash-link";
import {  useNavigate } from "react-router-dom";
import Description from '../../components/user/productDetail.jsx/Description';
import Information from '../../components/user/productDetail.jsx/Information'
import Review from '../../components/user/productDetail.jsx/Review'
import { useSelector,useDispatch } from "react-redux";
import { setProductHandler } from "../../store/user/cart";
import RelatedProducts from '../../components/user/productDetail.jsx/RelatedProducts';
const ProductDetail = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.productData.product);
    console.log("single")
    console.log(product)
const [showTab,setShowTab]=useState(0)
const [quantity,setQuantity]=useState(1);
const addToCart=()=>{
    // console.log(product)
    const newProduct={
id:product.id,
name:product.name,
price:product.price,
imgUrl:product.mainImage,
singleProductTotal:0,
productQuantity:quantity,
    }
    console.log(newProduct)
    dispatch(setProductHandler(newProduct));
    navigate('/cart')
}
  return (
 <>
 {/* <!-- Breadcrumb Start --> */}
 <div className="container-fluid">
        <div className="row px-xl-5">
            <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                    <Link className="breadcrumb-item text-dark" to="/">Home</Link>
                    <Link className="breadcrumb-item text-dark" to="/">Shop</Link>
                    <span className="breadcrumb-item active">Shop Detail</span>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Breadcrumb End --> */}
    {/* <!-- Shop Detail Start --> */}
    <div className="container-fluid pb-5">
        <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
                <div id="product-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner bg-light" style={{height:"437px",minWidth:'100%'}}>
                        {/* {product.imgUrl.map((img)=>{
                            return(<div className="carousel-item active">
                            <img className="w-100 h-100" src={img} alt="Img"/>
                        </div>)
                        })} */}
                        <div className="carousel-item active">
                            
                            <img className="w-100 h-100" src={`http://localhost:5000/${product.mainImage}`} alt="Img"/>
                        </div>
                        {/* <div className="carousel-item">
                            <img className="w-100 h-100" src={product.imgUrl[1]} alt="Img"/>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100 h-100" src={product.imgUrl[2]} alt="Img"/>
                        </div> */}
                        
                    </div>
                    <Link className="carousel-control-prev"  to="#product-carousel" data-slide="prev">
                        <i className="fa fa-2x fa-angle-left text-dark"></i>
                    </Link>
                    <Link className="carousel-control-next" to="#product-carousel" data-slide="next">
                        <i className="fa fa-2x fa-angle-right text-dark"></i>
                    </Link>
                </div>
            </div>

            <div className="col-lg-7 h-auto mb-30">
                <div className="h-100 bg-light p-30">
                    <h3>{product.name}</h3>
                    <div className="d-flex mb-3">
                        <div className="text-primary mr-2">
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star"></small>
                            <small className="fas fa-star-half-alt"></small>
                            <small className="far fa-star"></small>
                        </div>
                        <small className="pt-1">(99 Reviews)</small>
                    </div>
                    <h3 className="font-weight-semi-bold mb-4">${product.price}</h3>
                    <p className="mb-4">{product.description}</p>
                    {/* {product.sizes.length>0&&<div className="d-flex mb-3">
                        <strong className="text-dark mr-3">Sizes:</strong>
                        <form> */}
                        {/* {product.sizes.map((size,ind)=>{
                                return(
<div className="custom-control custom-radio custom-control-inline" key={ind}>
                                <input type="radio" className="custom-control-input" id={size} name="size"/>
                                <label className="custom-control-label" htmlFor="size-1">{size}</label>
                            </div>
                                )
                            })} */}
                           
                        {/* </form>
                    </div>} */}
                    <div className="d-flex mb-4">
                        <strong className="text-dark mr-3">Colors:</strong>
                        <form>
                            {/* {product.colors.map((color,ind)=>{
                                return(
<div className="custom-control custom-radio custom-control-inline" key={ind}>
                                <input type="radio" className="custom-control-input" id={color} name="color"/>
                                <label className="custom-control-label" htmlFor="color-1">{color}</label>
                            </div>
                                )
                            })} */}
                            
                            
                        </form>
                    </div>
                    <div className="d-flex align-items-center mb-4 pt-2">
                        <div className="input-group quantity mr-3" style={{width: "130px"}}>
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-minus"onClick={() => setQuantity(quantity - 1)}>
                                    <i className="fa fa-minus"></i>
                                </button>
                            </div>
                            <input type="text" className="form-control bg-secondary border-0 text-center"value={quantity} />
                            <div className="input-group-btn">
                                <button className="btn btn-primary btn-plus" onClick={() => setQuantity(quantity + 1)}>
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                        </div>
                        <button className="btn btn-primary px-3" onClick={addToCart}><i className="fa fa-shopping-cart mr-1"></i> Add To
                            Cart</button>
                    </div>
                    <div className="d-flex pt-2">
                        <strong className="text-dark mr-2">Share on:</strong>
                        <div className="d-inline-flex">
                            <Link className="text-dark px-2" to="/">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="text-dark px-2" to="/">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="text-dark px-2" to="/">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link className="text-dark px-2" to="/">
                                <i className="fab fa-pinterest"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="bg-light p-30">
                    <div className="nav nav-tabs mb-4">
                         <Link className="nav-item nav-link text-dark active" data-toggle="tab" 
                        to="/detail#tab-pane-1" onClick={()=>setShowTab(0)}>Description</Link> 
                           <Link className="nav-item nav-link text-dark " data-toggle="tab" 
                        to="/detail#tab-pane-2"onClick={()=>setShowTab(1)}>Information</Link> 
                           <Link className="nav-item nav-link text-dark " data-toggle="tab" 
                        to="/detail#tab-pane-3"onClick={()=>setShowTab(2)}>Review</Link> 
                         
                    </div>
                    <div className="tab-content">
                    {showTab===0&&<Description detail={product.longDescription}/>}
                    {showTab===1&&<Information/>}
                    {showTab===2&& <Review/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Shop Detail End --> */}
    <RelatedProducts/>

    </>

  )
}

export default ProductDetail