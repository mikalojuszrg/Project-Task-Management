import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../../components/Button/Button";
import FormikInput from "../../components/FormikInput/FormikInput";
import { registrationInputs } from "../../consts/registrationInputs";
import { useCreateUser } from "../../hooks/user";
import { HOME_PATH } from "../../routes/const";
import styles from "./Register.module.scss";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .required("Please retype your password")
    .oneOf([Yup.ref("password")], "Your password do not match"),
});

const Register = () => {
  const navigate = useNavigate();
  const { mutateAsync: createUser } = useCreateUser();

  const handleSubmit = (values, { resetForm }) => {
    const { confirmPassword, ...userInfo } = values;
    createUser(userInfo);
    resetForm();
    navigate(HOME_PATH);
    console.log("created");
  };

  return (
    <section className={styles.container}>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <h1 className={styles.container__heading}>REGISTER</h1>
            {registrationInputs.map((input) => (
              <FormikInput
                key={input.name}
                type={input.type}
                name={input.name}
                label={input.label}
              />
            ))}
            <Button variant="primary" type="submit">
              Register
            </Button>
            <p className={styles.container__info}>
              Already have an account? <Link to={HOME_PATH}>Log in</Link>{" "}
            </p>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Register;
