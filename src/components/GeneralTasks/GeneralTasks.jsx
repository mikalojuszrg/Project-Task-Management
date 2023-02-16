import { useDeleteTask, useTasks } from "../../hooks/tasks";
import { getGeneralTasks } from "../../utils/generalTasks";
import Task from "../Task/Task";
import styles from "./GeneralTasks.module.scss";

const GeneralTasks = () => {
  const { refetch } = useTasks();
  const { mutateAsync: deleteTask } = useDeleteTask();

  const handleDelete = async (id) => {
    await deleteTask(id);
    await refetch();
  };

  return (
    <div className={styles.tasks__items}>
      {getGeneralTasks.map((task) => (
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
