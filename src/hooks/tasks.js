import { useQuery, useMutation } from "react-query";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
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
  return useMutation((params) =>
    updateTask(params.id, params.newValue, params.username)
  );
};

export const useDeleteTask = () => {
  return useMutation(deleteTask);
};

export const useTaskImportant = () => {
  return useMutation((params) =>
    updateTaskImportant(params.id, params.task, params.username)
  );
};
