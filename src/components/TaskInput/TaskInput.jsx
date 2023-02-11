import { useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "../../components/FormikInput/FormikInput";
import { UserContext } from "../../contexts/UserContext";
import { createTask, getTasks } from "../../api/task";
import { TaskContext } from "../../contexts/TaskContext";

const validationSchema = Yup.object().shape({
  task: Yup.string().required("Required"),
});

const TaskInput = () => {
  const { user } = useContext(UserContext);
  const { setTasks, tasks, toggleTaskCreated } = useContext(TaskContext);

  const handleSubmit = async (values) => {
    const { username } = user;
    const createdNote = { ...values, username };
    await createTask(createdNote);

    toggleTaskCreated();
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
