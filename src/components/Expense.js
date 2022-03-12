import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";

const Expense = (props) => {
  const note = props.note;
  const dispatch = useDispatch();

  const [isShowing, setIsShowing] = useState(false);
  const [name, setName] = useState(note.name);
  const [email, setEmail] = useState(note.email);
  const [gen, setGen] = useState(note.gen);

  const handleDelete = () => {
    // dispatch(deleteNote(note.id));
  };

  const handleSubmit = () => {
    let noteData = {
      id: note.id,
      name: name,
      email: email,
      date: note.date,
    };

    // dispatch(editNote(noteData));
    handleClose();
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>Name:{note.name}</Card.Text>
            <Card.Text>:{note.email}</Card.Text>
            <Card.Text>Note Text:{note.gen}</Card.Text>
            <Button
              onClick={() => setIsShowing(true)}
              variant="outline-primary"
              size="lg"
            >
              Edit
            </Button>
            <Button variant="outline-danger" size="lg" onClick={handleDelete}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>

      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={gen}
            onChange={(e) => setGen(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Expense;
