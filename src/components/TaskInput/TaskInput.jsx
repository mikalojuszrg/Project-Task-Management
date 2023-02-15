import { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { AiOutlineArrowDown } from "react-icons/ai";
import FormikInput from "../../components/FormikInput/FormikInput";
import { UserContext } from "../../contexts/UserContext";
import { useCreateTask, useTasks } from "../../hooks/tasks";
import Button from "../Button/Button";
import styles from "./TaskInput.module.scss";

const validationSchema = Yup.object().shape({
  task: Yup.string().required("Required"),
});

const TaskInput = () => {
  const { user } = useContext(UserContext);
  const { mutateAsync: createTask } = useCreateTask();
  const { refetch } = useTasks();

  const handleSubmit = async (values, { resetForm }) => {
    const { username } = user;
    const createdNote = { ...values, username };
    await createTask(createdNote);
    await refetch();
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          task: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <h1>Create a new task</h1>
            <AiOutlineArrowDown className={styles.form__icon} />
            <FormikInput name="task" />
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskInput;
