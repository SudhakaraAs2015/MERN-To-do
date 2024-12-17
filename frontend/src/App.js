import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../src/components/TodoApp';
import TodoApp from '../src/components/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/todos" element={<TodoApp />} />
      </Routes>
    </Router>
  );
};

export default App;
