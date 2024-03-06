import Instructions from "./Instructions";
import "./styles.scss";
import { Routes, Route, NavLink } from "react-router-dom";
import Students from "./Students";
import Student from "./Student";

const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink
          to="students"
          className="link"
          style={({ isActive }) => (isActive ? { color: "white" } : undefined)}
        >
          Students
        </NavLink>
      </nav>
      <div className="Instructions">
        <div className="block">
          <Routes>
            <Route path="students" element={<Students />} />
            <Route path="students/:id" element={<Student />} />
          </Routes>
        </div>
        <Instructions />
      </div>
    </div>
  );
};

export default App;
