import React from "react";
import { useSelector } from "react-redux";
import Expense from "./Expense";

const Expenselist = (props) => {
  const expenses = useSelector((state) => state.expenses);

  return (
    <div>
      <h4>Expenses</h4>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
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
