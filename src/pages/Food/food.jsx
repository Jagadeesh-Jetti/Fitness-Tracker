import { useDispatch, useSelector } from "react-redux";
import "../Food/food.css";
import { useEffect, useState } from "react";
import { addFood, deleteFood, fetchFood } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Food = () => {
  const food = useSelector((state) => state.foodItems);
  const dispatch = useDispatch();
  const [foodInput, setFoodInput] = useState({
    name: "",
    calories: "",
    protein: "",
    carbohydrates: "",
    fat: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFoodInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(addFood(foodInput));
    setFoodInput({
      name: "",
      calories: "",
      protein: "",
      carbohydrates: "",
      fat: "",
    });
    console.log(foodInput);
  };

  const handleDelete = (id) => {
    dispatch(deleteFood(id));
  };

  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);

  return (
    <div className="food_main">
      <div className="food_input_div">
        <div className="page_header">Add Food</div>
        <div>
          <input
            type="text"
            name="name"
            value={foodInput.name}
            placeholder="Name"
            onChange={(e) => handleInput(e)}
          />
          <input
            type="number"
            name="calories"
            value={foodInput.calories}
            placeholder="Calories"
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div>
          <input
            type="number"
            name="protein"
            value={foodInput.protein}
            placeholder="Protein"
            onChange={(e) => handleInput(e)}
          />
          <input
            type="number"
            name="carbohydrates"
            value={foodInput.carbohydrates}
            placeholder="Carbs"
            onChange={(e) => handleInput(e)}
          />
        </div>

        <div>
          <input
            type="number"
            name="fat"
            value={foodInput.fat}
            placeholder="Fat"
            onChange={(e) => handleInput(e)}
          />

          <button onClick={handleSubmit}>Add Food</button>
        </div>
      </div>

      <div className="food_display">
        <div className="page_header">Food Items</div>
        <div className="food_display_layout">
          {food.length > 0 ? (
            food.map((foodItem) => (
              <div key={foodItem._id} className="food_display_child">
                <div className="food_content">
                  <p>Name: {foodItem.name}</p>
                  <p>Calories: {foodItem.calories}</p>
                  <p>Protein: {foodItem.protein}</p>
                  <p>Carbohydrates: {foodItem.carbohydrates}</p>
                  <p>Fat: {foodItem.fat}</p>
                </div>
                <div className="food_icon">
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDelete(foodItem._id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No food items added</p>
          )}
        </div>
      </div>
    </div>
  );
};
