import React from "react";
import { useSelector } from "react-redux";
import Expense from "./Expense";

const Expenselist = (props) => {
  //   const notes = useSelector((state) => {
  //     return state.notes;
  //   });

  return (
    <div>
      <h1 className="text-center">Note list</h1>
      {/* {notes.map((note, index) => {
        return <Expense key={note.id} note={note} />;
      })} */}
    </div>
  );
};

export default Expenselist;
