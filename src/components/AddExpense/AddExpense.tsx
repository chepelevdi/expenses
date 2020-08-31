import React from 'react';
import { useStores } from '../../hooks';
import { loaderCreatingExpense } from '../../stores';
import { observer } from 'mobx-react-lite';
import { useForm, OnSubmit } from 'react-hook-form';
import { ExpenseType } from '../../stores';

const AddExpense = observer(() => {
  const {
    expensesStore: { addExpense },
    fetch: { getLoaders },
  } = useStores();

  const { register, handleSubmit, errors } = useForm<ExpenseType>();

  const onFormSubmit: OnSubmit<ExpenseType> = (data) => {
    addExpense(data);
  };

  return (
    <div>
      {getLoaders(loaderCreatingExpense) ? (
        <div>loading</div>
      ) : (
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input type="text" name="name" id="name" ref={register} />
          {errors.name && <div>{errors.name.message}</div>}
          <input
            type="text"
            name="description"
            id="description"
            ref={register}
          />
          <input type="text" name="category" id="category" ref={register} />
          <input type="text" name="date" id="date" ref={register} />
          <button type="submit">Add the expense</button>
        </form>
      )}
    </div>
  );
});

export default AddExpense;
