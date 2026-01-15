import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  handleGetSUserObj } from "../../Utility/AboutSlice";
import UserForm from "../contactWithUser/UserForm";


const AboutUs = () => {
  // const { user } = useSelector((state) => state.AboutSlice);
  // const { firstName, lastName, email, message } = user;

  // const dispatch = useDispatch();

  // // const getUserInfo = () => {
  // //   console.log(user);
  // // };


  return (
    <>
      <div className="container  p-0">
        
        <div className="row my-5 ">
          <div className="col-lg-6 ">
            <img
              src="https://static.wixstatic.com/media/84770f_2578d10386704c6b8753e29e379fedec~mv2.jpeg"
              alt="..."
            />
          </div>
          <div className="col-lg-6 mt-lg-0 mt-4 mb-5 mb-md-0 rowOne text-center  d-flex align-items-center justify-content-center flex-column">
            <h5>Exquisite Catering Services for Weddings</h5>
            <h1 className="taste ">TASTE THE PERFECTION</h1>
            <button id="btn">Learn More</button>
          </div>
        </div>
        <div className="row py-lg-4 rowTwo ">
          <div className="col-lg-6 mb-3 mb-md-0 px-4 px-md-0">
            <h1 className="about">ABOUT</h1>
            <h5>
              We are passionate about curating exceptional
              <br className="d-none d-lg-block"></br> culinary experiences for
              weddings. Our dedicated<br className="d-none d-lg-block"></br>{" "}
              team ensures that every dish is a masterpiece,{" "}
              <br className="d-none d-lg-block"></br>every detail is perfect,
              and every guest is delighted.
              <br className="d-none d-lg-block"></br> Let us make your special
              day even more<br className="d-none d-lg-block"></br> memorable
              with our exquisite catering services.
            </h5>
            <button id="btn">Discover More</button>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 colImg px-3 px-md-0">
            <img
              src="https://static.wixstatic.com/media/84770f_5069b1bdddab4ff98b7fc1fe22d6b50d~mv2.jpeg"
              alt="..."
            />
          </div>
        </div>
        <div className="row rowThree mt-5 mt-md-0 p-4 p-md-0">
          <h1 className="about ">TESTIMONIALS</h1>
          <div className="col-lg-4 mt-4 mt-lg-0 desBox p-3 p-md-0">
            <h5>
              ״Our wedding menu was a culinary{" "}
              <br className="d-none d-md-block"></br>delight, exceeding all
              expectations. The <br className="d-none d-md-block"></br>
              presentation <br className="d-block d-md-none" /> and taste were
              exceptional.״
            </h5>
            <h6 className="mt-lg-5 mt-4">John Doe</h6>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0 desBox p-3 p-md-0">
            <h5>
              ״The catering team went above and{" "}
              <br className="d-none d-md-block"></br> beyond, accommodating all
              our requests <br className="d-none d-md-block"></br>with a smile.
              Truly remarkable service!״
            </h5>
            <h6 className="mt-lg-5 mt-4">Emily Johnson</h6>
          </div>
          <div className="col-lg-4 mt-4 mt-lg-0 desBox p-3 p-md-0">
            <h5>
              ״The attention to detail in every dish was <br></br>outstanding.
              Our guests are still raving{" "}
              <br className="d-none d-md-block"></br> about the fantastic food.״
            </h5>
            <h6 className="mt-lg-5 mt-4 ">Michael Smith</h6>
          </div>
        </div>
        <h1 className="about p-3 p-md-0 mt-5 mt-md-0 " id="chooseUs">WHY CHOOSE US</h1>
        <div className="row d-flex justify-content-lg-between mt-3 mt-md-4 p-4 p-lg-0 ">
          <div className="col-lg-4  p-0">
            <div className="mb-lg-4  imgDiv">
              <img
                src="https://static.wixstatic.com/media/84770f_0606cb85b34740e9803b07019643e757~mv2.jpeg"
                alt=""
              />
            </div>
            <h1 className="mb-3 mx-lg-0 comFont mt-3 mt-md-0">Experience</h1>
            <h4 className="mx-lg-0 comH4Font">Decades of Culinary Expertise</h4>
          </div>
          <div className="col-lg-4 mt-5 mt-md-0 p-0">
            <h1 className="mb-3 mx-lg-4 d-lg-block d-none comFont">Quality</h1>
            <h4 className="mx-lg-4 comH4Font d-lg-block d-none  ">
              Fresh and Premium Ingredients
            </h4>
            <div className="mt-lg-5 mt-5 imgDiv ">
              <img
                src="https://static.wixstatic.com/media/84770f_1d33b1b0255e470f8c7997c7ee78c4ea~mv2.jpeg"
                alt=""
              />
            </div>
            <h1 className="mb-3 mx-lg-4 d-lg-none d-block comFont mt-3 ">
              Quality
            </h1>
            <h4 className="mx-lg-4 comH4Font d-lg-none d-block  ">
              Fresh and Premium Ingredients
            </h4>
          </div>
          <div className="col-lg-4 mt-5 mt-md-0 p-0 ">
            <div className="mb-4 mx-lg-5 imgDivThree mt-5 mt-md-0">
              <img
                src="https://static.wixstatic.com/media/84770f_3b5f007283b74c6db6f52a85a3415c7c~mv2.jpeg"
                alt=""
              />
            </div>
            <h1 className="mb-3 mx-lg-5 comFont">Service</h1>
            <h4 className="mx-lg-5 comH4Font">Exceptional Customer Care</h4>
          </div>
        </div>
        <div className="container contactCont  p-0">
          <div className="row p-2 p-md-0 d-lg-flex justify-content-lg-between">
            <div className="col-lg-5 ">
              <h1 className="contactH1">CONTACT US</h1>
              <h6 className="mx-md-2 my-5 my-md-0">Get In Touch</h6>
            </div>
            <div className="col-lg-5  enquirycol d-flex justify-content-lg-end align-self-start">
              <h6 className=" d-flex justify-content-end align-self-start mt-md-4">
                For inquiries, bookings, or{" "}
                <br className="d-none d-lg-block"></br> collaborations, feel
                free to reach out to<br className="d-none d-lg-block"></br> us.{" "}
                <br className="d-none d-md-block d-lg-none" />
                We are here to make your wedding
                <br className="d-none d-lg-block"></br> catering experience
                extraordinary.
              </h6>
            </div>
          </div>
          <div className="row mt-5 py-lg-5 p-4 p-md-0 ">
            <div className="col-md-6 col-lg-5 mx-md-4 p-0form">
              <UserForm/>
              {/* <div class="row mb-5 ">
                <div class="col  ">
                  <p>First Name *</p>
                  <input
                    type="text"
                    aria-label="First name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) =>
                      dispatch(
                        handleGetSUserObj({ [e.target.name]: e.target.value })
                      )
                    }
                  />
                </div>
                <div class="col">
                  <p>Last Name *</p>
                  <input
                    type="text"
                    className=""
                    aria-label="Last name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) =>
                      dispatch(
                        handleGetSUserObj({ [e.target.name]: e.target.value })
                      )
                    }
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <p>Email *</p>
                  <input
                    type="email"
                    aria-label="Email"
                    name="email"
                    value={email}
                    onChange={(e) =>
                      dispatch(
                        handleGetSUserObj({ [e.target.name]: e.target.value })
                      )
                    }
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col">
                  <p>Message </p>
                  <input
                    type="text"
                    aria-label="Message"
                    name="message"
                    value={message}
                    onChange={(e) =>
                      dispatch(
                        handleGetSUserObj({ [e.target.name]: e.target.value })
                      )
                    }
                  />
                </div>
              </div>
              <div className="row ">
                <div className="col">
                  <button
                    id="submit"
                    className="btn "
                    onClick={() => dispatch(getUserInfo())}
                  >
                    Submit
                  </button>
                </div>
              </div> */}
              
            </div>
          </div>
        </div>
        <div className="row rowLast">
          <img
            src="https://static.wixstatic.com/media/84770f_388fb4904d0248628aaf658292e5e3b0~mv2.jpeg/v1/fill/w_1176,h_551,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_388fb4904d0248628aaf658292e5e3b0~mv2.jpeg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
