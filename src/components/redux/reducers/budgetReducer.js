import budgetTypes from '../types/budgetTypes';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case budgetTypes.ADD_BUDGET:
      return action.payload.budget;

    default:
      return state;
  }
};

export default budgetReducer;
