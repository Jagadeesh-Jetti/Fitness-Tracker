import "../Food/food.css";

export const Food = () => {
  return (
    <div className="food_main">
      <div className="food_input_div">
        <div className="page_header">Add Food</div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Calories" />
        <input type="text" placeholder="Protein" />
        <input type="text" placeholder="Carbs" />
        <input type="text" placeholder="Fat" />
        <button> Add Food </button>
      </div>

      <div className="food_display">
        <div className="page_header"> Food Items </div>
        <div> Food display </div>
      </div>
    </div>
  );
};
