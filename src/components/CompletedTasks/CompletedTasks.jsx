import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useDeleteTask, useTasks } from "../../hooks/tasks";
import { getCompletedTasks } from "../../utils/completedTasks";
import CompletedTask from "../CompletedTask/CompletedTask";
import styles from "./CompletedTasks.module.scss";

const CompletedTasks = () => {
  const { refetch, data } = useTasks();
  const { mutateAsync: deleteTask } = useDeleteTask();
  const { user } = useContext(UserContext);
  const { username } = user;

  const tasks = data ? data.filter((task) => task.username === username) : [];

  const completedTasks = getCompletedTasks(tasks);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await refetch();
  };

  return (
    <div className={styles.tasks__items}>
      {completedTasks.map((task) => (
        <CompletedTask
          key={task.id}
          task={task.task}
          id={task.id}
          handleDelete={() => handleDelete(task.id)}
        />
      ))}
    </div>
  );
};

export default CompletedTasks;
