import React from 'react'
import MacWindow from './MacWindow'

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate()
}

const Calendar = ({ windowName, setWindowsState }) => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const days = getDaysInMonth(year, month)

  const cells = []
  for (let i = 0; i < firstDay; i += 1) {
    cells.push(null)
  }
  for (let d = 1; d <= days; d += 1) {
    cells.push(d)
  }

  return (
    <MacWindow width="28vw" height="45vh" windowName={windowName} setWindowsState={setWindowsState}>
      <div style={{ padding: "1rem", color: "white" }}>
        <h2 style={{ marginTop: 0 }}>{today.toLocaleString("default", { month: "long" })} {year}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "0.4rem", textAlign: "center" }}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((label) => (
            <strong key={label} style={{ fontSize: "0.8rem" }}>{label}</strong>
          ))}
          {cells.map((day, idx) => (
            <div
              key={`${day ?? "empty"}-${idx}`}
              style={{
                minHeight: "1.9rem",
                borderRadius: "0.35rem",
                background: day === today.getDate() ? "rgba(105,94,255,0.9)" : "rgba(255,255,255,0.08)",
                display: "grid",
                placeItems: "center",
                fontSize: "0.85rem",
              }}
            >
              {day ?? ""}
            </div>
          ))}
        </div>
      </div>
    </MacWindow>
  )
}

export default Calendar
