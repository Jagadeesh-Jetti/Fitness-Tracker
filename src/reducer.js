import { ADD_EXERCISE, ADD_FOOD, ADD_GOAL, DELETE_EXERCISE, DELETE_FOOD, FETCH_EXERCISES, FETCH_FOOD, FETCH_GOALS } from "./actionTypes"

export const initialState = {
    exercises: [],
    foodItems: [],
    goals: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_EXERCISES:
            return{
                ...state,
                exercises: action.payload
            }
        case FETCH_FOOD:
            return{
                ...state,
                foodItems: action.payload
            }
        case FETCH_GOALS:
            return{
                ...state,
                goals: action.payload
            }
        case ADD_EXERCISE:
            return{
                ...state,
                exercises: [...state.exercises, action.payload]
            }
        case ADD_FOOD:
            return{
                ...state,
                foodItems: [...state.foodItems, action.payload]
            }
        case ADD_GOAL:
            return{
                ...state,
                goals: [...state.goals, action.payload]
            }
        case DELETE_EXERCISE:
            return{
                ...state,
                exercises: state.exercises.filter((exercise) => exercise._id !== action.payload._id)
            }
        case DELETE_FOOD:
            return{
                ...state,
                foodItems: state.foodItems.filter((food) => food._id !== action.payload._id)
            }
        default:
            return state
    }
}