import budgetTypes from '../types/budgetTypes';

const add = budget => ({
  type: budgetTypes.ADD_BUDGET,
  payload: { budget },
});

export default {
  add,
};
