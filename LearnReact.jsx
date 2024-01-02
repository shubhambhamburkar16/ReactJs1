
import { NavLink } from "react-router-dom";
import "./customDiv.css";
const LearnReact = () => {
  return (
    <>
      <h3> React JS Tutorial </h3>
      <ul type="none" className="list">
        <li>
          <NavLink className="nav-link" to="/React/Introduction">
            React Introduction
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/Render">
            React Render HTML
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/Jsx">
            React JSX
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/Component">
            React Components
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/Class">
            React  Class Components
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/Func">
            React  Functional Components
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/React/Router">
            React Router
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default LearnReact;
