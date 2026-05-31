function Rooms() {

  const rooms = [

    {
      room: "A-101",
      type: "Classroom",
      capacity: 60
    },

    {
      room: "LAB-1",
      type: "Computer Lab",
      capacity: 40
    },

    {
      room: "Seminar Hall",
      type: "Conference",
      capacity: 120
    },

    {
      room: "B-204",
      type: "Classroom",
      capacity: 50
    }

  ]

  return (

    <div className="page">

      <h2>🏫 Rooms Management</h2>

      <div className="table-container">

        <table>

          <thead>

            <tr>
              <th>Room</th>
              <th>Type</th>
              <th>Capacity</th>
            </tr>

          </thead>

          <tbody>

            {rooms.map((r, index) => (

              <tr key={index}>

                <td>{r.room}</td>
                <td>{r.type}</td>
                <td>{r.capacity}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}
<div className="recommendation-card">
  <h2>🏫 Room Utilization Analytics</h2>

  <ul>
    <li>A-101 Utilization : 85%</li>
    <li>B-204 Utilization : 78%</li>
    <li>LAB-1 Utilization : 92%</li>
    <li>Seminar Hall Utilization : 65%</li>
  </ul>
</div>
export default Rooms