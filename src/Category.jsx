import { useState } from "react";
import carsJson from "./assets/cars.json";
import "./App.scss";

function Category() {
  const [cars, setCars] = useState(carsJson);

  const allCategory = ["All", ...new Set(carsJson.map((car) => car.category))];
  console.log(allCategory);
  const [buttons, setButtons] = useState(allCategory);

  const filterCars = (button) => {
    if (button === "All") {
      setCars(carsJson);
      return;
    }
    const filteredCars = carsJson.filter((car) => car.category === button);
    setCars(filteredCars);
  };

  return (
    <div className="Cars">
      <h2>Selected Cars JS</h2>
      <div className="category">
        {buttons.map((category, i) => (
          <button className="btn" type="button" onClick={() => filterCars(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="cars">
        {cars.map((car) => (
          <div key={car.id} className="car">
            <div className="name">{car.name}</div>
            <div className="name">{car.year}</div>
            <div className="name">{car.category}</div>
            <img src={car.url} alt={car.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
