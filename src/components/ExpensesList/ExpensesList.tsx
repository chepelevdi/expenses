import React, { useEffect } from 'react';
import TableConstructor from '@ReusableComponents/TableConstructor';
import { useStores } from '../../hooks';
import { loaderFetchingExpense } from '../../stores';
import { observer } from 'mobx-react-lite';

type Align = 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined;
type CellType = string | number;
interface CellInt {
  align?: Align;
  title: CellType;
}

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
    <TableConstructor
      rows={expenses.map((el) => {
        const cells = Object.entries(el) as [string, string | number][];
        const cellsReworked = cells.reduce((prev, [key, value]) => {
          // TODO remove __v
          if (key === '_id' || key === '__v') {
            return prev;
          }

          return [...prev, { title: value }];
        }, [] as CellInt[]);

        return {
          id: el._id,
          cells: cellsReworked,
        };
      })}
      headerTitles={[
        { title: 'Name' },
        { title: 'Category' },
        { title: 'Date' },
        { title: 'Description' },
      ]}
    />
  );
});

export default ExpensesList;
