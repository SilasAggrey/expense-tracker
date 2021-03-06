import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button, FormGroup, FormLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { createExpense } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import NumberFormat from "react-number-format";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("exp");
  const [date, setDate] = useState("");

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
    setCategory("");
  };

  const expenses = useSelector((state) => state.expenses);

  const totalExpenses = expenses.reduce((prev, cur) => (prev += cur.amount), 0);

  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <Form className="rounded p-4 p-sm-6" onSubmit={handleSubmit}>
        <h1>Expense Tracker</h1>
        <div>
          {/* <FormLabel>Income: 0 </FormLabel> */}
          <br />
          <NumberFormat
            displayType="text"
            value={totalExpenses}
            thousandSeparator={true}
            prefix={"Total Expense: $"}
          />
        </div>
        <br />
        <FormLabel>Name</FormLabel>
        <FormGroup className="mb-3 d-flex" controlId="formBasicName">
          <Form.Select
            style={{
              fontSize: "20px",
              width: "30%",
              border: type === "inc" ? "2px solid lightgreen" : "2px solid red",
            }}
            aria-label="Default select example"
            onChange={(e) => setType(e.target.value)}
          >
            <option value="exp">Exp</option>
            <option value="inc">Inc</option>
          </Form.Select>

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
          <NumberFormat
            style={{ width: "100%", padding: "5px 10px " }}
            placeholder="Amount"
            onValueChange={(e) => setAmount(e.value)}
            thousandSeparator={true}
            prefix={"$"}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Date</FormLabel>
          <Form.Control
            type="date"
            onSubmit={handleSubmit}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <FormLabel>Category</FormLabel>
          <Form.Select
            aria-label="Default select example"
            value={category}
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
