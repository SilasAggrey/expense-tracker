export const createExpense = (expense) => {
  return {
    type: "CREATE_EXPENSE",
    payload: expense,
  };
};
export const editExpense = (expense) => {
  return {
    type: "EDIT_EXPENSE",
    payload: expense,
  };
};
export const deleteExpense = (expenseId) => {
  return {
    type: "DELETE_EXPENSE",
    payload: expenseId,
  };
};
