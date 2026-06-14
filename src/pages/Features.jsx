function Features() {
  return (
    <div className="page">
      <h1>Platform Features</h1>

      <div className="stats-grid">
        <div className="stats-card">
          <h3>AI Scheduling</h3>
          <p>Automated timetable generation</p>
        </div>

        <div className="stats-card">
          <h3>Conflict Detection</h3>
          <p>Zero overlap scheduling</p>
        </div>

        <div className="stats-card">
          <h3>Faculty Allocation</h3>
          <p>Balanced workload distribution</p>
        </div>

        <div className="stats-card">
          <h3>Room Management</h3>
          <p>Optimized classroom usage</p>
        </div>
      </div>

      <div className="recommendation-card">
        <h2>Enterprise Capabilities</h2>

        <ul>
          <li>Multi-department scheduling</li>
          <li>Resource utilization analytics</li>
          <li>Smart room allocation</li>
          <li>Faculty availability tracking</li>
          <li>PDF timetable exports</li>
          <li>Scalable architecture</li>
        </ul>
      </div>
    </div>
  );
}

export default Features;