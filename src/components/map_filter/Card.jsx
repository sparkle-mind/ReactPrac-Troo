import cardStyle from "../map_filter/cardList.module.css";
import cardData from "../../../public/api/cardData.json";
import CardList from "./CardList";
import { useState } from "react";

const Card = () => {
  // State to track the selected type (cloths, electric, etc.)
  const [selectedType, setSelectedType] = useState("all");

  // Filtered data based on selectedType
  const filteredData = selectedType === "all"? cardData: cardData.filter((item) => item.type === selectedType);

  // Handle the change in selection
  const handleSelectChange = (e) => {
    setSelectedType(e.target.value);
  };

  //   product availability message
  const productAvailability = () => {
    if (cardData.length === 0) {
      return "No items available";
    } else if (cardData.length < 5) {
      return "Less than 5 items";
    } else {
      return `Total items: ${cardData.length}`;
    }
  };

  return (
    <>
      <section className={cardStyle["categorySection"]}>
        <h2>Category</h2>
        <p> {productAvailability()}</p>

        {/* Dropdown for selecting the type */}
        <form className={cardStyle["filterForm"]}>
          <h5>Filter Item</h5>
          <select
            name="filter"
            id="filter"
            value={selectedType}
            onChange={handleSelectChange}
          >
            <option value="all">All</option>
            <option value="cloths">Cloths</option>
            <option value="electric">Electric</option>
          </select>
        </form>

        {/* Render the filtered data */}
        <div className={cardStyle["container"]}>
          <h3 className={cardStyle["title"]}>
            {selectedType === "all"
              ? "All Products"
              : `${
                  selectedType.charAt(0).toUpperCase() + selectedType.slice(1)
                } Products`}{" "}
            :
          </h3>
          <ul className={cardStyle["cardListRow"]}>
            {filteredData.map((card, index) => (
              <CardList key={index} data={card} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Card;
