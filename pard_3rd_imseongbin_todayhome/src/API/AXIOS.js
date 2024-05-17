import axios from 'axios'

export const getUserData = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3001/users/${id}`);
    return response.data;
  } catch(error) {
    console.error(error);
  }
};

export const patchUserData = async(data, id) => {
  try {
    const response = await axios.patch(`http://localhost:3001/users/${id}`, data);
    return response.data;
  } catch(error) {
    console.error(error);
  }
};