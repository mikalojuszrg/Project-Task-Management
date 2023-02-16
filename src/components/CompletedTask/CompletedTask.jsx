import { AiOutlineDelete } from "react-icons/ai";
import Button from "../Button/Button";
import styles from "./CompletedTask.module.scss";

const Task = ({ task, handleDelete }) => {
  return (
    <div className={styles.container}>
      <h2>{task}</h2>
      <div className={styles.container__buttons}>
        <Button variant="secondary" onClick={handleDelete}>
          <AiOutlineDelete style={{ fill: "#DD4242" }} />
        </Button>
      </div>
    </div>
  );
};

export default Task;
