import React from 'react';
import AddExpense from '@Components/AddExpense';
import ExpensesList from '@Components/ExpensesList';
import { Link, Route, Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Link to="/add-expense">Add Expense</Link>
      <Link to="/expenses">Expenses</Link>
      <Switch>
        <Route path="/add-expense" component={AddExpense} />
        <Route path="/expenses" component={ExpensesList} />
      </Switch>
    </>
  );
};

export default App;
