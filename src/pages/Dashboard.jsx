import DashboardCards from "../components/DashboardCards"

function Dashboard() {
  return (
    <div className="dashboard-page">

      <h1>🎓 AI University Timetable Generator</h1>

      <p
        style={{
          textAlign: "center",
          color: "#cbd5e1",
          marginBottom: "30px",
          fontSize: "18px"
        }}
      >
        A Constraint Satisfaction Problem (CSP) based scheduling system
        that automatically generates clash-free university timetables.
      </p>

      <DashboardCards />

      <div className="recommendation-card">
        <h2>📖 Project Overview</h2>

        <p>
          University timetable scheduling is one of the most complex
          administrative tasks. This project uses CSP concepts to assign
          courses, faculty members, classrooms and time slots while
          avoiding conflicts.
        </p>

        <br />

        <p>
          The system ensures that:
        </p>

        <ul>
          <li>✅ No faculty is assigned to two classes at the same time</li>
          <li>✅ No classroom is double-booked</li>
          <li>✅ Room capacity constraints are satisfied</li>
          <li>✅ Faculty workload is balanced</li>
          <li>✅ Timetables are generated efficiently</li>
        </ul>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <h2>⚡</h2>
          <h3>99%</h3>
          <p>Conflict Reduction</p>
        </div>

        <div className="stat-card">
          <h2>🏫</h2>
          <h3>10+</h3>
          <p>Available Rooms</p>
        </div>

        <div className="stat-card">
          <h2>👨‍🏫</h2>
          <h3>15+</h3>
          <p>Faculty Members</p>
        </div>

        <div className="stat-card">
          <h2>📚</h2>
          <h3>20+</h3>
          <p>Subjects Managed</p>
        </div>

      </div>

      <div className="recommendation-card">

        <h2>🚀 Key Features</h2>

        <ul>
          <li>📅 Automated Timetable Generation</li>
          <li>👨‍🏫 Faculty Management</li>
          <li>📘 Subject Allocation</li>
          <li>🏫 Room Assignment</li>
          <li>🤖 AI Recommendations</li>
          <li>⚙️ CSP-Based Scheduling</li>
        </ul>

      </div>

    </div>
  )
}

export default Dashboard