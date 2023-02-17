import CompletedTasks from "../CompletedTasks/CompletedTasks";
import GeneralTasks from "../GeneralTasks/GeneralTasks";
import ImportantTasks from "../ImportantTasks/ImportantTasks";
import styles from "./TasksListHorizontal.module.scss";

const TasksListHorizontal = () => {
  return (
    <div className={styles.tasks}>
      <div className={styles.tasks__block}>
        <h2 className={styles.tasks__heading}>To-Do</h2>
        <GeneralTasks />
      </div>
      <div className={styles.tasks__block}>
        <h2 className={styles.tasks__heading}>Important</h2>
        <ImportantTasks />
      </div>
      <div className={styles.tasks__block}>
        <h2 className={styles.tasks__heading}>Completed</h2>
        <CompletedTasks />
      </div>
    </div>
  );
};

export default TasksListHorizontal;
