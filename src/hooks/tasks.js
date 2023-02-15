import { useQuery, useMutation } from "react-query";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
  updateTaskCompleted,
  updateTaskImportant,
} from "../api/task";

const TASKS = "TASKS";

export const useTasks = () => {
  return useQuery(TASKS, getTasks);
};

export const useCreateTask = () => {
  return useMutation(createTask);
};

export const useUpdateTask = () => {
  return useMutation((task) => updateTask(task));
};

export const useDeleteTask = () => {
  return useMutation(deleteTask);
};

export const useTaskImportant = () => {
  return useMutation((params) =>
    updateTaskImportant(params.id, params.task, params.username)
  );
};

export const useTaskCompleted = () => {
  return useMutation((params) =>
    updateTaskCompleted(params.id, params.task, params.username)
  );
};
