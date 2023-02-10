import { Field, ErrorMessage } from "formik";
import Input from "../Input/Input";

const FormikInput = ({ label, ...props }) => {
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <Field as={Input} {...props} />
      <ErrorMessage component="div" {...props} />
    </div>
  );
};

export default FormikInput;
