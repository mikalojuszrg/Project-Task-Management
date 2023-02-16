import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  useTaskCompleted,
  useTaskImportant,
  useTasks,
  useUpdateTask,
} from "../../hooks/tasks";
import Button from "../Button/Button";
import styles from "./CompletedTask.module.scss";

const Task = ({ id, task, handleDelete }) => {
  const { user } = useContext(UserContext);
  const { username } = user;
  const { data, refetch } = useTasks();
  const [isUpdating, setIsUpdating] = useState(false);
  const [newValue, setNewValue] = useState(task);

  const tasks = data ? data.filter((task) => task.username === username) : [];
  return (
    <div className={styles.container}>
      {isUpdating ? (
        <input value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      ) : (
        <h2>{task}</h2>
      )}
      <div className={styles.container__buttons}>
        <Button variant="secondary" onClick={handleDelete}>
          <AiOutlineDelete style={{ fill: "#DD4242" }} />
        </Button>
      </div>
    </div>
  );
};

export default Task;
