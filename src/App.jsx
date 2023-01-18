import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Cars } from "./Cars";
import Category from "./Category";
import { Sport } from "./Sport";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to="/">Category</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/sport">Sport</NavLink>
      </nav>
      <div className="content">
      <Routes>
        <Route path="" element={<Category />} />
        <Route path="cars" element={<Cars />} />
        <Route path="sport" element={<Sport />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
