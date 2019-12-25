import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import expenseActions from './redux/actions/expenseActions';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';
import Values from './Values';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const calculateTotalExpenses = expenses => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateBalance = (budget, expenses) => budget - expenses;

class App extends Component {
  render() {
    const { onDeleteExpense, expenses, budget } = this.props;
    const totalExpenses = calculateTotalExpenses(expenses);
    const balance = calculateBalance(budget, totalExpenses);

    return (
      <Container>
        <BudgetForm />
        <Values budget={budget} expenses={totalExpenses} balance={balance} />
        <ExpenseForm />
        {expenses.length > 0 && (
          <ExpensesTable items={expenses} onRemove={onDeleteExpense} />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    budget: state.budget,
    expenses: state.expense,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteExpense: id => dispatch(expenseActions.remove(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
