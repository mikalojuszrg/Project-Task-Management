import { useContext } from "react";
import { deleteTask } from "../../api/task";
import Task from "../../components/Task/Task";
import TaskInput from "../../components/TaskInput/TaskInput";
import { TaskContext } from "../../contexts/TaskContext";
import { UserContext } from "../../contexts/UserContext";

const Tasks = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { user } = useContext(UserContext);
  const { name } = user;

  const handleDelete = (id) => {
    deleteTask(id);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
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
        />
      ))}
    </div>
  );
};

export default Tasks;
