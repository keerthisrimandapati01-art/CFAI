import jsPDF from "jspdf";

function Timetable() {

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("AcademicFlow Enterprise", 20, 20);

    doc.setFontSize(12);

    doc.text("Computer Science - Semester V", 20, 35);

    doc.text("Monday", 20, 50);
    doc.text("DS | DBMS | OS | CN | Lunch | SE | DBMS Lab", 50, 50);

    doc.text("Tuesday", 20, 65);
    doc.text("Algo | OS | CN | DBMS | Lunch | DS | Project", 50, 65);

    doc.text("Wednesday", 20, 80);
    doc.text("SE | DS | DBMS | Algo | Lunch | CN Lab", 50, 80);

    doc.text("Thursday", 20, 95);
    doc.text("OS | CN | DS | DBMS | Lunch | SE", 50, 95);

    doc.text("Friday", 20, 110);
    doc.text("Algo | DBMS | OS | CN | Lunch | DS Lab", 50, 110);

    doc.text("Saturday", 20, 125);
    doc.text("Mentoring | Soft Skills | Library | Sports", 50, 125);

    doc.save("AcademicFlow_Timetable.pdf");

    alert("✅ Timetable exported successfully!");
  };

  return (
    <div className="page">

      <h1>University Timetable</h1>

      <div className="recommendation-card">

        <h2>Computer Science - Semester V</h2>

        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>09:00 - 10:00</th>
              <th>10:00 - 11:00</th>
              <th>11:00 - 12:00</th>
              <th>12:00 - 01:00</th>
              <th>01:00 - 02:00</th>
              <th>02:00 - 03:00</th>
              <th>03:00 - 04:00</th>
              <th>04:00 - 05:00</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Monday</td>
              <td>Data Structures</td>
              <td>DBMS</td>
              <td>Operating Systems</td>
              <td>Computer Networks</td>
              <td>Lunch</td>
              <td>Software Engineering</td>
              <td>DBMS Lab</td>
              <td>DBMS Lab</td>
            </tr>

            <tr>
              <td>Tuesday</td>
              <td>Algorithms</td>
              <td>Operating Systems</td>
              <td>Computer Networks</td>
              <td>DBMS</td>
              <td>Lunch</td>
              <td>Data Structures</td>
              <td>Project Work</td>
              <td>Project Work</td>
            </tr>

            <tr>
              <td>Wednesday</td>
              <td>Software Engineering</td>
              <td>Data Structures</td>
              <td>DBMS</td>
              <td>Algorithms</td>
              <td>Lunch</td>
              <td>CN Lab</td>
              <td>CN Lab</td>
              <td>Seminar</td>
            </tr>

            <tr>
              <td>Thursday</td>
              <td>Operating Systems</td>
              <td>Computer Networks</td>
              <td>Data Structures</td>
              <td>DBMS</td>
              <td>Lunch</td>
              <td>Software Engineering</td>
              <td>Project Work</td>
              <td>Library</td>
            </tr>

            <tr>
              <td>Friday</td>
              <td>Algorithms</td>
              <td>DBMS</td>
              <td>Operating Systems</td>
              <td>Computer Networks</td>
              <td>Lunch</td>
              <td>DS Lab</td>
              <td>DS Lab</td>
              <td>Placement Training</td>
            </tr>

            <tr>
              <td>Saturday</td>
              <td>Mentoring</td>
              <td>Soft Skills</td>
              <td>Library</td>
              <td>Sports</td>
              <td>Lunch</td>
              <td>Workshop</td>
              <td>Workshop</td>
              <td>Club Activities</td>
            </tr>

          </tbody>
        </table>

        <br />

        <button onClick={exportPDF}>
          Export Timetable PDF
        </button>

      </div>

    </div>
  );
}

export default Timetable;