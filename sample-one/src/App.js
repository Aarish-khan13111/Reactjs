import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Singin from "./Pages/SingIn";
import Singup from "./Pages/SingUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SingIn" element={<Singin />} />
        <Route path="/SingUp" element={<Singup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
