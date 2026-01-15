import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../../Utility/AboutSlice";
import { Button, Modal } from "react-bootstrap";

const ModalForRegisteration = () => {
const {show} = useSelector(state =>state.AboutSlice)
    const dispatch = useDispatch()
  return (
    <div>
      <Modal show={show} onHide={()=>dispatch(handleClose())}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thanks for register!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>dispatch(handleClose())}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>dispatch(handleClose())}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalForRegisteration;
