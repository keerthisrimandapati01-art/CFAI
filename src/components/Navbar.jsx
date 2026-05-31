import { useEffect, useState } from "react"

function Navbar() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="navbar">
      <h1>University Timetable Generator</h1>

      <div className="clock">
        ⏰ {time}
      </div>
    </div>
  )
}

export default Navbar