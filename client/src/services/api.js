import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const signIn = async data => {
  const response = await api.post('/authentication/sign-in', data);
  const body = response.data;
  const user = body.user;
  return user;
};

export const signUp = async data => {
  const response = await api.post('/authentication/sign-up', data);
  const body = response.data;
  const user = body.user;
  return user;
};

export const signOut = async () => {
  await api.post('/authentication/sign-out');
};
