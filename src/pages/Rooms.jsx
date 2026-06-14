function Rooms() {
  const rooms = [
    { room: "A101", capacity: 60 },
    { room: "A102", capacity: 50 },
    { room: "Lab-1", capacity: 40 },
    { room: "Lab-2", capacity: 35 }
  ];

  return (
    <div className="page">
      <h1>Room Allocation</h1>

      <div className="recommendation-card">
        <table>
          <thead>
            <tr>
              <th>Room</th>
              <th>Capacity</th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room, index) => (
              <tr key={index}>
                <td>{room.room}</td>
                <td>{room.capacity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Rooms;