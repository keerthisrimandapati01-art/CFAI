import { Link } from "react-router-dom"

function Features() {
  return (
    <div className="page">

      <h1>✨ Features</h1>

      <div className="cards">

        <Link to="/faculty" className="card">
          <h3>👨‍🏫 Faculty Management</h3>
          <p>Manage faculty information and assignments.</p>
        </Link>

        <Link to="/subjects" className="card">
          <h3>📚 Subject Management</h3>
          <p>Manage courses, credits and faculty mapping.</p>
        </Link>

        <Link to="/rooms" className="card">
          <h3>🏫 Room Allocation</h3>
          <p>Assign classrooms based on capacity.</p>
        </Link>

        <div className="card">
          <h3>⚠️ Conflict Detection</h3>
          <p>Detect faculty and room clashes automatically.</p>
        </div>

        <div className="card">
          <h3>📏 Capacity Validation</h3>
          <p>Ensure classroom capacity constraints are satisfied.</p>
        </div>

        <Link to="/timetable" className="card">
          <h3>🤖 AI Recommendations</h3>
          <p>Generate optimized timetables and suggestions.</p>
        </Link>

      </div>

    </div>
  )
}

export default Features