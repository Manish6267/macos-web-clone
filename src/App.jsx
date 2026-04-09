import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'
import Calendar from './components/windows/Calendar'
import Mail from './components/windows/Mail'
import Links from './components/windows/Links'




function App() {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
    calendar: false,
    mail: false,
    links: false
  })
  
  return (
    <main>
      <Nav />
      <Dock windowsState={windowsState} setWindowsState={setWindowsState} />
      { windowsState.github && <Github windowName="github" setWindowsState={setWindowsState} />}
      { windowsState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      { windowsState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      { windowsState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      { windowsState.cli && <Cli windowName="cli" setWindowsState={setWindowsState} />}
      { windowsState.calendar && <Calendar windowName="calendar" setWindowsState={setWindowsState} />}
      { windowsState.mail && <Mail windowName="mail" setWindowsState={setWindowsState} />}
      { windowsState.links && <Links windowName="links" setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App