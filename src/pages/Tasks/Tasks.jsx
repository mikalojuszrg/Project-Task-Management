import { useContext } from "react";
import Task from "../../components/Task/Task";
import TaskInput from "../../components/TaskInput/TaskInput";
import { UserContext } from "../../contexts/UserContext";
import { useDeleteTask, useTasks } from "../../hooks/tasks";
import { getGeneralTasks } from "../../utils/generalTasks";
import { getImportantTasks } from "../../utils/importantTasks";
import styles from "./Tasks.module.scss";

const Tasks = () => {
  const { user } = useContext(UserContext);
  const { name, username } = user;
  const { mutateAsync: deleteTask } = useDeleteTask();
  const { data, refetch } = useTasks();
  const tasks = data ? data.filter((task) => task.username === username) : [];

  const importantTasks = getImportantTasks(tasks);
  const generalTasks = getGeneralTasks(tasks);

  const handleDelete = async (id) => {
    await deleteTask(id);
    await refetch();
  };
  return (
    <section className={styles.container}>
      <div className={styles.container__newTask}>
        <h2 className={styles.container__welcome}>Welcome, {name}!</h2>
        <TaskInput />
      </div>
      <div className={styles.tasks}>
        <div>
          {generalTasks.map((task) => (
            <Task
              key={task.id}
              task={task.task}
              id={task.id}
              handleDelete={() => handleDelete(task.id)}
            />
          ))}
        </div>
        <div>
          {importantTasks.map((task) => (
            <Task
              key={task.id}
              task={task.task}
              id={task.id}
              handleDelete={() => handleDelete(task.id)}
            />
          ))}
        </div>
        <div>Completed</div>
      </div>
    </section>
  );
};

export default Tasks;
