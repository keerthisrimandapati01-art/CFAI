function Home() {
  return (
    <div className="page">

      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">
          AcademicFlow Enterprise
        </h1>

        <p className="hero-text">
          Intelligent University Scheduling Platform designed to automate
          timetable generation, optimize resource allocation, eliminate
          scheduling conflicts, and improve academic planning efficiency.
        </p>

        <div className="hero-buttons">
          <button>
            Generate Timetable
          </button>

          <button className="secondary-btn">
            View Analytics
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-grid">

        <div className="stats-card">
          <h2>99.9%</h2>
          <p>Conflict-Free Scheduling</p>
        </div>

        <div className="stats-card">
          <h2>500+</h2>
          <p>Faculty Supported</p>
        </div>

        <div className="stats-card">
          <h2>50K+</h2>
          <p>Schedules Generated</p>
        </div>

        <div className="stats-card">
          <h2>24/7</h2>
          <p>Automation</p>
        </div>

      </div>

      {/* Features */}
      <div className="recommendation-card">
        <h2>Platform Features</h2>

        <ul>
          <li>Automated Timetable Generation</li>
          <li>Faculty Workload Optimization</li>
          <li>Room Allocation Management</li>
          <li>Conflict Detection System</li>
          <li>Department Scheduling Support</li>
          <li>Real-Time Analytics Dashboard</li>
          <li>PDF Export & Reporting</li>
          <li>Scalable University Management</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="recommendation-card">
        <h2>Why Choose AcademicFlow?</h2>

        <p>
          AcademicFlow combines advanced scheduling algorithms,
          intelligent resource planning, and modern analytics to
          provide universities with a reliable and efficient timetable
          management system.
        </p>

        <br />

        <p>
          The platform helps institutions reduce manual effort,
          maximize classroom utilization, balance faculty workloads,
          and generate optimized schedules in seconds.
        </p>
      </div>

      {/* Enterprise Section */}
      <div className="recommendation-card">
        <h2>Enterprise Performance</h2>

        <div className="stats-grid">

          <div className="stats-card">
            <h2>98%</h2>
            <p>Scheduling Efficiency</p>
          </div>

          <div className="stats-card">
            <h2>15+</h2>
            <p>Departments Managed</p>
          </div>

          <div className="stats-card">
            <h2>42+</h2>
            <p>Classrooms Available</p>
          </div>

          <div className="stats-card">
            <h2>120+</h2>
            <p>Faculty Members</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;