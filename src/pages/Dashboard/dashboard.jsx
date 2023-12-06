import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchExercises, fetchFood, fetchGoals } from "../../actions";

export const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExercises());
    dispatch(fetchFood());
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <div>
      <div>
        <h1>Dashboard title</h1>
        <p>this is a dsashboard</p>
      </div>
    </div>
  );
};
