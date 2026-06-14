import DashboardCards from "../components/DashboardCards";

function Dashboard() {
  return (
    <div className="page">

      <div className="hero-section">
        <h1 className="hero-title">
          Analytics Dashboard
        </h1>

        <p className="hero-text">
          Monitor scheduling performance, faculty allocation,
          classroom utilization, and institutional efficiency
          through real-time analytics.
        </p>
      </div>

      {/* KPI Cards */}
      <DashboardCards />

      {/* Statistics */}
      <div className="stats-grid">

        <div className="stats-card">
          <h2>98%</h2>
          <p>Scheduling Efficiency</p>
        </div>

        <div className="stats-card">
          <h2>120+</h2>
          <p>Faculty Members</p>
        </div>

        <div className="stats-card">
          <h2>42</h2>
          <p>Available Rooms</p>
        </div>

        <div className="stats-card">
          <h2>15</h2>
          <p>Departments</p>
        </div>

      </div>

      {/* System Overview */}
      <div className="recommendation-card">
        <h2>System Overview</h2>

        <p>
          AcademicFlow Enterprise utilizes advanced scheduling
          algorithms to generate optimized university timetables
          while eliminating faculty, room, and subject conflicts.
        </p>

        <br />

        <p>
          The platform provides intelligent resource allocation,
          workload balancing, classroom optimization, and
          timetable automation for educational institutions.
        </p>
      </div>

      {/* Core Modules */}
      <div className="recommendation-card">
        <h2>Core Modules</h2>

        <ul>
          <li>Faculty Management</li>
          <li>Subject Allocation</li>
          <li>Room Scheduling</li>
          <li>Conflict Resolution</li>
          <li>Timetable Generation</li>
          <li>Performance Analytics</li>
          <li>PDF Export Reports</li>
          <li>Resource Optimization</li>
        </ul>
      </div>

      {/* Performance Metrics */}
      <div className="recommendation-card">
        <h2>Performance Metrics</h2>

        <div className="stats-grid">

          <div className="stats-card">
            <h2>50K+</h2>
            <p>Schedules Generated</p>
          </div>

          <div className="stats-card">
            <h2>99.9%</h2>
            <p>Conflict Free</p>
          </div>

          <div className="stats-card">
            <h2>24/7</h2>
            <p>System Availability</p>
          </div>

          <div className="stats-card">
            <h2>1 Sec</h2>
            <p>Average Generation Time</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;