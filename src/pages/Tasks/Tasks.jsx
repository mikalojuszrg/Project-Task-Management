import { useContext, useEffect, useState } from "react";
import TaskInput from "../../components/TaskInput/TaskInput";
import { UserContext } from "../../contexts/UserContext";
import styles from "./Tasks.module.scss";
import TasksListHorizontal from "../../components/TasksListHorizontal/TasksListHorizontal";
import TasksListVertical from "../../components/TasksListVertical/TasksListVertical";

const Tasks = () => {
  const { user } = useContext(UserContext);
  const { name } = user;

  const [screenChange, setScreenChange] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 768) {
        setScreenChange(false);
      } else {
        setScreenChange(true);
      }
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [screenChange]);

  return (
    <section className={styles.container}>
      <div className={styles.container__newTask}>
        <h2 className={styles.container__welcome}>Welcome, {name}!</h2>
        <TaskInput />
      </div>
      {screenChange ? <TasksListHorizontal /> : <TasksListVertical />}
    </section>
  );
};

export default Tasks;
