import { useContext } from "react";
import { useState } from "react";
import { updateTask } from "../../api/task";
import { TaskContext } from "../../contexts/TaskContext";
import { UserContext } from "../../contexts/UserContext";
const Task = ({ id, task, handleDelete }) => {
  const { tasks, setTasks } = useContext(TaskContext);
  const { user } = useContext(UserContext);
  const [isUpdating, setIsUpdating] = useState(false);
  const [newValue, setNewValue] = useState(task);

  const handleUpdate = (id) => {
    const { username } = user;
    console.log(username);
    const updatedTasks = tasks.map((t) => {
      if (t.id === id) {
        return {
          ...t,
          task: newValue,
          username: username,
        };
      }
      return t;
    });
    setTasks(updatedTasks);
    setIsUpdating(false);
    updateTask(id, newValue, username);
    console.log(updatedTasks);
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
