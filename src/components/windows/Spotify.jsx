import React from 'react'
import MacWindow from './MacWindows'
import "./spotify.scss"
const Spotify = () => {
  return (
    <MacWindow width='25vw'height='25vw'>
        <div className="spotify-window">
           <iframe data-testid="embed-iframe" style={{borderRadius: "12px",height:"100%"}} src="https://open.spotify.com/embed/playlist/4AFvz6zPkB0WP4Spsqpp0c?utm_source=generator&theme=0" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </MacWindow>
  )
}

export default Spotify
