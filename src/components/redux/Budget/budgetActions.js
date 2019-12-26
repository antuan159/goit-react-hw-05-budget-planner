import budgetTypes from '../Budget/budgetTypes';

const add = budget => ({
  type: budgetTypes.ADD_BUDGET,
  payload: { budget },
});

export default {
  add,
};
