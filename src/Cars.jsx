import { useState } from "react";
import carsJson from "./assets/cars.json";
import "./App.scss";

export const Cars = () => {
  const [cars, setCars] = useState(carsJson);
  const [selectedYear, setSelectedYear] = useState();
  console.log("cars", cars);

  const handleChangeYear = (year) => {
    const inputYear = Number(year);
    console.log("year", year);
    if (inputYear === selectedYear) {
      setSelectedYear("");
    } else {
      setSelectedYear(year);
    }
  };

  const filteredYear = (filteredData) => {
    if (!selectedYear) {
      filteredData;
    }
    const filteredCars = filteredData.filter(
      (car) => car.year === selectedYear
    );
    return filteredCars;
  };
  let filteredCars = filteredYear(cars);

  return (
    <div className="Cars">
      <h2>Selected Cars JS</h2>
      <div className="years">
        {[2018, 2019, 2020].map((year) => (
          <div
            key={year}
            onClick={() => handleChangeYear(year)}
            className={selectedYear === year ? "active" : "filter"}
          >
            {year}
          </div>
        ))}
        <div className="all">All</div>
      </div>
      <div className="cars">
        {filteredCars.map((car) => (
          <div key={car.id} className="car">
            <div className="name">{car.name}</div>
            <div className="name">{car.year}</div>
            <img src={car.url} alt={car.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
