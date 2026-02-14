import { useState } from 'react'
import "./app.scss"
import Dock from './components/Dock'
import Nav from './components/Nav'
import Github from './components/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Calculator from './components/windows/Calculator'
import Cli from './components/windows/cli'
import { github } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

function App() {

const [windows, setwindows] = useState({
  github: false,
  note: false,
  resume: false,
  spotify: false,
  calculator: false,
  cli: false
})
  return (

    <main>
      <Nav />
      <Dock  windows={windows}  setwindows={setwindows}/>
     {windows.github && <Github windowName="GitHub" windows={windows}  setwindows={setwindows}/>}
      {windows.note && <Note windowName="Note" windows={windows}  setwindows={setwindows}/>}
      {windows.resume && <Resume windowName="Resume" windows={windows}  setwindows={setwindows}/>}
      {windows.spotify && <Spotify windowName="Spotify" windows={windows}  setwindows={setwindows}/>}
      {windows.calculator && <Calculator windowName="Calculator" windows={windows}  setwindows={setwindows}/>}
      {windows.cli && <Cli windowName="CLI" windows={windows} setwindows={setwindows} />}
    </main>

  )
}

export default App
