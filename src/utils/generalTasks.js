export const getGeneralTasks = (tasks) => {
  const generalTasks = tasks.filter((task) => !task.important);
  return generalTasks;
};
