const getExpenses = state => state.expense;

const getBudget = state => state.budget;

const calculateTotalExpenses = state => {
  const expenses = getExpenses(state);
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = state => {
  const budget = getBudget(state);
  const expenses = calculateTotalExpenses(state);
  return budget - expenses;
};

export default {
  getExpenses,
  calculateTotalExpenses,
  calculateBalance,
};
