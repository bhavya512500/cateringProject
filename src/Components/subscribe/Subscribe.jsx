import React from "react";
import { Link } from "react-router-dom";
import UserForm from "../contactWithUser/UserForm";
const Subscribe = () => {
  return (
    <div className="container p-0 " >
      <div className="row rowOne p-3 p-md-0">
        <div className="col">
          <h1 >
            Happily E. After
          </h1>
        </div>
        <div className="col-md mt-5 mt-md-0">
          <h6 >
            123-456-7890<br></br> info@mysite.com<br></br> 500 Terry Francine
            St. San Francisco, CA 94158
          </h6>
        </div>
      </div>
      <div className="row mt-5 stayConnect p-3 p-md-0">
        <div className="col ">
          <h1>
            Stay Connected
          </h1>
        </div>
        <div className="col-md my-4 my-md-0  links">
          <Link to="#" className="anchorLink">
            Privacy Policy
          </Link>
          <br></br>
          <Link to="#" className="anchorLink">
            Accessibility Statement
          </Link>
        </div>
      </div>
      <div className="row p-3 p-md-0 mb-5 ">
        <div className="col-lg-4 col-md-7 mt-md-5 form mb-5">

          <UserForm/>
          {/* <div class="row mb-5 mt-4 ">
            <div class="col">
              <p >First Name *</p>
              <input type="text" aria-label="First name" />
            </div>
            <div class="col">
              <p >Last Name *</p>
              <input type="text" className="" aria-label="Last name" />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col ">
              <p >Email *</p>
              <input
              
                type="email"
                aria-label="Email"
              />
            </div>
          </div>
          <div className="row " >
            <div className="col-2 ">
              <input type="checkbox" />
            </div>
            <div className="col subscribePara">
              <p >
                Yes,subscribe me to your newsletter. *
              </p>
            </div>
          </div>
          <div className="row mt-2 rowSubmit" >
            <div className="col">
              <button id="submit" className="btn ">
                Submit
              </button>
            </div>
          </div> */}
        </div>
        <div className="col-lg-4 d-flex align-self-end mx-auto colLast  mb-5" >
          <p >
            © 2035 by Business Name. Powered and secured by{" "}
            <Link to="#" className="anchorLink">
              Wix
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
