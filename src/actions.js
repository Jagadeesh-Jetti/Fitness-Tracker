import axios from 'axios'
import { ADD_EXERCISE, ADD_FOOD, ADD_GOAL, DELETE_EXERCISE, DELETE_FOOD, DELETE_GOAL, FETCH_EXERCISES, FETCH_FOOD, FETCH_GOALS } from './actionTypes'

export const fetchExercises = () => async (dispatch) => {
    try{
        const response = await axios.get("https://assignment17.vishalsoni7.repl.co/exercises")
        const data = response.data.allExercises
        dispatch({ type: FETCH_EXERCISES, payload: data })
    }
    catch(error){
        console.error("Error while fetching exercise data:" , error)

    }
}

export const fetchFood = () => async (dispatch) => {
    try{
        const response = await axios.get("https://assignment17.vishalsoni7.repl.co/foods")
        const data = response.data.allFoods
        dispatch({ type: FETCH_FOOD, payload: data})
    }
    catch(error){
        console.error("Error while fetching food data:", error)
    }
}

export const fetchGoals = () => async (dispatch) => {
    try{
        const response = await axios.get("https://assignment17.vishalsoni7.repl.co/goals")
        const data = response.data.allGoals
        console.log(data)
        dispatch({ type: FETCH_GOALS, payload: data })
    }
    catch(error){
        console.error("Error shile fetching goal data:", error)
    }
}

export const addExercise = (exercise) => async (dispatch) => {
    try{
        const response = await axios.post("https://assignment17.vishalsoni7.repl.co/exercises", 
        exercise)
        const data = response.data.exerciseToBeAdded;
        dispatch({ type: ADD_EXERCISE, payload: data})
    }
    catch(error){
        console.error("Error while adding exercise:", error)
    }
}

export const addFood = (food) => async (dispatch) => {
    try{
        const response = await axios.post("https://assignment17.vishalsoni7.repl.co/foods", food)
        const data = response.data.newFood;
        dispatch({ type: ADD_FOOD, payload: data}) 
    }
    catch(error){
        console.error("Error while adding food:", error)
    }
} 

export const addGoal = (goal) => async (dispatch) => {
    try{
        const response = await axios.post("https://assignment17.vishalsoni7.repl.co/goals",goal)
        const data = response.data.newGoal;
        dispatch({ type: ADD_GOAL, payload: data})
    }
    catch(error){
        console.log("Error while adding goal:", error)
    }
}

export const deleteExercise = (id) => async (dispatch) => {
    try{
        const response = await axios.delete(`https://assignment17.vishalsoni7.repl.co/exercises/${id}`)
        const data = await response.data.deletedExercise
        dispatch({ type: DELETE_EXERCISE, payload: data})
    }
    catch(error){
        console.error("Error while deleting exercise:", error)
    }
}

export const deleteFood = (id) => async (dispatch) => {
    try{
        const response = await axios.delete(`https://assignment17.vishalsoni7.repl.co/foods/${id}`)
        const data = await response.data.deletedFood;
        dispatch({ type: DELETE_FOOD, payload: data})
    }
    catch(error){
        console.error("Error while deleting food:", error)
    }
}

export const deleteGoal = (id) => async (dispatch) => {
    try{
        const response = await axios.delete(`https://assignment17.vishalsoni7.repl.co/goals/${id}`)
        const data = await response.data.deletedGoal;
        dispatch({ type: DELETE_GOAL, payload: data})
    }
    catch(error){
        console.error("Error while deleting goal:", error)
    }
}