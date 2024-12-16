import  axios  from 'axios';

const API_URI = 'http://localhost:5000/api/todos';

const getTodo =()=>axios.get(API_URI);
const createTodo =(todo)=>axios.post(API_URI, todo);
const updateTodo=(id,todo)=>axios.put(`${API_URI}/${id}`,todo);
const deleteTodo =(id)=>axios.delete(`${API_URI}/${id}`);