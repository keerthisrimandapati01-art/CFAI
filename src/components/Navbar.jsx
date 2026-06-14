import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="AcademicFlow Logo" className="navbar-logo" />

        <div>
          <h1>AcademicFlow Enterprise</h1>
          <p>Intelligent Scheduling Platform</p>
        </div>
      </div>

      <div className="clock">
        ⏰ {time}
      </div>
    </div>
  );
}

export default Navbar;