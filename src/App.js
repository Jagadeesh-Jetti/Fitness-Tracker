import './App.css';
import { Routes, Route } from "react-router-dom"
import { Navbar } from './components/Navbar/navbar.jsx';
import { Dashboard } from './pages/Dashboard/dashboard.jsx';
import { Exercises } from './pages/Exercises/exercises.jsx';
import { Goal } from './pages/Goal/goal.jsx';
import { Food } from './pages/Food/food.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/food" element={<Food />} />
          <Route path="/goal" element={<Goal />} />
        </Routes>
      
      </header>
    </div>
  );
}

export default App;
