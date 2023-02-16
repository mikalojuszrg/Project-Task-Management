import { useDeleteTask, useTasks } from "../../hooks/tasks";
import { getCompletedTasks } from "../../utils/completedTasks";
import CompletedTask from "../CompletedTask/CompletedTask";
import styles from "./CompletedTasks.module.scss";

const CompletedTasks = () => {
  const { refetch } = useTasks();
  const { mutateAsync: deleteTask } = useDeleteTask();

  const handleDelete = async (id) => {
    await deleteTask(id);
    await refetch();
  };

  return (
    <div className={styles.tasks__items}>
      {getCompletedTasks.map((task) => (
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
