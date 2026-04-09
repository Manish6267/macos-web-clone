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
      <button type="button" className={`icon github ${windowsState.github ? "active" : ""}`} onClick={() => toggleWindow("github")}><img src="/doc-icons/github.svg" alt="GitHub" /></button>
      <button type="button" className={`icon note ${windowsState.note ? "active" : ""}`} onClick={() => toggleWindow("note")}><img src="/doc-icons/note.svg" alt="Notes" /></button>
      <button type="button" className={`icon pdf ${windowsState.resume ? "active" : ""}`} onClick={() => toggleWindow("resume")}><img src="/doc-icons/pdf.svg" alt="Resume" /></button>
      <button type="button" className={`icon calender ${windowsState.calendar ? "active" : ""}`} onClick={() => toggleWindow("calendar")}><img src="/doc-icons/calender.svg" alt="Calendar" /></button>
      <button type="button" className={`icon spotify ${windowsState.spotify ? "active" : ""}`} onClick={() => toggleWindow("spotify")}><img src="/doc-icons/spotify.svg" alt="Spotify" /></button>
      <button type="button" className={`icon mail ${windowsState.mail ? "active" : ""}`} onClick={() => toggleWindow("mail")}><img src="/doc-icons/mail.svg" alt="Mail" /></button>
      <button type="button" className={`icon link ${windowsState.links ? "active" : ""}`} onClick={() => toggleWindow("links")}><img src="/doc-icons/link.svg" alt="Profile Link" /></button>
      <button type="button" className={`icon cli ${windowsState.cli ? "active" : ""}`} onClick={() => toggleWindow("cli")}><img src="/doc-icons/cli.svg" alt="CLI" /></button>
    </footer>

  )
}

export default Dock
