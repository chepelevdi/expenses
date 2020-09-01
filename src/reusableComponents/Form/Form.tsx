import React from 'react';
import { useForm, OnSubmit } from 'react-hook-form';

interface FormFieldInt {
  type?: string;
  name: string;
  label: string;
}

interface FormInt<T> {
  onSubmitProp: (data: T) => {};
  fields: FormFieldInt[];
  submitButtonText: string;
}

const Form = <T extends {}>({
  onSubmitProp,
  fields,
  submitButtonText,
}: FormInt<T>): any => {
  const { register, handleSubmit, errors } = useForm<T>();

  const onFormSubmit: OnSubmit<T> = (data) => {
    onSubmitProp(data);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      {fields.map(({ type, name, label }) => (
        <>
          <input type={type || 'text'} name={name} id={name} ref={register} />
          {errors[name] && <div>{errors[name].message}</div>}
          {label && <label htmlFor={name}>{label}</label>}
        </>
      ))}
      <button type="submit">{submitButtonText}</button>
    </form>
  );
};

export default Form;
