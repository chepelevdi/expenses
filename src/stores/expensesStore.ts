import { observable, action } from 'mobx';
import { Fetcher } from './fetcher';
import { loaderCreatingExpense } from './loadingTypes';
import api, { requestType } from '@Helpers/api';
import { ExpensesStoreInt, ExpenseType } from './model';

class ExpensesStore implements ExpensesStoreInt {
  @observable films: ExpenseType[] = [];

  @action.bound
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
}

export const Expenses: ExpensesStoreInt = new ExpensesStore();
