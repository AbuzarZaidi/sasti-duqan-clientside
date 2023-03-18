import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryHandler } from "../../../store/products";
import "../../css/style.css";
const BottomNavbar = () => {
  const { data: category, status } = useSelector((state) => state.categoryData);
  const totalProduct = useSelector((state) => state.cartData.product);
  const dispatch = useDispatch();
  const categoryHandler = (value) => {
    dispatch(setCategoryHandler(value));
  };
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              href="#navbar-vertical"
              className="btn d-flex align-items-center justify-content-between bg-primary w-100"
              data-toggle="collapse"
              style={{ height: "65px", padding: "0 30px" }}
            >
              <h6 className="text-dark m-0">
                <i className="fa fa-bars mr-2"></i>Categories
              </h6>
              <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: "999" }}
            >
              <div className="navbar-nav w-100">
                <div className="nav-item dropdown dropright">
                  <div
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Groceries & Pets{" "}
                    <i className="fa fa-angle-right float-right mt-1"></i>
                  </div>
                  <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                    <Link
                      to="/shop"
                      onClick={categoryHandler}
                      className="dropdown-item"
                    >
                      Men's Dresses
                    </Link>
                    <Link
                      to="/shop"
                      onClick={categoryHandler}
                      className="dropdown-item"
                    >
                      Women's Dresses
                    </Link>
                    <Link
                      to="/shop"
                      onClick={categoryHandler}
                      className="dropdown-item"
                    >
                      Baby's Dresses
                    </Link>
                  </div>
                </div>

                {category.map((val) => {
                  return (
                    <div className="nav-item dropdown dropright" key={val._id}>
                      <div
                        className="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        {val.name}
                        <i className="fa fa-angle-right float-right mt-1"></i>
                      </div>
                      <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                        <Link to="/shop" className="dropdown-item">
                          Men's Dresses
                        </Link>
                        <Link to="/shop" className="dropdown-item">
                          Women's Dresses
                        </Link>
                        <Link to="/shop" className="dropdown-item">
                          Baby's Dresses
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <Link to="/" className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Multi
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">

                </div>
                --

                
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <Link
                    to="/"
                    className="btn px-0"
                    style={{ paddingTop: "20px" }}
                  >
                    <i className="fas fa-heart text-primary"></i>
                    <span className="badge text-secondary border border-secondary rounded-circle">
                      0
                    </span>
                  </Link>
                  <Link
                    to="/cart"
                    className="btn px-0 ml-3"
                    style={{ paddingTop: "20px" }}
                  >
                    <i className="fas fa-shopping-cart text-primary"></i>
                    <span className="badge text-secondary border border-secondary rounded-circle">
                      {totalProduct.length}
                    </span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Navbar End --> */}
    </>
  );
};

export default BottomNavbar;
