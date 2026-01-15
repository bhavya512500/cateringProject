import React from "react";
import {  handleGetSUserObj } from "../../Utility/AboutSlice";
import { useDispatch, useSelector } from "react-redux";
import UserForm from "../contactWithUser/UserForm";

const ContactUs = () => {

 const { user } = useSelector((state) => state.AboutSlice);
  const { firstName, lastName, email, message } = user;

  const dispatch = useDispatch();

  return (
    <>
      <div className="container contactCont ">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className=" text-center">
              <h1>CONTACT US</h1>
              <p className="mt-4">
                Reach out to us for any inquiries, bookings, or to discuss your
                dream wedding catering <br className="d-lg-block d-none" />{" "}
                needs. We're here to make your special day unforgettable.
              </p>
            </div>
            <div className="row mt-5 form ">
              <div className="col-lg-8 col-md-8 col-10 mx-auto px-0">
                <UserForm/>
                {/* <div class="row mb-5 ">
                  <div class="col">
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
                    <button id="submit" className="btn "  onClick={() => dispatch(getUserInfo())}>
                      Submit
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
