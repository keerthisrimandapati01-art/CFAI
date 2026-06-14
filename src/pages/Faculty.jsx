function Faculty() {
  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      department: "Computer Science",
      subject: "Data Structures",
      specialization: "Algorithms & Data Structures",
      experience: "15 Years",
      achievements: "25 Research Papers Published"
    },
    {
      name: "Dr. Priya Sharma",
      department: "Information Technology",
      subject: "Database Management",
      specialization: "DBMS & Data Warehousing",
      experience: "12 Years",
      achievements: "Best Faculty Award 2024"
    },
    {
      name: "Dr. Anil Verma",
      department: "Computer Science",
      subject: "Algorithms",
      specialization: "Competitive Programming",
      experience: "18 Years",
      achievements: "IEEE Senior Member"
    },
    {
      name: "Dr. Sneha Reddy",
      department: "AI & ML",
      subject: "Machine Learning",
      specialization: "Artificial Intelligence",
      experience: "10 Years",
      achievements: "AI Excellence Award"
    },
    {
      name: "Dr. Rahul Mehta",
      department: "Computer Science",
      subject: "Operating Systems",
      specialization: "System Design",
      experience: "14 Years",
      achievements: "Published OS Research"
    },
    {
      name: "Dr. Kavya Nair",
      department: "Information Technology",
      subject: "Computer Networks",
      specialization: "Network Security",
      experience: "11 Years",
      achievements: "Cisco Certified Trainer"
    },
    {
      name: "Dr. Arjun Patel",
      department: "Computer Science",
      subject: "Software Engineering",
      specialization: "Project Management",
      experience: "13 Years",
      achievements: "Industry Collaboration Lead"
    },
    {
      name: "Dr. Neha Gupta",
      department: "AI & ML",
      subject: "Artificial Intelligence",
      specialization: "Deep Learning",
      experience: "9 Years",
      achievements: "Google AI Research Contributor"
    },
    {
      name: "Dr. Vivek Sharma",
      department: "Computer Science",
      subject: "Computer Networks",
      specialization: "Network Architecture",
      experience: "16 Years",
      achievements: "Best Researcher Award"
    },
    {
      name: "Dr. Pooja Iyer",
      department: "Information Technology",
      subject: "Cloud Computing",
      specialization: "AWS & Azure",
      experience: "8 Years",
      achievements: "AWS Certified Solutions Architect"
    },
    {
      name: "Dr. Sandeep Rao",
      department: "Cyber Security",
      subject: "Cyber Security",
      specialization: "Ethical Hacking",
      experience: "12 Years",
      achievements: "CEH Certified Expert"
    },
    {
      name: "Dr. Harish Kumar",
      department: "Computer Science",
      subject: "Theory of Computation",
      specialization: "Automata Theory",
      experience: "17 Years",
      achievements: "Published 40+ Journals"
    },
    {
      name: "Dr. Meghana Reddy",
      department: "AI & ML",
      subject: "Data Mining",
      specialization: "Big Data Analytics",
      experience: "10 Years",
      achievements: "Data Science Excellence Award"
    },
    {
      name: "Dr. Rohit Agarwal",
      department: "Computer Science",
      subject: "Compiler Design",
      specialization: "Programming Languages",
      experience: "15 Years",
      achievements: "National Teaching Excellence Award"
    },
    {
      name: "Dr. Lakshmi Devi",
      department: "Information Technology",
      subject: "Web Technologies",
      specialization: "Full Stack Development",
      experience: "7 Years",
      achievements: "MERN Stack Specialist"
    },
    {
      name: "Dr. Kiran Kumar",
      department: "Computer Science",
      subject: "Java Programming",
      specialization: "Enterprise Applications",
      experience: "11 Years",
      achievements: "Oracle Certified Professional"
    },
    {
      name: "Dr. Swathi Nair",
      department: "Information Technology",
      subject: "Python Programming",
      specialization: "Automation & AI",
      experience: "9 Years",
      achievements: "Python Community Speaker"
    },
    {
      name: "Dr. Ajay Verma",
      department: "Cyber Security",
      subject: "Information Security",
      specialization: "Digital Forensics",
      experience: "13 Years",
      achievements: "National Cyber Security Consultant"
    },
    {
      name: "Dr. Divya Menon",
      department: "AI & ML",
      subject: "Natural Language Processing",
      specialization: "Generative AI",
      experience: "8 Years",
      achievements: "AI Innovation Award"
    },
    {
      name: "Dr. Nikhil Reddy",
      department: "Computer Science",
      subject: "Computer Graphics",
      specialization: "3D Rendering",
      experience: "14 Years",
      achievements: "Graphics Research Fellowship"
    }
  ];

  return (
    <div className="page">
      <h1>Faculty Management</h1>

      <div className="recommendation-card">
        <h2>Faculty Directory</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Subject</th>
              <th>Specialization</th>
              <th>Experience</th>
              <th>Achievements</th>
            </tr>
          </thead>

          <tbody>
            {faculty.map((f, index) => (
              <tr key={index}>
                <td>{f.name}</td>
                <td>{f.department}</td>
                <td>{f.subject}</td>
                <td>{f.specialization}</td>
                <td>{f.experience}</td>
                <td>{f.achievements}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Faculty;