import { combineReducers } from 'redux';
import budgetReducer from '../redux/reducers/budgetReducer';
import expenseReducer from '../redux/reducers/expenseReducer';

export default combineReducers({
  budget: budgetReducer,
  expense: expenseReducer,
});
