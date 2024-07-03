import create from 'zustand';

interface TodoState {
  todos: string[];
  addTodo: (todo: string) => void;
  deleteTodo: (index: number) => void;
}

const useTodoStore = create<TodoState>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (index) => set((state) => ({
    todos: state.todos.filter((_, i) => i !== index),
  })),
}));

export default useTodoStore;
