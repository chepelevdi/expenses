export type ExpenseType = {
  _id?: string;
  name: string;
  category: string;
  description: string;
  date: string;
};

export interface ExpensesStoreInt {
  addExpense: (x: ExpenseType) => Promise<void>;
  films: Array<ExpenseType>;
}

export interface FetcherStoreInt {
  loading: string[];
  loaderStart: (val: string) => void;
  loaderSuccess: (val: string) => void;
  getLoaders: (val: string) => boolean;
}
