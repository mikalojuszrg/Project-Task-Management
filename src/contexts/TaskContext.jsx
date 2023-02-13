import { createContext, useState, useEffect, useContext } from "react";
import { getTasks } from "../api/task";
import { UserContext } from "./UserContext";

const TaskContext = createContext();

const NoteProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [taskCreated, setTaskCreated] = useState(false);
  const { user } = useContext(UserContext);

  const toggleTaskCreated = () => {
    setTaskCreated((prevValue) => !prevValue);
  };

  useEffect(() => {
    getTasks().then((tasksFromDb) => {
      setTasks(tasksFromDb.filter((task) => task.username === user.username));
    });
  }, [user, taskCreated]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, toggleTaskCreated }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, NoteProvider };
