function Subjects() {
  const subjects = [
    ["CS301", "Artificial Intelligence", 4, "Dr. Priya Sharma"],
    ["CS302", "DBMS", 4, "Dr. Ramesh Kumar"],
    ["CS303", "Operating Systems", 4, "Dr. Kiran Reddy"],
    ["CS304", "Computer Networks", 3, "Dr. Sneha Patel"],
    ["CS305", "Machine Learning", 4, "Dr. Rahul Verma"]
  ]

  return (
    <div className="page">
      <h1>📚 Subject Management</h1>

      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Subject</th>
            <th>Credits</th>
            <th>Faculty</th>
          </tr>
        </thead>

        <tbody>
          {subjects.map((s, index) => (
            <tr key={index}>
              <td>{s[0]}</td>
              <td>{s[1]}</td>
              <td>{s[2]}</td>
              <td>{s[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Subjects