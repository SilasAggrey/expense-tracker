import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { createExpense } from "../actions/actions";
import { useDispatch } from "react-redux";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const date = new Date();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    let newExpense = {
      id: uuid(),
      title: title,
      amount: amount * 1,
      category: category,
      date: date,
    };

    dispatch(createExpense(newExpense));
  };

  return (
    <div>
      <Form className="rounded p-4 p-sm-6" onSubmit={handleSubmit}>
        <FormGroup className="mb-3" controlId="formBasicName">
          <h1>Expense Tracker</h1>
          <FormLabel>Name</FormLabel>
          <Form.Control
            type="text"
            placeholder="Name"
            onSubmit={handleSubmit}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Amount</FormLabel>
          <Form.Control
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
          >
            <option>Select category</option>
            <option value="Food and Drink">Food and Drink</option>
            <option value="Accommodation">Accommodation</option>
            <option value="Transportation">Transportation</option>
            <option value="Housing and Rent">Housing and Rent</option>
            <option value=" Miscellaneous"> Miscellaneous</option>
          </Form.Select>
        </FormGroup>

        <Button type="submit" className="w-100 mt-2 btn btn-primary">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ExpenseForm;
