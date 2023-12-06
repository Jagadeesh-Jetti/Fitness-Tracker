import { useDispatch, useSelector } from "react-redux";
import "../Exercises/exercises.css";
import { addExercise, deleteExercise, fetchExercises } from "../../actions";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Exercises = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises);
  const [exerciseInput, setExerciseInput] = useState({
    name: "",
    duration: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setExerciseInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(addExercise(exerciseInput));
    setExerciseInput({
      name: "",
      duration: "",
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteExercise(id));
  };

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <div className="exercises_main">
      <div className="exercises_input_div">
        <div className="page_header"> Add Exercise </div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={exerciseInput.name}
          onChange={(e) => handleInput(e)}
        />

        <input
          type="number"
          name="duration"
          placeholder="Duration"
          value={exerciseInput.duration}
          onChange={(e) => handleInput(e)}
        />

        <button onClick={handleSubmit}> Add Exercise </button>
      </div>

      <div className="exercises_display">
        <div className="page_header"> Exercises </div>
        <div className="exercises_display_layout">
          {exercises.map((exercise) => (
            <div key={exercise.id} className="exercise_display_child">
              <div className="exercise_content">
                <p>Name: {exercise.name}</p>
                <p>Duration: {exercise.duration} min</p>
                <p>Burned Calories: {exercise.caloriesBurned}</p>
              </div>
              <div className="exercise_icon">
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(exercise._id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
