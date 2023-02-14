import { useContext } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { TASKS_PATH } from "../../routes/const";
import FormikInput from "../FormikInput/FormikInput";
import { UserContext } from "../../contexts/UserContext";
import { useLoginUser } from "../../hooks/user";
import styles from "./Login.module.scss";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const { setUser } = useContext(UserContext);
  const { mutateAsync: loginUser } = useLoginUser();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    loginUser(values)
      .then((response) => {
        setUser(response);
        navigate(TASKS_PATH);
      })
      .catch((error) => console.log("Failed to login", error));
  };

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <h1 className={styles.form__heading}>Login</h1>
            <FormikInput name="username" label="Username" />
            <FormikInput type="password" name="password" label="Password" />
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
