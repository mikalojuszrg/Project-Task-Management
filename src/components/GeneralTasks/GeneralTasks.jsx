import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useDeleteTask, useTasks } from "../../hooks/tasks";
import { getGeneralTasks } from "../../utils/generalTasks";
import Task from "../Task/Task";
import styles from "./GeneralTasks.module.scss";

const GeneralTasks = () => {
  const { refetch, data } = useTasks();
  const { mutateAsync: deleteTask } = useDeleteTask();

  const { user } = useContext(UserContext);
  const { username } = user;

  const tasks = data ? data.filter((task) => task.username === username) : [];

  const generalTasks = getGeneralTasks(tasks);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await refetch();
  };

  return (
    <div className={styles.tasks__items}>
      {generalTasks.map((task) => (
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

export default GeneralTasks;
