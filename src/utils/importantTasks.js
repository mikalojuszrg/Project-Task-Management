export const getImportantTasks = (tasks) => {
  const importantTasks = tasks.filter((task) => task.important);
  return importantTasks;
};
