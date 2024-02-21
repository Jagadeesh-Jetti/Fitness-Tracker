import { useEffect, useState } from "react";
import "../Goal/goal.css";
import { useDispatch, useSelector } from "react-redux";
import { addGoal, deleteGoal, fetchGoals } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Goal = () => {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals);
  const [goalInput, setGoalInput] = useState({
    name: "",
    description: "",
    createdAt: "",
    calories: "",
    status: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setGoalInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(addGoal(goalInput));
    setGoalInput({
      name: "",
      description: "",
      createdAt: "",
      calories: "",
      status: "",
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteGoal(id));
  };

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div className="goals_main">
      <div className="goals_input_div">
        <div className="page_header">Add Goal</div>

        <div className="goal_input_set">
          <input
            type="text"
            name="name"
            value={goalInput.name}
            onChange={(e) => handleInput(e)}
            placeholder="Name"
          />
          <input
            type="text"
            name="description"
            value={goalInput.description}
            onChange={(e) => handleInput(e)}
            placeholder="Description"
          />
        </div>
        <div className="goal_input_set">
          <input
            type="date"
            name="createdAt"
            value={goalInput.createdAt}
            onChange={(e) => handleInput(e)}
            placeholder="Target Date"
          />

          <input
            type="number"
            name="calories"
            value={goalInput.calories}
            onChange={(e) => handleInput(e)}
            placeholder="Target Calories"
          />
        </div>

        <div className="goal_input_set">
          <input
            type="text"
            name="status"
            value={goalInput.status}
            onChange={(e) => handleInput(e)}
            placeholder="Status"
          />
          <button onClick={handleSubmit}>Add Goal</button>
        </div>
      </div>

      <div className="goals_display">
        <div className="page_header">Goals</div>
        <div className="goals_display_layout">
          {goals.length > 0 ? (
            goals.map((goal) => (
              <div key={goal._id} className="goals_display_child">
                <div className="goals_content">
                  <p>Name: {goal?.name}</p>
                  <p>Description: {goal?.description}</p>
                  <p>
                    Target Date: {new Date(goal?.createdAt).toLocaleString()}
                  </p>
                  <p>Target Calories: {goal?.calories}</p>
                  <p>Status: {goal?.status}</p>
                </div>
                <div className="goals_icon">
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => handleDelete(goal?._id)}
                  />
                </div>
              </div>
            ))
          ) : (
            <p>No goals added</p>
          )}
        </div>
      </div>
    </div>
  );
};
