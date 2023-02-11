import { useState } from "react";
import { useContext } from "react";
import { deleteTask } from "../../api/task";
import Task from "../../components/Task/Task";
import TaskInput from "../../components/TaskInput/TaskInput";
import { TaskContext } from "../../contexts/TaskContext";

const Home = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleDelete = (id) => {
    deleteTask(id);
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
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

export default Home;
