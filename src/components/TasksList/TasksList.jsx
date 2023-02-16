import { useDeleteTask, useTasks } from "../../hooks/tasks";
import Task from "../Task/Task";
import styles from "./TasksList.module.scss";

const TasksList = (tasks) => {
  const { mutateAsync: deleteTask } = useDeleteTask();
  const { refetch } = useTasks();

  const handleDelete = async (id) => {
    await deleteTask(id);
    await refetch();
  };

  return (
    <div>
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

export default TasksList;
