function DashboardCards() {
  const cards = [
    {
      title: "Faculty Members",
      value: 24,
      icon: "👨‍🏫"
    },
    {
      title: "Subjects",
      value: 18,
      icon: "📚"
    },
    {
      title: "Classrooms",
      value: 12,
      icon: "🏫"
    },
    {
      title: "Generated Schedules",
      value: 32,
      icon: "📅"
    }
  ]

  return (
    <div className="cards">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <h2>{card.icon}</h2>
          <h3>{card.title}</h3>
          <p>{card.value}</p>
        </div>
      ))}
    </div>
  )
}

export default DashboardCards