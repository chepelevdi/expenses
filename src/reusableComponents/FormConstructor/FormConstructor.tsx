import React, { Fragment } from 'react';
import { useForm, OnSubmit } from 'react-hook-form';

interface FormConstructorFieldInt {
  type?: string;
  name: string;
  label: string;
}

interface FormConstructorInt<T> {
  onSubmitProp: (data: T) => {};
  fields: FormConstructorFieldInt[];
  submitButtonText: string;
}

const FormConstructor = <T extends {}>({
  onSubmitProp,
  fields,
  submitButtonText,
}: FormConstructorInt<T>): JSX.Element => {
  const { register, handleSubmit, errors } = useForm<T>();

  const onFormSubmit: OnSubmit<T> = (data) => {
    onSubmitProp(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {fields.map(({ type, name, label }) => (
        <Fragment key={name}>
          <input type={type || 'text'} name={name} id={name} ref={register} />
          {errors[name] && <div>{errors[name].message}</div>}
          {label && <label htmlFor={name}>{label}</label>}
        </Fragment>
      ))}
      <button type="submit">{submitButtonText}</button>
    </form>
  );
};

export default FormConstructor;
