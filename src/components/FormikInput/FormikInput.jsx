import { Field, ErrorMessage } from "formik";
import Input from "../Input/Input";
import styles from "./FormikInput.module.scss";

const FormikInput = ({ label, ...props }) => {
  return (
    <div className={styles.input}>
      <label className={styles.input__label} htmlFor={props.name}>
        {label}
      </label>
      <Field className={styles.input__field} as={Input} {...props} />
      <div>
        <ErrorMessage
          className={styles.input__error}
          component="div"
          {...props}
        />
      </div>
    </div>
  );
};

export default FormikInput;
