import React from 'react';
import { storesContext } from './context';
import { ExpensesStoreInt, FetcherStoreInt } from './stores';

export const useStores = (): {
  expensesStore: ExpensesStoreInt;
  fetch: FetcherStoreInt;
} => React.useContext(storesContext);
