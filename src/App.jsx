import { NavLink, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Cars } from "./Cars";
import Category from "./Category";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavLink to="/">Category</NavLink>
        <NavLink to="/cars">Cars</NavLink>
      </div>
      <Routes>
        <Route path="" element={<Category />} />
        <Route path="cars" element={<Cars />} />
      </Routes>
    </div>
  );
}

export default App;
