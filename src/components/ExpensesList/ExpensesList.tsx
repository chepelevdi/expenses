import React, { useEffect } from 'react';

import { useStores } from '../../hooks';
import { loaderFetchingExpense } from '../../stores';
import { observer } from 'mobx-react-lite';

const ExpensesList = observer(() => {
  const {
    expensesStore: { getExpenses, expenses },
    fetch: { getLoaders },
  } = useStores();

  useEffect(() => {
    getExpenses();
  }, []);

  return getLoaders(loaderFetchingExpense) ? (
    <div>loading</div>
  ) : (
    <div>
      {expenses.map((el) => (
        <ul key={el._id}>
          <li>name {el.name}</li>
          <li>category {el.category}</li>
          <li>date {el.date}</li>
          <li>description {el.description}</li>
        </ul>
      ))}
    </div>
  );
});

export default ExpensesList;
