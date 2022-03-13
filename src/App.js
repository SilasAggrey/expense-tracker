import React from "react";
import ExpenseForm from "./components/ExpenseForm";
import Expenselist from "./components/Expenselist";

function App() {
  return (
    <div style={{ width: "400px", margin: "auto" }}>
      <ExpenseForm />
      <Expenselist />
    </div>
  );
}

export default App;
