import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landingpage";
import About from "./Pages/Aboutpage";
import Wolu from "./Pages/Woluclass";
import Login from "./Pages/WoluLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Wolu" element={<Wolu />}></Route>
        <Route path="/LoginWolu" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
