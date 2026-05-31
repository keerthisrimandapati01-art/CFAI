function Home() {
  return (
    <div className="page">

      <div className="hero-section">

        <h1 className="hero-title">
          🎓 University Timetable Generator
        </h1>

        <p className="hero-text">
          Generate clash-free university schedules using
          Constraint Satisfaction Problem (CSP) techniques.
        </p>

      </div>

      <div className="recommendation-card">
        <h2>🚀 Why This Project?</h2>

        <p>
          Timetable generation is a challenging scheduling problem.
          This system automatically assigns faculty, rooms and subjects
          while avoiding conflicts.
        </p>
      </div>

    </div>
  )
}

export default Home