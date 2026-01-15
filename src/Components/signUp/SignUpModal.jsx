import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../../Utility/AboutSlice";

const SignUpModal = () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.AboutSlice);
  return (
    <>
      <div className=" modalDiv">
        <Modal
          size=""
          show={show}
          onHide={() => dispatch(handleClose())}
          id="Modal"
          className="p-0 "
        >
          <div className="container " >
            <div className="row  d-flex justify-content-between ">
              <div className="col p-0 ">
                <Modal.Header closeButton className="border-0 " id="modal">
                  <Modal.Title className="modalHeading">Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body id="modal">
                  <div className="row mb-3 ">
                    <div className="col mt-1  p-md-1 ">
                      <div className="form-floating mb-3 inpDiv ms-lg-5 ms-md-3">
                        <input
                          type="text"
                          className=" inp px-3 ms-lg-3"
                          id="floatingInput"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col mt-3  p-md-1">
                      <div className="form-floating mb-3 inpDiv ms-lg-5 ms-md-3">
                        <input
                          type="text"
                          className=" inp px-3 ms-lg-3 "
                          id="floatingInput"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col mt-3  p-md-1">
                      <div className="form-floating mb-3 inpDiv ms-lg-5 ms-md-3">
                        <input
                          type="email"
                          className=" inp px-3 ms-lg-3  "
                          id="floatingInput"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col mt-3  p-md-1">
                      <div className="form-floating mb-3 inpDiv ms-lg-5 ms-md-3">
                        <input
                          type=""
                          className=" inp px-3 ms-lg-3 "
                          id="floatingInput"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer id="modal" className="px-0 ">
                  <div className="row d-flex justify-content-between mx-5 ">
                    <div className="col-lg-8 p-0 ">
                      <p className="">Already have an account? <span> Login.</span></p>
                    </div>
                    <div className="col p-0 ms-lg-3 border-0 mt-md-2 mb-3 py-lg-0" id="SignUpbtn">
                          <Button
                           
                            onClick={() => dispatch(handleClose())}
                          >
                            Sign Up
                          </Button>
                      {/* <div className="row border d-flex ">
                        <div className="col border">
                        </div>
                      </div> */}
                    </div>
                  </div>
                </Modal.Footer>
              </div>
              <div className="col p-0 imgCol">
                <img src="modalImage.jpg" alt="" className="" />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default SignUpModal;
