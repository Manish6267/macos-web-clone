import React from 'react'
import MacWindow from './MacWindow'

const links = [
  { title: "GitHub Profile", href: "https://github.com/Manish6267" },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/manish-kumar-a3216a37a" },
  { title: "Resume (PDF)", href: "/resume.pdf" },
]

const Links = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow width="28vw" height="36vh" windowName={windowName} setWindowsState={setWindowsState}>
      <div style={{ padding: "1rem", color: "white" }}>
        <h2 style={{ marginTop: 0 }}>Quick Links</h2>
        <div style={{ display: "grid", gap: "0.6rem" }}>
          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{ color: "white", textDecoration: "none", background: "rgba(255,255,255,0.12)", padding: "0.7rem", borderRadius: "0.45rem" }}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </MacWindow>
  )
}

export default Links
