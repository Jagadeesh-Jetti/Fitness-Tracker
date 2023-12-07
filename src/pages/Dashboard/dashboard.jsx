import React, { useEffect } from "react";
import "../Dashboard/dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchExercises, fetchFood, fetchGoals } from "../../actions";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  const food = useSelector((state) => state.foodItems);
  const goals = useSelector((state) => state.goals);

  const caloriesBurned = exercises.reduce(
    (acc, cur) => acc + cur.caloriesBurned,
    0
  );
  const caloriesConsumed = food.reduce((acc, cur) => acc + cur.calories, 0);
  const caloriesGoal = goals.reduce((acc, cur) => acc + cur.calories, 0);
  let caloriesToComplete = 0;

  let caloriesSpent = caloriesConsumed - caloriesBurned;

  if (caloriesGoal > caloriesSpent) {
    caloriesToComplete = caloriesGoal - Math.abs(caloriesSpent);
  }

  useEffect(() => {
    dispatch(fetchExercises());
    dispatch(fetchFood());
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div>
      <div className="dashboard_content">
        <h3>Dashboard</h3>
        <div className="metric_display">
          <div className="metric_segment">
            <div className="dashboard_metric_child">
              <h4>Total Calories Burned</h4>
              <p>{caloriesBurned}</p>
            </div>
            <div className="dashboard_metric_child">
              <h4>Total Calories Consumed</h4>
              <p>{caloriesConsumed}</p>
            </div>
          </div>
          <div className="metric_segment">
            <div className="dashboard_metric_child">
              <h4>Total Calories Goal</h4>
              <p>{caloriesGoal}</p>
            </div>
            <div className="dashboard_metric_child">
              <h4>Calories to reach goal</h4>
              <p>{caloriesToComplete}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
