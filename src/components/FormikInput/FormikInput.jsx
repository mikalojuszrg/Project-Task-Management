import { Field, ErrorMessage } from "formik";
import Input from "../Input/Input";

const FormikInput = (props) => {
  return (
    <div>
      <Field as={Input} {...props} />
      <ErrorMessage component="div" {...props} />
    </div>
  );
};

export default FormikInput;
