import React from 'react';
import { connect } from 'react-redux';
import expenseActions from '../redux/Expense/expenseActions';
import expenseSelectors from '../redux/Expense/expenseSelectors';
import styled from 'styled-components';
import Button from './shared/Button';

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
  width: 100%;

  tr {
    border-bottom: 1px solid #212121;
  }

  td,
  th {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const ExpensesTable = ({ items = [], onRemove }) => (
  <>
    {items.length > 0 && (
      <Table>
        <thead>
          <tr>
            <th>Expense name</th>
            <th>Expense amount</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, name, amount }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{amount}</td>
              <td>
                <Button label="Delete" onClick={() => onRemove(id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    )}
  </>
);

const mapStateToProps = state => {
  return {
    items: expenseSelectors.getExpenses(state),
  };
};

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(expenseActions.remove(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
