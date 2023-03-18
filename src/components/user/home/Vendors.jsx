import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const Vendors = () => {
  return (
    <>
      {/* <!-- Vendor Start --> */}

      <div className="container-fluid py-5 px-5 " style={{ width: "98%" }}>
        <OwlCarousel
          className="owl-theme "
          loop
          margin={30}
          items={6}
          autoplay={true}
          autoplayTimeout={6000}
          nav
        >
          <div className="item bg-light p-4">
            <img src="img/vendor-1.jpg" alt="" />
          </div>
          <div className="item bg-light p-4">
            <img src="img/vendor-2.jpg" alt="" />
          </div>
          <div className="item bg-light p-4">
            <img src="img/vendor-3.jpg" alt="" />
          </div>
          <div className="item bg-light p-4">
            <img src="img/vendor-4.jpg" alt="" />
          </div>
          <div className="item bg-light p-4">
            <img src="img/vendor-5.jpg" alt="" />
          </div>
          <div className="item bg-light p-4">
            <img src="img/vendor-6.jpg" alt="" />
          </div>
          <div className="item bg-light p-4">
            <img src="img/vendor-7.jpg" alt="" />
          </div>
          <div className="item bg-light p-4">
            <img src="img/vendor-8.jpg" alt="" />
          </div>
        </OwlCarousel>
      </div>
      {/* <!-- Vendor End --> */}
    </>
  );
};

export default Vendors;
