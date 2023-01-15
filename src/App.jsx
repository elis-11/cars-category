import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Cars } from "./Cars";
import Category from "./Category";
import { Sport } from "./Sport";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavLink to="/">Category</NavLink>
        <NavLink to="/cars">Cars</NavLink>
        <NavLink to="/sport">Sport</NavLink>
      </div>
      <Routes>
        <Route path="" element={<Category />} />
        <Route path="cars" element={<Cars />} />
        <Route path="sport" element={<Sport />} />
      </Routes>
    </div>
  );
}

export default App;
