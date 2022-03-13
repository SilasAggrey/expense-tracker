import React from "react";
import { useSelector } from "react-redux";
import Expense from "./Expense";

const Expenselist = (props) => {
  const expenses = useSelector((state) => {
    return state.expenses;
  });

  return (
    <div>
      <h1 className="text-center">Expenses</h1>
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
