import { Route, Routes } from "react-router-dom";
import Example from "./introduction/Example";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/intro" element={<Example />} />
      </Routes>
    </div>
  );
};

export default App;
