import axios from "axios";

const TASKS_API_URL = "https://testapi.io/api/mikalojuszrg/resource/tasks";

export const getTasks = async () => {
  const response = await axios.get(TASKS_API_URL);
  return response.data.data;
};

export const createTask = async (task) => {
  const response = await axios.post(TASKS_API_URL, task);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${TASKS_API_URL}/${id}`);
  return response.data;
};
