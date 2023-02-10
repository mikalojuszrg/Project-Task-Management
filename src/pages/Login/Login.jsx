import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "../../components/FormikInput/FormikInput";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const handleSubmit = (values) => {
    console.log(values);
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
          <Form>
            <h1>Login</h1>
            <FormikInput name="username" placeholder="Username" />
            <FormikInput
              type="password"
              name="password"
              placeholder="Password"
            />
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
