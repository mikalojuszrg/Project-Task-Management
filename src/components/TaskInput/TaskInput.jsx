import { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "../../components/FormikInput/FormikInput";
import { UserContext } from "../../contexts/UserContext";
import { createTask } from "../../api/task";
import { TaskContext } from "../../contexts/TaskContext";

const validationSchema = Yup.object().shape({
  task: Yup.string().required("Required"),
});

const TaskInput = () => {
  const { user } = useContext(UserContext);
  const { setTasks, tasks } = useContext(TaskContext);
  console.log(user);

  const handleSubmit = (values) => {
    const { username } = user;
    const createdNote = { ...values, username };
    createTask(createdNote);
    setTasks([values, ...tasks]);
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
          <Form>
            <h1>Create a new task</h1>
            <FormikInput name="task" />
            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskInput;
