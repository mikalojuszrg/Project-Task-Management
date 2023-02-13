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

export const updateTask = async (id, task, username) => {
  console.log(id);
  console.log(task);
  console.log(username);
  const response = await axios.put(`${TASKS_API_URL}/${id}`, {
    task,
    username,
  });
  return response.data;
};
