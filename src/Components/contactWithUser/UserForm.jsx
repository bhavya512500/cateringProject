import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleCheckForm,
  handleGetSUserObj,
  handleShow,
} from "../../Utility/AboutSlice";

const UserForm = () => {
  const { user } = useSelector((state) => state.AboutSlice);
  const { firstName, lastName, email, message } = user;

  const dispatch = useDispatch();

  //   const getUserInfo = () => {
  //     console.log(user);
  //     dispatch(afterSubmit())
  //     if( dispatch(afterSubmit())){

  //     }
  //   };

  return (
    <>
      <div className="row mb-5 ">
        <div className="col  ">
          <p>First Name *</p>
          <input
            type="text"
            aria-label="First name"
            name="firstName"
            value={firstName}
            onChange={(e) =>
              dispatch(
                handleGetSUserObj({ [e.target.name]: e.target.value }),
                // handleCheckForm("about")
              )
            }
          />
        </div>
        <div className="col">
          <p>Last Name *</p>
          <input
            type="text"
            className=""
            aria-label="Last name"
            name="lastName"
            value={lastName}
            onChange={(e) =>
              dispatch(handleGetSUserObj({ [e.target.name]: e.target.value }))
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
              dispatch(handleGetSUserObj({ [e.target.name]: e.target.value }))
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
              dispatch(handleGetSUserObj({ [e.target.name]: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="row ">
        <div className="col">
          <button
            id="submit"
            className="btn "
            // onClick={() => dispatch(handleShow())}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default UserForm;
