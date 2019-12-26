import React from 'react';
import { connect } from 'react-redux';
import budgetSelectors from '../redux/Budget/budgetSelectors';
import expenseSelectors from '../redux/Expense/expenseSelectors';
import styled from 'styled-components';
import Value from './Value';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budget, expenses, balance }) => (
  <Container>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

const mapStateToProps = state => {
  return {
    budget: budgetSelectors.getBudget(state),
    expenses: expenseSelectors.calculateTotalExpenses(state),
    balance: expenseSelectors.calculateBalance(state),
  };
};

export default connect(mapStateToProps)(Values);
