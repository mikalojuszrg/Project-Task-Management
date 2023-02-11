import { useContext } from "react";
import Task from "../../components/Task/Task";
import TaskInput from "../../components/TaskInput/TaskInput";
import { TaskContext } from "../../contexts/TaskContext";

const Home = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <TaskInput />
      {tasks.map((task) => (
        <Task task={task.task} />
      ))}
    </div>
  );
};

export default Home;
