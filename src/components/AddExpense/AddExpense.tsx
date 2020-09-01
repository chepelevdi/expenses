import React from 'react';
import { useStores } from '../../hooks';
import { loaderCreatingExpense } from '../../stores';
import { observer } from 'mobx-react-lite';
import { ExpenseType } from '../../stores';
import FormConstructor from '@ReusableComponents/FormConstructor';

const AddExpense = observer(() => {
  const {
    expensesStore: { addExpense },
    fetch: { getLoaders },
  } = useStores();

  return (
    <div>
      {getLoaders(loaderCreatingExpense) ? (
        <div>loading</div>
      ) : (
        <FormConstructor<ExpenseType>
          onSubmitProp={addExpense}
          submitButtonText="Add the expense"
          fields={[
            {
              name: 'name',
              label: 'name',
            },
            {
              name: 'description',
              label: 'description',
            },
            {
              name: 'category',
              label: 'category',
            },
            {
              name: 'date',
              label: 'date',
            },
          ]}
        />
      )}
    </div>
  );
});

export default AddExpense;
