import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="conatiner">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/projects"} element={<Projects />} />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
