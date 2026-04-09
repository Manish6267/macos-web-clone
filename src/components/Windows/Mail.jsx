import React, { useState } from 'react'
import MacWindow from './MacWindow'

const Mail = ({ windowName, setWindowsState }) => {
  const [to, setTo] = useState("manishkumar@example.com")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  return (
    <MacWindow width="36vw" height="48vh" windowName={windowName} setWindowsState={setWindowsState}>
      <div style={{ padding: "1rem", color: "white", display: "grid", gap: "0.65rem" }}>
        <h2 style={{ margin: 0 }}>Compose Mail</h2>
        <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="To" />
        <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={8} placeholder="Write your message..." />
        <a
          href={`mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`}
          style={{ color: "white", textDecoration: "none", background: "rgba(66,52,255,0.9)", padding: "0.55rem 0.85rem", borderRadius: "0.35rem", width: "fit-content" }}
        >
          Open Mail App
        </a>
      </div>
    </MacWindow>
  )
}

export default Mail
