import { useState } from "react";
import carsJson from "./assets/cars.json";
import "./App.scss";

export const Cars = () => {
  const [cars, setCars] = useState(carsJson);
  const [selectedYear, setSelectedYear] = useState();
  console.log("cars", cars);
  const years = [2018, 2019, 2020]

  const handleChangeYear = (year) => {
    const inputYear = Number(year);
    if (inputYear === selectedYear) {
      setSelectedYear("");
    } else {
      setSelectedYear(year);
    }
  };
  const filteredYear = () => {
    if (!selectedYear) {
      return cars
    }
    const filteredCars = cars.filter(
      (car) => car.year === selectedYear
    );
    return filteredCars;
  };
  let filteredCars = filteredYear(cars);

  return (
    <div className="Items">
      <h2>Selected Cars JS</h2>
      <div className="years">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleChangeYear(year)}
            className={selectedYear === year ? "active" : "filter"}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="items">
        {filteredCars.map((car) => (
          <div key={car.id} className="item">
            <div className="name">{car.name}</div>
            <div className="name">{car.year}</div>
            <img src={car.url} alt={car.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
