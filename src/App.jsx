import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import ToDoList from "./components/ToDoList";
import Home from "./components/SinglePages/Home";
import About from "./components/SinglePages/About";
import Project from "./components/SinglePages/Project";
import Card from "./components/SinglePages/Card";
import MovieList from "./components/Movies/MovieList";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/MovieList" element={<MovieList />} />

      </Routes>
    </div>
  );
}
export default App;
