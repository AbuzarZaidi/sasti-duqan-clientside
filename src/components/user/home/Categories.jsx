import React from 'react'
import {  Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Categories = () => {
    // let data = useSelector((state) => state.categoryData.data);
    const { data:category, status } = useSelector((state) => state.categoryData);
    
  return (
  <>
 
 
   {/* <!-- Categories Start --> */}
    <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
        <div className="row px-xl-5 pb-3">
            {category.map(val=>{
                return <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={val._id}>
                <Link className="text-decoration-none" to="/shop">
                    <div className="cat-item d-flex align-items-center mb-4">
                        <div className="overflow-hidden" style={{width: "100px", height: "100px",}}>
                            <img className="img-fluid" src={val.img} alt="img"style={{width: "70px", height: "70px",marginTop:"15px"}}/>
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>{val.name}</h6>
                            <small className="text-body">100 Products</small>
                        </div>
                    </div>
                </Link>
            </div>
            })}
           
           
            
        </div>
    </div>
    {/* <!-- Categories End --> */}

  </>
  )
}

export default Categories