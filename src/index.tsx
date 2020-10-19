import React from 'react';
import ReactDOM from 'react-dom';
import AddExpense from '@Components/AddExpense';
import ExpensesList from '@Components/ExpensesList';

import 'mobx-react-lite/batchingForReactDom';

const Counter: React.FC = () => {
  return (
    <>
      <AddExpense />
      <ExpensesList />
    </>
  );
};

ReactDOM.render(<Counter />, document.getElementById('root'));
