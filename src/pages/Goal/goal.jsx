import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoals } from "../../actions";

export const Goal = () => {
  const dispatch = useDispatch();
  const goals = useSelector((state) => state.goals);
  console.log(goals);

  useEffect(() => {
    dispatch(fetchGoals);
  }, [dispatch]);

  return (
    <div className="goals_main">
      <h1>Goal</h1>
      <div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Description" />
        <input type="text" placeholder="Target Date" />
        <input type="text" placeholder="Target Calories" />
        <input type="text" placeholder="status" />
        <button> Add Goal </button>
      </div>
      <div>
        {goals.map((goal) => (
          <div>
            <p> {goal.name} </p>
          </div>
        ))}
      </div>
    </div>
  );
};
