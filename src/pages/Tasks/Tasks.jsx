import { useContext } from "react";
import Task from "../../components/Task/Task";
import TaskInput from "../../components/TaskInput/TaskInput";
import { UserContext } from "../../contexts/UserContext";
import { useDeleteTask, useTasks, useUpdateTask } from "../../hooks/tasks";

const Tasks = () => {
  const { user } = useContext(UserContext);
  const { name, username } = user;
  const { mutateAsync: deleteTask } = useDeleteTask();
  const { mutateAsync: updateTask } = useUpdateTask();
  const { data, refetch } = useTasks();
  const tasks = data ? data.filter((task) => task.username === username) : [];

  const handleDelete = async (id) => {
    await deleteTask(id);
    await refetch();
  };
  const handleUpdate = async (id, newValue) => {
    console.log(id);
    console.log(newValue);
    console.log(username);
    try {
      await updateTask(id, newValue, username);
      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <TaskInput />
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task.task}
          id={task.id}
          handleDelete={() => handleDelete(task.id)}
          handleUpdate={() => handleUpdate(task.id, task.task)}
        />
      ))}
    </div>
  );
};

export default Tasks;
