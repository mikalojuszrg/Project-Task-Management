import axios from "axios";

const USERS_API_URL = "https://testapi.io/api/mikalojuszrg/resource/users";

export const fetchUsers = async () => {
  const response = await axios.get(USERS_API_URL);
  return response.data.data;
};

export const createUser = async (user) => {
  const response = await axios.post(USERS_API_URL, user);
  return response.data;
};

export const loginUser = async (loginUser) => {
  const users = await fetchUsers();
  return new Promise((resolve, reject) => {
    const { username, password } = loginUser;
    const userChecker = (u) =>
      u.username === username && u.password === password;
    const existingUser = users.find(userChecker);
    existingUser ? resolve(existingUser) : reject("Invalid");
  });
};
