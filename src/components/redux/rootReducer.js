import { combineReducers } from 'redux';
import budgetReducer from '../redux/Budget/budgetReducer';
import expenseReducer from '../redux/Expense/expenseReducer';

export default combineReducers({
  budget: budgetReducer,
  expense: expenseReducer,
});
