import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import {
  useTaskCompleted,
  useTaskImportant,
  useTasks,
  useUpdateTask,
} from "../../hooks/tasks";

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
    const taskToUpdate = {
      id: id,
      newValue: newValue,
      username: username,
      important: taskImportant.important,
    };
    console.log("handleUpdate taskToUpdate:", taskToUpdate);
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
    <div>
      {isUpdating ? (
        <input value={newValue} onChange={(e) => setNewValue(e.target.value)} />
      ) : (
        <h2>{task}</h2>
      )}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => handleImportant(id)}>Important</button>
      <button onClick={() => setIsUpdating(true)}>Update</button>
      <button onClick={() => handleCompleted(id)}>Complete</button>
      {isUpdating && <button onClick={() => handleUpdate(id)}>Save</button>}
    </div>
  );
};

export default Task;
