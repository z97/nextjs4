import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => (
  <div>
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
    ))}
  </div>
);

export default TodoList;
