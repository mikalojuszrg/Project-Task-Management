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
  return useMutation((params) =>
    updateTask(params.id, params.newValue, params.username)
  );
};

export const useDeleteTask = () => {
  return useMutation(deleteTask);
};
