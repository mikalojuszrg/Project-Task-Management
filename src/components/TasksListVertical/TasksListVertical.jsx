import { useState } from "react";
import Button from "../Button/Button";
import CompletedTasks from "../CompletedTasks/CompletedTasks";
import GeneralTasks from "../GeneralTasks/GeneralTasks";
import ImportantTasks from "../ImportantTasks/ImportantTasks";
import styles from "./TasksListVertical.module.scss";

const TasksListVertical = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [showImportant, setShowImportant] = useState(false);

  const handleCompleted = () => {
    setShowCompleted(true);
    setShowImportant(false);
  };

  const handleImportant = () => {
    setShowImportant(true);
    setShowCompleted(false);
  };

  const handleGeneral = () => {
    setShowCompleted(false);
    setShowImportant(false);
  };

  const shownTaks = () => {
    if (showCompleted) {
      return <CompletedTasks />;
    } else if (showImportant) {
      return <ImportantTasks />;
    } else {
      return <GeneralTasks />;
    }
  };

  return (
    <div>
      <Button onClick={handleGeneral}>To-Do</Button>
      <Button onClick={handleImportant}>Important</Button>
      <Button onClick={handleCompleted}>Completed</Button>
      {shownTaks()}
    </div>
  );
};

export default TasksListVertical;
