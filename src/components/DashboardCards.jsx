function DashboardCards() {
  const cards = [
    {
      title: "Faculty",
      value: "120+",
      icon: "👨‍🏫",
    },
    {
      title: "Subjects",
      value: "380+",
      icon: "📚",
    },
    {
      title: "Rooms",
      value: "42",
      icon: "🏫",
    },
    {
      title: "Timetables",
      value: "50K+",
      icon: "📅",
    },
  ];

  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-icon">{card.icon}</div>

          <h3>{card.title}</h3>

          <p>{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;