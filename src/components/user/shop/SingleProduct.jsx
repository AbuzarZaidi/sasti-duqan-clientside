import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { setProductHandler } from "../../../store/user/products";
import { useDispatch } from "react-redux";
const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetailHandler = (product) => {
    navigate("/detail");
    dispatch(setProductHandler(product));
  };
  return (
    <>
      <div
        className="col-lg-4 col-md-6 col-sm-6 pb-1"
        onClick={() => productDetailHandler(product)}
      >
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img
              className="img-fluid w-100"
              src={`http://localhost:5000/${product.mainImage}`}
              alt=""
              style={{ height: "250px" }}
            />
            <div className="product-action">
              <Link className="btn btn-outline-dark btn-square" to="/">
                <i className="fa fa-shopping-cart"></i>
              </Link>
              <Link className="btn btn-outline-dark btn-square" to="/">
                <i className="far fa-heart"></i>
              </Link>
              <Link className="btn btn-outline-dark btn-square" to="/">
                <i className="fa fa-sync-alt"></i>
              </Link>
              <Link className="btn btn-outline-dark btn-square" to="/">
                <i className="fa fa-search"></i>
              </Link>
            </div>
          </div>
          <div className="text-center py-4">
            <Link className="h6 text-decoration-none text-truncate" to="/">
              {product.name}
            </Link>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>${product.price}</h5>
              <h6 className="text-muted ml-2">
                {/* <del>${product.price + (product.price * 0.2)}</del> */}
              </h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1"></small>
              <small className="fa fa-star text-primary mr-1"></small>
              <small className="fa fa-star text-primary mr-1"></small>
              <small className="far fa-star text-primary mr-1"></small>
              <small className="far fa-star text-primary mr-1"></small>
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
