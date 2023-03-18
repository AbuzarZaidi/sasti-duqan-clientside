import React from "react";

const Review = () => {
  return (
    <>
      <div  id="tab-pane-3">
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-4">1 review for "Product Name"</h4>
            <div className="media mb-4">
              <img
                src="img/user.jpg"
                alt="Img"
                className="img-fluid mr-3 mt-1"
                style={{ width: " 45px" }}
              />
              <div className="media-body">
                <h6>
                  John Doe
                  <small>
                    {" "}
                    - <i>01 Jan 2045</i>
                  </small>
                </h6>
                <div className="text-primary mb-2">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <i className="far fa-star"></i>
                </div>
                <p>
                  Diam amet duo labore stet elitr ea clita ipsum, tempor labore
                  accusam ipsum et no at. Kasd diam tempor rebum magna dolores
                  sed sed eirmod ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="mb-4">Leave a review</h4>
            <small>
              Your email address will not be published. Required fields are
              marked *
            </small>
            <div className="d-flex my-3">
              <p className="mb-0 mr-2">Your Rating * :</p>
              <div className="text-primary">
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="message">Your Review *</label>
                <textarea
                  id="message"
                  cols="30"
                  rows="5"
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group mb-0">
                <input
                  type="submit"
                  defaultValue="Leave Your Review"
                  className="btn btn-primary px-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
