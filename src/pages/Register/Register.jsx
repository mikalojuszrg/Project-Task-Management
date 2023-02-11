import { Formik, Form } from "formik";
import * as Yup from "yup";
import { createUser } from "../../api/user";
import FormikInput from "../../components/FormikInput/FormikInput";
import { registrationInputs } from "../../consts/registrationInputs";

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
  const handleSubmit = (values, { resetForm }) => {
    const { confirmPassword, ...userInfo } = values;
    createUser(userInfo);
    resetForm();
  };

  return (
    <div>
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
            <h1>Register</h1>
            {registrationInputs.map((input) => (
              <FormikInput
                key={input.name}
                type={input.type}
                name={input.name}
                label={input.label}
              />
            ))}
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
