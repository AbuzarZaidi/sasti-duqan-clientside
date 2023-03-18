import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop,faGlasses,faTshirt,faCookieBite} from '@fortawesome/free-solid-svg-icons';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
const Featured = () => {
  return (
   <>
      <div className="container-fluid pt-5 ">
        <div className="row px-xl-5 pb-3  ">
        <div className="col-lg-2 col-md-6 col-sm-12 pb-1 mx-auto">
                <div className="d-flex align-items-center bg-light mb-4" style={{paddingTop: "20px",paddingBottom: "30px",display:"flex",flexDirection:"column"}}>
                <div className=" text-primary mb-2 " >
                    {/* <img src="img/laptop.png" alt="" /> */}
                  
                    <FontAwesomeIcon icon={faLaptop} style={{fontSize: "50px",color:"#000000"}}/>
                </div>
                    <h5 className="font-weight-semi-bold m-1">Electronic</h5>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 pb-1 mx-auto">
                <div className="d-flex align-items-center bg-light mb-4" style={{paddingTop: "30px",paddingBottom: "20px",display:"flex",flexDirection:"column"}}>
                <div className=" text-primary mb-2 ">
                <FontAwesomeIcon icon={faGlasses} style={{fontSize: "50px",color:"#000000"}}/>
                </div>
                    <h5 className="font-weight-semi-bold m-1">Glasses</h5>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 pb-1 mx-auto">
                <div className="d-flex align-items-center bg-light mb-4" style={{paddingTop: "30px",paddingBottom: "20px",display:"flex",flexDirection:"column"}}>
                <div className=" text-primary mb-2 " >
                <CheckroomIcon style={{fontSize: "50px",color:"#000000"}}/>
                </div>
                    <h5 className="font-weight-semi-bold m-1">Fashion</h5>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 pb-1 mx-auto">
                <div className="d-flex align-items-center bg-light mb-4" style={{paddingTop: "30px",paddingBottom: "20px",display:"flex",flexDirection:"column"}}>
                <div className=" text-primary mb-2 ">
       
                
                <CookieOutlinedIcon style={{fontSize: "50px",color:"#000000"}}/>
                </div>
                    <h5 className="font-weight-semi-bold m-1">Foods</h5>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Featured