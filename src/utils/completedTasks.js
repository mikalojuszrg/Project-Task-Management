export const getCompletedTasks = (tasks) => {
  const completedTasks = tasks.filter((task) => task.completed);
  return completedTasks;
};
