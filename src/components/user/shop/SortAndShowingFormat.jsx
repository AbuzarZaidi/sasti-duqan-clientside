import React from 'react'
import {  Link } from "react-router-dom";
const SortAndShowingFormat = () => {
  return (
    <>
      <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <button className="btn btn-sm btn-light"><i className="fa fa-th-large"></i></button>
                                <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars"></i></button>
                            </div>
                            <div className="ml-2">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="/">Latest</Link>
                                        <Link className="dropdown-item" to="/shop" >Price lowest to highest</Link>
                                        <Link className="dropdown-item" to="/shop" >Price highest to lowest</Link>
                                        <Link className="dropdown-item" to="/">Popularity</Link>
                                        <Link className="dropdown-item" to="/">Best Rating</Link>
                                    </div>
                                </div>
                                <div className="btn-group ml-2">
                                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="/">10</Link>
                                        <Link className="dropdown-item" to="/">20</Link>
                                        <Link className="dropdown-item" to="/">30</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default SortAndShowingFormat