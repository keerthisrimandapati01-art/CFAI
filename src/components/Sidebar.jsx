import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo-section">
        <img src={logo} alt="AcademicFlow Logo" className="logo" />

        <div>
          <h2>AcademicFlow</h2>
          <p>Enterprise Scheduler</p>
        </div>
      </div>

      <nav>
        <NavLink to="/" end>
          Dashboard Home
        </NavLink>

        <NavLink to="/dashboard">
          Analytics
        </NavLink>

        <NavLink to="/features">
          Features
        </NavLink>

        <NavLink to="/faculty">
          Faculty
        </NavLink>

        <NavLink to="/subjects">
          Subjects
        </NavLink>

        <NavLink to="/rooms">
          Rooms
        </NavLink>

        <NavLink to="/timetable">
          Timetable
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>

    </div>
  );
}

export default Sidebar;