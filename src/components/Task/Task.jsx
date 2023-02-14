import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useUpdateTask } from "../../hooks/tasks";

const Task = ({ id, task, handleDelete }) => {
  const { user } = useContext(UserContext);
  const { username } = user;
  const { mutateAsync: updateTask } = useUpdateTask();
  const [isUpdating, setIsUpdating] = useState(false);
  const [newValue, setNewValue] = useState(task);

  const handleUpdate = async (id) => {
    try {
      await updateTask({ id, newValue, username });
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
      <button onClick={() => setIsUpdating(true)}>Update</button>
      {isUpdating && <button onClick={() => handleUpdate(id)}>Save</button>}
    </div>
  );
};

export default Task;

// const handleUpdate = (id) => {
//   const { username } = user;
//   console.log(username);
//   const updatedTasks = tasks.map((t) => {
//     if (t.id === id) {
//       return {
//         ...t,
//         task: newValue,
//         username: username,
//       };
//     }
//     return t;
//   });
//   setTasks(updatedTasks);
//   setIsUpdating(false);
//   updateTask(id, newValue, username);
//   console.log(updatedTasks);
// };
