import axios from 'axios';

export default function axiosAuth() {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://af-api-tt2.herokuapp.com',
    headers: {
      Authorization: token,
    },
  });
}
