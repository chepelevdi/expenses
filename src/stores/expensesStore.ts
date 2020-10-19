import { makeObservable, observable, action, runInAction } from 'mobx';
import { Fetcher } from './fetcher';
import { loaderCreatingExpense, loaderFetchingExpense } from './loadingTypes';
import api, { requestType } from '@Helpers/api';
import { ExpensesStoreInt, ExpenseType } from './model';

class ExpensesStore implements ExpensesStoreInt {
  expenses: ExpenseType[] = [];

  constructor() {
    makeObservable(this, {
      expenses: observable,
      addExpense: action.bound,
      getExpenses: action.bound,
    });
  }

  async addExpense({
    name,
    description,
    category,
    date,
  }: ExpenseType): Promise<void> {
    await Fetcher.loaderStart(loaderCreatingExpense);

    try {
      await api<ExpenseType>({
        endpoint: 'expenses',
        method: requestType.post,
        body: {
          name,
          description,
          category,
          date,
        },
      });
    } catch {
      // await Fetcher.loaderSuccess(loaderCreatingExpense);
    } finally {
      await Fetcher.loaderSuccess(loaderCreatingExpense);
    }
  }

  async getExpenses(): Promise<void> {
    await Fetcher.loaderStart(loaderFetchingExpense);

    try {
      const expenses = await api<ExpenseType[]>({
        endpoint: 'expenses',
        method: requestType.get,
      });
      runInAction(() => {
        this.expenses = expenses;
      });
    } catch {
      // await Fetcher.loaderSuccess(loaderFetchingExpense);
    } finally {
      await Fetcher.loaderSuccess(loaderFetchingExpense);
    }
  }
}

export const Expenses: ExpensesStoreInt = new ExpensesStore();
