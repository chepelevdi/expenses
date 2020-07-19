import React from 'react';
import { Expenses, Fetcher } from './stores';

export const storesContext = React.createContext({
  expensesStore: Expenses,
  fetch: Fetcher,
});
