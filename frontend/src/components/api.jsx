import axios from "axios";

const API_URI = "http://localhost:5000/api/todos";

export const getTodo = () => axios.get(API_URI);
export const createTodo = (todo) => axios.post(API_URI, todo);
export const updateTodo = (id, todo) => axios.put(`${API_URI}/${id}`, todo);
export const deleteTodo = (id) => axios.delete(`${API_URI}/${id}`);
