import { useEffect, useMemo, useState } from "react";
import sportJson from "./assets/sport.json";
import "./App.scss";

export const Sport = () => {
  const sport = sportJson;
  const [sportList, setSportList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const categories = ["All", "Indoor", "Outdoor", "Aquatics"];
  console.log("sportJson:", sportJson);
  console.log("sportList:", sportList);

  useEffect(() => {
    setSportList(sport);
  }, []);

  const filterList = () => {
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((list) => list.category === selectedCategory);
  };

  const filteredList = useMemo(filterList, [selectedCategory, sportList]);

  const handleCategoryChange = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <div className="Items">
      <h2>Selected Sport</h2>
      <div className="category">
        {categories.map((category, index) => (
          <button
            // className="btn"
            className={selectedCategory === category ? "active" : "filter"}
            key={index}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="items">
        {filteredList.map((sport) => (
          <div key={sport.id} className="item">
            <div className="title">{sport.name}</div>
            <div className="category">{sport.category}</div>
            <img src={sport.url} alt={sport.name} />
          </div>
        ))}
      </div>
    </div>
  );
};
