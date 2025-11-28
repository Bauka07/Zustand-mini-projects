import { Route, Routes } from "react-router-dom";
import Counter from "./Counter/Counter";
import RecipeApp from "./RecipieApp/RecipeApp";
import TodoList from "./Todolist/TodoList";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/intro" element={<Counter />} />
        <Route path="/recipe" element={<RecipeApp />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </div>
  );
};

export default App;
