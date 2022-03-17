import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import Expenselist from "./components/Expenselist";
import expensetracker from "./image/expensetracker.jpg";

function App() {
  return (
    <div
      style={{
        width: "600px",
        margin: "auto",
        // backgroundImage: `url(${expensetracker})`,
      }}
    >
      <ExpenseForm />
      <Expenselist />
    </div>
  );
}

export default App;
