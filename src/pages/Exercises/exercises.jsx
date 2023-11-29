import "../Exercises/exercises.css";

export const Exercises = () => {
  return (
    <div className="exercises_main">
      <div className="exercises_input_div">
        <div className="page_header"> Add Exercise </div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Duration" />
        <button> Add Exercise </button>
      </div>

      <div className="exercises_display">
        <div className="page_header"> Exercises </div>
        <div>this is a display items</div>
      </div>
    </div>
  );
};
