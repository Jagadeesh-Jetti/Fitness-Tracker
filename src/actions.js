import axios from "axios";
import {
  ADD_EXERCISE,
  ADD_FOOD,
  ADD_GOAL,
  DELETE_EXERCISE,
  DELETE_FOOD,
  DELETE_GOAL,
  FETCH_EXERCISES,
  FETCH_FOOD,
  FETCH_GOALS,
} from "./actionTypes";

export const fetchExercises = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://fit-tracker-backend.vercel.app/exercises"
    );
    const data = response.data.data;
    dispatch({ type: FETCH_EXERCISES, payload: data });
  } catch (error) {
    console.error("Error while fetching exercise data:", error);
  }
};

export const fetchFood = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://fit-tracker-backend.vercel.app/foods"
    );

    const data = response.data.food;
    dispatch({ type: FETCH_FOOD, payload: data });
  } catch (error) {
    console.error("Error while fetching food data:", error);
  }
};

export const fetchGoals = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://fit-tracker-backend.vercel.app/goals"
    );
    const data = response.data.data;

    dispatch({ type: FETCH_GOALS, payload: data });
  } catch (error) {
    console.error("Error shile fetching goal data:", error);
  }
};

export const addExercise = (exercise) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://fit-tracker-backend.vercel.app/exercises",
      exercise
    );
    const data = response.data.data;
    dispatch({ type: ADD_EXERCISE, payload: data });
  } catch (error) {
    console.error("Error while adding exercise:", error);
  }
};

export const addFood = (food) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://fit-tracker-backend.vercel.app/foods",
      food
    );

    const data = response.data.food;
    dispatch({ type: ADD_FOOD, payload: data });
  } catch (error) {
    console.error("Error while adding food:", error);
  }
};

export const addGoal = (goal) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://fit-tracker-backend.vercel.app/goals",
      goal
    );
    const data = response.data.data;
    dispatch({ type: ADD_GOAL, payload: data });
  } catch (error) {
    console.error("Error while adding goal:", error);
  }
};

export const deleteExercise = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://fit-tracker-backend.vercel.app/exercises/${id}`
    );
    const data = await response.data.data;
    dispatch({ type: DELETE_EXERCISE, payload: data });
  } catch (error) {
    console.error("Error while deleting exercise:", error);
  }
};

export const deleteFood = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://fit-tracker-backend.vercel.app/foods/${id}`
    );
    const data = await response.data.deletedFood;
    dispatch({ type: DELETE_FOOD, payload: data });
  } catch (error) {
    console.error("Error while deleting food:", error);
  }
};

export const deleteGoal = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://fit-tracker-backend.vercel.app/goals/${id}`
    );
    const data = await response.data.data;
    dispatch({ type: DELETE_GOAL, payload: data });
  } catch (error) {
    console.error("Error while deleting goal:", error);
  }
};
