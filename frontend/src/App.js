import Nav from "./Components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
