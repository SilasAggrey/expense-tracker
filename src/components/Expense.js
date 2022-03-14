import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteExpense, editExpense } from "../actions/actions";
import moment from "moment";

const Expense = ({ expense, index }) => {
  const dispatch = useDispatch();

  const [isShowing, setIsShowing] = useState(false);
  const [title, setTitle] = useState(expense.title);
  const [amount, setAmount] = useState(expense.amount);
  const [category, setCategory] = useState(expense.category);
  const date = new Date();

  const handleDelete = () => {
    dispatch(deleteExpense(expense.id));
  };

  const handleSubmit = () => {
    let expenseData = {
      id: expense.id,
      title: title,
      amount: amount,
      category: category,
      date: expense.date,
    };

    dispatch(editExpense(expenseData));
    handleClose();
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <tr className="mb-2">
        <th>{index + 1}</th>
        <td>{expense.title}</td>
        <td>{expense.category}</td>
        <td>${expense.amount}</td>
        <td>{moment(expense.date).format("MMMM Do YYYY")}</td>
        <td>
          <Button onClick={() => setIsShowing(true)} size="small">
            Edit
          </Button>
          <Button variant="danger" onClick={handleDelete} size="small">
            Delete
          </Button>
        </td>
      </tr>

      {/* Modal Section */}
      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <h3 className="text-muted">Edit Expense</h3>
        </Modal.Header>

        <Modal.Body>
          <FormGroup className="mb-3" controlId="formBasicName">
            <FormLabel>Name</FormLabel>
            <FormControl
              type="text"
              placeholder="Name"
              onSubmit={handleSubmit}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormLabel>Amount</FormLabel>
            <FormControl
              type="number"
              placeholder="Amount"
              onSubmit={handleSubmit}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Category</FormLabel>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option>Select category</option>
              <option value="Food and Drink">Food and Drink</option>
              <option value="Accommodation">Accommodation</option>
              <option value="Transportation">Transportation</option>
              <option value="Housing and Rent">Housing and Rent</option>
              <option value=" Miscellaneous"> Miscellaneous</option>
            </Form.Select>
          </FormGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsShowing(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Expense;
