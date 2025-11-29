import { Route, Routes } from "react-router-dom";
import Counter from "./Counter/Counter";
import RecipeApp from "./RecipieApp/RecipeApp";
import TodoList from "./Todolist/TodoList";
import QuizLayout from "./QuizApp/QuizLayout";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/intro" element={<Counter />} />
        <Route path="/recipe" element={<RecipeApp />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/quiz" element={<QuizLayout />} />
      </Routes>
    </div>
  );
};

export default App;
