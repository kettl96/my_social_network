import React from "react";
import styles from "./FormsControls.module.css"
import { Field, WrappedFieldProps } from 'redux-form';
import { FieldValidatorType } from "../../../utils/validators";

export const Textarea: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className= { styles.formControl + " " + (hasError ? styles.error : "") } >
    <div>
    <textarea { ...input } {...props } />
      </div>
  {
    hasError && <span>{ meta.error } </span>}
      </div>
  )
}

export const Input: React.FC<WrappedFieldProps> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className= { styles.formControl + " " + (hasError ? styles.error : "") } >
    <div>
    <input { ...input } {...props } />
      </div>
  {
    hasError && <span>{ meta.error } </span>}
      </div>
  )
}

export const createField =
  (placeholder: string | undefined,
    name: string,
    validators: Array<FieldValidatorType>,
    component: string | React.Component | React.FC,
    props = {}, text = ''
  ) => (
    <div>
      <Field placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      /> {text}
    </div>
  )