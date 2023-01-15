import { useEffect, useMemo, useState } from "react";
import sportJson from "./assets/sport.json";
import "./App.scss";

export const Sport = () => {
  const sport = sportJson;
  const [sportList, setSportList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
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
    if(category === selectedCategory){
        setSelectedCategory('')
    } else{
        setSelectedCategory(category)
    }
  };
  console.log("handleCategoryChange", handleCategoryChange);

  return (
    <div className="Items">
      <h2>Selected Sport</h2>
      <div className="category">
        {["All", "Indoor", "Outdoor", "Aquatics"].map((category, i) => (
          <button key={i} onClick={()=>handleCategoryChange(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="items">
        {filteredList.map((sport) => (
          <div key={sport.id} className="item">
            <div className="title">{sport.name}</div>
            <div className="category">{sport.category}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
