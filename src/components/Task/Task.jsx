import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { BsBookmarkCheck } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  useTaskCompleted,
  useTaskImportant,
  useTasks,
  useUpdateTask,
} from "../../hooks/tasks";
import Button from "../Button/Button";
import styles from "./Task.module.scss";
import UpdateInput from "../UpdateInput/UpdateInput";

const Task = ({ id, task, handleDelete }) => {
  const { user } = useContext(UserContext);
  const { username } = user;
  const { data, refetch } = useTasks();
  const { mutateAsync: updateTaskImportant } = useTaskImportant();
  const { mutateAsync: updateTaskCompleted } = useTaskCompleted();
  const { mutateAsync: updateTask } = useUpdateTask();
  const [isUpdating, setIsUpdating] = useState(false);
  const [newValue, setNewValue] = useState(task);

  const tasks = data ? data.filter((task) => task.username === username) : [];

  const handleUpdate = async (id) => {
    const taskImportant = tasks.find((task) => task.id === id);
    let taskToUpdate;
    if (taskImportant.important) {
      taskToUpdate = {
        id: id,
        newValue: newValue,
        username: username,
        important: taskImportant.important,
      };
    } else {
      taskToUpdate = {
        id: id,
        newValue: newValue,
        username: username,
      };
    }
    try {
      await updateTask(taskToUpdate);
      setIsUpdating(false);
      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleImportant = async (id) => {
    try {
      await updateTaskImportant({ id, task, username });
      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCompleted = async (id) => {
    try {
      await updateTaskCompleted({ id, task, username });
      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      {isUpdating ? (
        <UpdateInput
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          onClick={() => handleUpdate(id)}
        />
      ) : (
        <h2 className={styles.container__heading}>{task}</h2>
      )}
      <div className={styles.container__buttons}>
        <Button variant="secondary" onClick={handleDelete}>
          <AiOutlineDelete style={{ fill: "#DD4242" }} />
        </Button>
        <Button variant="secondary" onClick={() => handleImportant(id)}>
          <BsBookmarkCheck style={{ fill: "#3790bf" }} />
        </Button>
        <Button variant="secondary" onClick={() => setIsUpdating(true)}>
          <FiEdit />
        </Button>
        <Button variant="secondary" onClick={() => handleCompleted(id)}>
          <AiOutlineCheckCircle style={{ fill: "#12ac0d" }} />
        </Button>
      </div>
    </div>
  );
};

export default Task;
