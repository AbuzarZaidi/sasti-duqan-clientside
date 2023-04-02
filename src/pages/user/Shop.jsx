import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { getProducts } from "../../functions/user/products";
import PriceFilter from "../../components/user/shop/PriceFilter";
import ColorFilter from "../../components/user/shop/ColorFilter";
import SizeFilter from "../../components/user/shop/SizeFilter";
import SortAndShowingFormat from "../../components/user/shop/SortAndShowingFormat";
import Pagination from "../../components/user/shop/Pagination";
import SingleProduct from "../../components/user/shop/SingleProduct";

const Shop = () => {
  // const category = useSelector((state) => state.productData.category);
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setShow(false);
      const result = await getProducts();
      console.log(result)
      if(result.success===true){
        setShow(true);
        setProducts(result.data);
      }
      

      
    };
    fetchData();
  }, []);

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
              <Link className="breadcrumb-item text-dark" to="/shop">
                Shop
              </Link>
              <span className="breadcrumb-item active">Shop List</span>
            </nav>
          </div>
        </div>
      </div>
      {/* <!-- Breadcrumb End --> */}
      {/* <!-- Shop Start --> */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          {/* <!-- Shop Sidebar Start --> */}
          <div className="col-lg-3 col-md-4">
            {/* <!-- Price Start --> */}
            <PriceFilter />
            {/* <!-- Price End --> */}

            {/* <!-- Color Start --> */}
            <ColorFilter />
            {/* <!-- Color End --> */}

            {/* <!-- Size Start --> */}
            <SizeFilter />
            {/* <!-- Size End --> */}
          </div>
          {/* <!-- Shop Sidebar End --> */}

          {/* <!-- Shop Product Start --> */}
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <SortAndShowingFormat />
              <div className="d-flex justify-content-center mb-4">
                {!show && (
                  <div className="spinner-border  " role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
              {show &&
                products.map((val, ind) => {
                  return <SingleProduct product={val} key={val.id}/>;
                })}

              <Pagination />
            </div>
          </div>
          {/* <!-- Shop Product End --> */}
        </div>
      </div>
      {/* <!-- Shop End --> */}
    </>
  );
};

export default Shop;
