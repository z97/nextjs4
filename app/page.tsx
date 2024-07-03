"use client";

import React from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import useTodoStore from '../store/useTodoStore';

const HomePage: React.FC = () => {
  const { todos, addTodo, deleteTodo } = useTodoStore();

  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default HomePage;
