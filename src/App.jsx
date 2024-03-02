import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landingpage";
import About from "./Pages/Aboutpage";
import Wolu from "./Pages/Woluclass";
import Login from "./Pages/WoluLogin";
import Teacher from "./Pages/Teacherpage";
import Student from "./Pages/Studentpage";
import Classdetail from "./Pages/Detailclasspage";
import DetailTask from "./Pages/Detailtask";
import Poinpageteacher from "./Pages/Point";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Wolu" element={<Wolu />}></Route>
        <Route path="/LoginWolu" element={<Login />}></Route>
        <Route path="/TeacherPage" element={<Teacher />}></Route>
        <Route path="/StudentPage" element={<Student />}></Route>
        <Route path="/Yourclass" element={<Classdetail />}></Route>
        <Route path="/Detailtask" element={<DetailTask />}></Route>
        <Route path="/Point" element={<Poinpageteacher />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
