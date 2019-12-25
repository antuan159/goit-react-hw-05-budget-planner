import shortid from 'shortid';
import expenseTypes from '../types/expenseTypes';

const add = ({ name, amount }) => {
  return {
    type: expenseTypes.ADD_EXPENSE,
    payload: {
      expense: {
        id: shortid.generate(),
        name,
        amount,
      },
    },
  };
};

const remove = id => {
  return {
    type: expenseTypes.REMOVE_EXPENSE,
    payload: {
      id,
    },
  };
};

export default {
  add,
  remove,
};
