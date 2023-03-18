import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setIncreaseQuantity, setDecreaseQuantity,setDeleteProductHandler,setTotalHandler,setSubTotalHandler } from "../../store/user/cart";
const ShoppingCart = () => {
  const navigate=useNavigate();
  let product = useSelector((state) => state.cartData.product);
  const shipping = useSelector((state) => state.cartData.shipping);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem('cartProduct',JSON.stringify(product))
    let sum = 0;
    for (let i = 0; i < product.length; i++) {
      sum = sum + product[i].productQuantity * product[i].price;
    }
    setTotal(sum);
  }, [product]);
const removeHandler=(i)=>{
  console.log("first")
  console.log(product[i].id)
   product= product.filter((val)=>{
console.log("second")
console.log(val.id)
 return val.id!==product[i].id;
    })
    dispatch(setDeleteProductHandler(product))

}
  const plusHandler = (i) => {
    dispatch(setIncreaseQuantity(i));
  };
  const minusHandler = (i) => {
    dispatch(setDecreaseQuantity(i));
  };
  const checkOutHandler=()=>{
    dispatch(setSubTotalHandler(total))
    dispatch(setTotalHandler())
    navigate('/checkout')
  }
  return (
    <>
      {/* <!-- Breadcrumb Start --> */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" to="/">
                Home
              </Link>
              <Link className="breadcrumb-item text-dark" to="/">
                Shop
              </Link>
              <span className="breadcrumb-item active">Shopping Cart</span>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb End --> */}

      {/* <!-- Cart Start --> */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {product.map((val, i) => {
                  return (
                    <tr key={i}>
                      <td className="align-middle">
                        <img
src={`http://localhost:5000/${val.imgUrl}`}

                          alt=""
                          style={{ width: "50px", height: "50px" }}
                        />{" "}
                        {val.name}
                      </td>
                      <td className="align-middle">${val.price}</td>
                      <td className="align-middle">
                        <div
                          className="input-group quantity mx-auto"
                          style={{ width: "100px" }}
                        >
                          <div className="input-group-btn">
                            <button className="btn btn-sm btn-primary btn-minus">
                              <i
                                className="fa fa-minus"
                                onClick={() => minusHandler(i)}
                              ></i>
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control form-control-sm bg-secondary border-0 text-center"
                            value={val.productQuantity}
                            disabled
                          />
                          <div className="input-group-btn">
                            <button
                              className="btn btn-sm btn-primary btn-plus"
                              onClick={() => plusHandler(i)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        ${val.price * val.productQuantity}
                      </td>
                      <td className="align-middle">
                        <button className="btn btn-sm btn-danger" onClick={()=>removeHandler(i)}>
                          <i className="fa fa-times"></i>
                          
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-30" action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6>${total}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">${shipping}</h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>${total + shipping}</h5>
                </div>
                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3" onClick={checkOutHandler}>
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
