import React from 'react'
import "./dock.scss"

const Dock = ({windows, setwindows}) => {
   return (
      <footer className='dock'>

         {/* GitHub Toggle */}
         <div
            onClick={() => setwindows(state => ({ ...state, github: !state.github }))}
            className="icon github"><img src="/doc-iconss/github.svg" alt="" /></div>

         {/* Note Toggle */}
         <div
            onClick={() => setwindows(state => ({ ...state, note: !state.note }))}
            className="icon note"><img src="/doc-iconss/note.svg" alt="" /></div>

         {/* Resume Toggle (Fixing the 'pdf' vs 'resume' name issue here too) */}
         <div
            onClick={() => setwindows(state => ({ ...state, resume: !state.resume }))}
            className="icon pdf"><img src="/doc-iconss/pdf.svg" alt="" /></div>

         <div 
         onClick={() => { window.open("https://calendar.google.com", "_blank") }}
         className="icon calender"><img src="/doc-iconss/calender.svg" alt="" /></div>

<div
         onClick={() => { window.open("https://www.google.com", "_blank") }}
         className="icon google"><img src="/doc-iconss/google.svg" alt="" /></div>
         {/* Calculator Toggle */}
         <div
            onClick={() => setwindows(state => ({ ...state, calculator: !state.calculator }))}
            className="icon calculator"><img src="/doc-iconss/calculator.svg" alt="" /></div>

         {/* Spotify Toggle */}
         <div
            onClick={() => setwindows(state => ({ ...state, spotify: !state.spotify }))}
            className="icon spotify"><img src="/doc-iconss/spotify.svg" alt="" /></div>

         <div 
               onClick={() => {
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=siddzibran@gmail.com", "_blank")
  }}
         className="icon mail "><img src="/doc-iconss/mail.svg" alt="mail" /></div>
         <div 
         onClick={() => { window.open("https://www.linkedin.com/in/zibran-ahmed-siddiqui-8803a7379/?originalSubdomain=in", "_blank") }}
         className="icon links"><img src="/doc-iconss/link.svg" alt="" /></div>
 <div 
  className="icon maps"
  onClick={() => { window.open("https://maps.google.com", "_blank") }}
>
  <img src="/doc-iconss/mapss.svg" alt="Google Maps" />
</div>
 
         {/* CLI Toggle */}
         <div
            onClick={() => setwindows(state => ({ ...state, cli: !state.cli }))}
            className="icon cli " ><img src="/doc-iconss/cli.svg" alt="" /></div>

      </footer>
   )
}

export default Dock