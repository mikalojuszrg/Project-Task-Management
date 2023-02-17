import { useState } from "react";
import Button from "../Button/Button";
import CompletedTasks from "../CompletedTasks/CompletedTasks";
import GeneralTasks from "../GeneralTasks/GeneralTasks";
import ImportantTasks from "../ImportantTasks/ImportantTasks";
import styles from "./TasksListVertical.module.scss";

const TasksListVertical = () => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [showImportant, setShowImportant] = useState(false);
  const [showGeneral, setShowGeneral] = useState(true);

  const handleCompleted = () => {
    setShowCompleted(true);
    setShowImportant(false);
    setShowGeneral(false);
  };

  const handleImportant = () => {
    setShowImportant(true);
    setShowCompleted(false);
    setShowGeneral(false);
  };

  const handleGeneral = () => {
    setShowCompleted(false);
    setShowImportant(false);
    setShowGeneral(true);
  };

  const shownTaks = () => {
    if (showCompleted) {
      return <CompletedTasks />;
    } else if (showImportant) {
      return <ImportantTasks />;
    } else if (showGeneral) {
      return <GeneralTasks />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__buttons}>
        <Button
          variant={showGeneral ? "generalOn" : "general"}
          onClick={handleGeneral}
        >
          To-Do
        </Button>
        <Button
          variant={showImportant ? "importantOn" : "important"}
          onClick={handleImportant}
        >
          Important
        </Button>
        <Button
          variant={showCompleted ? "completedOn" : "completed"}
          onClick={handleCompleted}
        >
          Completed
        </Button>
      </div>
      {shownTaks()}
    </div>
  );
};

export default TasksListVertical;
