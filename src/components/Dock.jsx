import React from 'react'
import "../dock.scss"

const Dock = ({ windowsState, setWindowsState }) => {
  const toggleWindow = (windowName) => {
    setWindowsState((prev) => ({
      ...prev,
      [windowName]: !prev[windowName],
    }))
  }

  return (
    <footer className='dock'>
      <button className={`icon github ${windowsState.github ? "active" : ""}`} onClick={() => toggleWindow("github")}>
        <img src={`${import.meta.env.BASE_URL}doc-icons/github.svg`} alt="GitHub" />
      </button>

      <button className={`icon note ${windowsState.note ? "active" : ""}`} onClick={() => toggleWindow("note")}>
        <img src={`${import.meta.env.BASE_URL}doc-icons/note.svg`} alt="Notes" />
      </button>

      <button className={`icon pdf ${windowsState.resume ? "active" : ""}`} onClick={() => toggleWindow("resume")}>
        <img src={`${import.meta.env.BASE_URL}doc-icons/pdf.svg`} alt="Resume" />
      </button>

      <button className={`icon calender ${windowsState.calendar ? "active" : ""}`} onClick={() => toggleWindow("calendar")}>
        <img src={`${import.meta.env.BASE_URL}doc-icons/calender.svg`} alt="Calendar" />
      </button>

      <button className={`icon spotify ${windowsState.spotify ? "active" : ""}`} onClick={() => toggleWindow("spotify")}>
        <img src={`${import.meta.env.BASE_URL}doc-icons/spotify.svg`} alt="Spotify" />
      </button>

      <button className={`icon mail ${windowsState.mail ? "active" : ""}`} onClick={() => toggleWindow("mail")}>
        <img src={`${import.meta.env.BASE_URL}doc-icons/mail.svg`} alt="Mail" />
      </button>

      <button className={`icon link ${windowsState.links ? "active" : ""}`} onClick={() => toggleWindow("links")}>
        <img src={`${import.meta.env.BASE_URL}doc-icons/link.svg`} alt="Profile Link" />
      </button>

      <button className={`icon cli ${windowsState.cli ? "active" : ""}`} onClick={() => toggleWindow("cli")}>
        <img src={`${import.meta.env.BASE_URL}doc-icons/cli.svg`} alt="CLI" />
      </button>
    </footer>
  )
}

export default Dock