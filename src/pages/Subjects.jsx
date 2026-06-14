function Subjects() {
  const subjects = [
  "Data Structures",
  "Algorithms",
  "Database Management",
  "Operating Systems",
  "Computer Networks",
  "Machine Learning",
  "Artificial Intelligence",
  "Software Engineering",
  "Cloud Computing",
  "Cyber Security",
  "Java Programming",
  "Python Programming",
  "Data Mining",
  "Compiler Design",
  "Theory of Computation",
  "Web Technologies",
  "Information Security",
  "Natural Language Processing",
  "Computer Graphics"
];

  return (
    <div className="page">
      <h1>Academic Subjects</h1>

      <div className="stats-grid">
        {subjects.map((subject, index) => (
          <div className="stats-card" key={index}>
            <h3>{subject}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subjects;