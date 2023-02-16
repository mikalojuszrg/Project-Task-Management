import { useDeleteTask, useTasks } from "../../hooks/tasks";
import { getImportantTasks } from "../../utils/importantTasks";
import Task from "../Task/Task";
import styles from "./ImportantTasks.module.scss";

const ImportantTasks = () => {
  const { refetch } = useTasks();
  const { mutateAsync: deleteTask } = useDeleteTask();

  const handleDelete = async (id) => {
    await deleteTask(id);
    await refetch();
  };

  return (
    <div className={styles.tasks__items}>
      {getImportantTasks.map((task) => (
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

export default ImportantTasks;
