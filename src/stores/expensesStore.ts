import { observable, action } from 'mobx';
import { Fetcher } from './fetcher';
import { creatingExpense } from './loadingTypes';
import api from '@Helpers/api';

export type ExpenseType = {
  _id?: string;
  name: string;
  category: string;
  description: string;
  date: string;
};

export class ExpensesStore {
  @observable films: ExpenseType[] = [];

  @action.bound
  async addExpense({
    name,
    description,
    category,
    date,
  }: ExpenseType): Promise<void> {
    Fetcher.loaderStart(creatingExpense);

    await api<ExpenseType>({
      endpoint: 'expenses',
      method: 'POST',
      body: {
        name,
        description,
        category,
        date,
      },
    });

    Fetcher.loaderSuccess(creatingExpense);
  }
}

export const Expenses = new ExpensesStore();
