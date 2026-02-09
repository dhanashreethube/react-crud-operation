import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Read from "./pages/Read";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
