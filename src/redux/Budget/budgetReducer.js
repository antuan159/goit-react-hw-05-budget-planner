import budgetTypes from '../Budget/budgetTypes';

const budgetReducer = (state = 0, action) => {
  switch (action.type) {
    case budgetTypes.ADD_BUDGET:
      return Number(action.payload.budget);

    default:
      return state;
  }
};

export default budgetReducer;
