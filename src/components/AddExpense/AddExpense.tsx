import React from 'react';
import { useStores } from '../../hooks';
import { creatingExpense } from '../../stores';
import { observer } from 'mobx-react-lite';
import { useForm, OnSubmit } from 'react-hook-form';
import { ExpenseType } from '../../stores/expensesStore';

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
      {getLoaders(creatingExpense) ? (
        <div>loading</div>
      ) : (
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <input type="text" name="title" id="title" ref={register} />
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
