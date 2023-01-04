import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://632d221d0d7928c7d2455e19.mockapi.io/todolist/'
  });

