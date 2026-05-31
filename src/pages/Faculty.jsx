function Faculty() {
  const faculty = [
    ["F101", "Dr. Priya Sharma", "Artificial Intelligence"],
    ["F102", "Dr. Ramesh Kumar", "DBMS"],
    ["F103", "Dr. Kiran Reddy", "Operating Systems"],
    ["F104", "Dr. Sneha Patel", "Computer Networks"],
    ["F105", "Dr. Rahul Verma", "Machine Learning"]
  ]

  return (
    <div className="page">
      <h1>👨‍🏫 Faculty Management</h1>

      <table>
        <thead>
          <tr>
            <th>Faculty ID</th>
            <th>Name</th>
            <th>Assigned Subject</th>
          </tr>
        </thead>

        <tbody>
          {faculty.map((f, index) => (
            <tr key={index}>
              <td>{f[0]}</td>
              <td>{f[1]}</td>
              <td>{f[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
  
}
<div className="recommendation-card">
  <h2>📈 Faculty Workload Analytics</h2>

  <ul>
    <li>Average Teaching Load : 16 Hours/Week</li>
    <li>Most Active Faculty : Dr. Priya Sharma</li>
    <li>Faculty Availability : 95%</li>
    <li>Workload Distribution : Balanced</li>
  </ul>
</div>
export default Faculty