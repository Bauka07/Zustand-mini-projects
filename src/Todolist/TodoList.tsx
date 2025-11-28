import { useStore, useUIStore } from "../Todolist/store.ts";

const TodoList = () => {
  const { addTodo, removeTodo, updateTodo, toggleTodo, todos } = useStore();
  const {
    inputValue,
    setInputValue,
    editingId,
    setEditingId,
    editingValue,
    setEditingValue,
  } = useUIStore();

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;

    addTodo({
      id: Date.now(),
      text: inputValue,
      completed: false,
    });

    setInputValue("");
  };

  const handleStartEditing = (todo) => {
    setEditingId(todo.id);
    setEditingValue(todo.text);
  };

  const handleUpdateTodo = () => {
    if (!editingValue.trim()) return;

    updateTodo(editingId!, { text: editingValue });

    setEditingId(null);
    setEditingValue("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Todo List
        </h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-grow px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li key={todo.id} className="bg-gray-50 p-3 rounded-lg shadow-sm">
              {editingId === todo.id ? (
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={editingValue}
                    onChange={(e) => setEditingValue(e.target.value)}
                    className="flex-grow px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                  <button
                    onClick={handleUpdateTodo}
                    className="bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditingId(null);
                      setEditingValue("");
                    }}
                    className="bg-gray-400 text-white px-3 py-2 rounded-lg hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="h-5 w-5"
                    />
                    <span
                      className={
                        todo.completed
                          ? "line-through text-gray-400"
                          : "text-gray-700"
                      }
                    >
                      {todo.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      className="text-orange-500 hover:text-orange-700"
                      onClick={() => handleStartEditing(todo)}
                    >
                      Update
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
