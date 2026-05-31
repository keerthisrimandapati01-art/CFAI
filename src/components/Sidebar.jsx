import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>🎓 UniAI</h2>

      <ul>
        <li><Link to="/">🏠 Home</Link></li>
        <li><Link to="/about">📖 About</Link></li>
        <li><Link to="/features">✨ Features</Link></li>
        <li><Link to="/faculty">👨‍🏫 Faculty</Link></li>
        <li><Link to="/subjects">📚 Subjects</Link></li>
        <li><Link to="/rooms">🏫 Rooms</Link></li>
        <li><Link to="/timetable">📅 Timetable</Link></li>
        <li><Link to="/contact">📞 Contact</Link></li>
      </ul>

    </div>
  )
}

export default Sidebar