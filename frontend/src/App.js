import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<h1>Login page</h1>} />
        <Route path="/dashboard" element={<h1>Dashboard page</h1>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
