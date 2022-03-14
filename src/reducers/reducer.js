const initialState = {
  expenses: [],
  totalExpenses: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "EDIT_EXPENSE":
      let expenses = state.expenses.map((exp) => {
        if (exp.id === action.payload.id) return action.payload;
        else return exp;
      });

      return {
        ...state,
        expenses: expenses,
      };
    case "DELETE_EXPENSE":
      let updatedExpenses = state.expenses.filter(
        (exp) => exp.id !== action.payload
      );

      return {
        ...state,
        expenses: updatedExpenses,
      };

    default:
      return state;
  }
};

export default reducer;
