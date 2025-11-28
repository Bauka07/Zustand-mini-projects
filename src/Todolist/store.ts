import { create } from "zustand";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  updateTodo: (id: number, updates: Partial<Todo>) => void;
  toggleTodo: (id: number) => void;
}

interface UIStore {
  inputValue: string;
  setInputValue: (value: string) => void;
  editingId: number | null;
  setEditingId: (id: number | null) => void;
  editingValue: string;
  setEditingValue: (value: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
  editingId: null,
  setEditingId: (id) => set({ editingId: id }),
  editingValue: "",
  setEditingValue: (value) => set({ editingValue: value }),
}));

export const useStore = create<TodoStore>((set) => ({
  todos: [],

  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  updateTodo: (id, updates) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...updates } : todo
      ),
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
}));
