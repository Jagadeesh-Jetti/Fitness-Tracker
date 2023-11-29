import { useNavigate } from "react-router-dom";
import "../Navbar/navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nb_main">
      <p onClick={() => navigate("/")} className="hero_name">
        Fitter
      </p>
      <div className="nb_right_options">
        <p onClick={() => navigate("/exercises")}>Exercises</p>
        <p onClick={() => navigate("/food")}>Food</p>
        <p onClick={() => navigate("/goal")}>Goal</p>
      </div>
    </div>
  );
};
