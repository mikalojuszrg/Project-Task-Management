import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useTaskImportant, useTasks, useUpdateTask } from "../../hooks/tasks";

const Task = ({ id, task, handleDelete }) => {
  const { user } = useContext(UserContext);
  const { username } = user;
  const { refetch } = useTasks();
  const { mutateAsync: updateTaskImportant } = useTaskImportant();
  const { mutateAsync: updateTask } = useUpdateTask();
  const [isUpdating, setIsUpdating] = useState(false);
  const [newValue, setNewValue] = useState(task);

  const handleUpdate = async (id) => {
    try {
      await updateTask({ id, newValue, username });
      setIsUpdating(false);
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
      {isUpdating && <button onClick={() => handleUpdate(id)}>Save</button>}
    </div>
  );
};

export default Task;
