import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTodo } from "../../actions";
import "./Todo.css";

const EditTodo = ({ task }) => {
  // States
  const [Myinput, setMyinput] = useState(task.text);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  // Functions
  // Event Handlers
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => setMyinput(e.target.value);

  const handleClick = () => {
    dispatch(editTodo({ ...task, text: Myinput }));
    handleClose();
  };

  return (
    <>
      <button className="edit-btn" onClick={handleShow}>
        Edit
      </button>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form.Control type="text" value={Myinput} onChange={handleChange} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTodo;
