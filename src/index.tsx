import React from 'react';
import ReactDOM from 'react-dom';
// import FilmsList from '@Components/FilmsList';
import AddExpense from '@Components/AddExpense';

import 'mobx-react-lite/batchingForReactDom';

const Counter: React.FC = () => {
  return (
    <div>
      <AddExpense />
    </div>
  );
};

ReactDOM.render(<Counter />, document.getElementById('root'));
