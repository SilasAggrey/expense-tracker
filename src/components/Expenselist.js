import React from "react";
import { useSelector } from "react-redux";
import Expense from "./Expense";

const Expenselist = (props) => {
  const expenses = useSelector((state) => state.expenses);

  const total = expenses.reduce((prev, cur) => prev + cur.amount, 0);

  return (
    <div>
      <h1>Expenses</h1>
      <h4>Total Expenses: {total}</h4>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <Expense key={expense.id} expense={expense} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Expenselist;
