import { useQuery, useMutation } from "react-query";
import { createTask, deleteTask, getTasks, updateTask } from "../api/task";

const TASKS = "TASKS";

export const useTasks = () => {
  return useQuery(TASKS, getTasks);
};

export const useCreateTask = () => {
  return useMutation(createTask);
};

export const useUpdateTask = () => {
  return useMutation(updateTask);
};

export const useDeleteTask = () => {
  return useMutation(deleteTask);
};
