import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleShow } from "../Utility/AboutSlice.js";

const NavBar = () => {
  const dispatch = useDispatch();
  // const {} = useSelector(state=>state.AboutSlice)
  return (
    <>
      <div className="row navRow">
        <nav
          className="navbar navbar-expand-lg"
          style={
            {
              // position: "fixed",
              // background: "transparent",
              // backdropFilter: "blur(2px)",
            }
          }
        >
          <div className="container ">
            <Link className="navbar-brand navBrand" to="#">
              Happily E. After
            </Link>
            <button
              className="navbar-toggler mx-md-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse mt-3 mt-lg-0 d-lg-flex justify-content-lg-end "
              id="navbarNav"
            >
              <ul className="navbar-nav ">
                <li className="nav-item  ">
                  <Link className="nav-link active" aria-current="page" to="/">
                    About Us
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link"
                    to="/services"
                    style={{ color: "black" }}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link"
                    to="/contact"
                    style={{ color: "black" }}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item mx-lg-3">
                  <Link
                    className="nav-link"
                    to="/menus"
                    style={{ color: "black" }}
                  >
                    Menus
                  </Link>
                </li>
                <div>
                  <Button
                    className="btn d-block d-md-none "
                    id="signUpBtn"
                    onClick={() => dispatch(handleShow())}
                  >
                    Sign Up{" "}
                  </Button>
                </div>
                <div>
                  <Button
                    className="btn "
                    id="signUpBtn"
                    onClick={() => dispatch(handleShow())}
                  >
                    Sign Up{" "}
                  </Button>
                </div>

                <li className="nav-item mx-lg-3">
                  <Link
                    className="nav-link d-none"
                    to="/admin"
                    style={{ color: "black" }}
                  >
                    Admin Panel
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
