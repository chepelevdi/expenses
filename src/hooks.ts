import React from 'react';
import { storesContext } from './context';
import { Expenses, Fetcher } from './stores';

export const useStores = (): {
  expensesStore: typeof Expenses;
  fetch: typeof Fetcher;
} => React.useContext(storesContext);
