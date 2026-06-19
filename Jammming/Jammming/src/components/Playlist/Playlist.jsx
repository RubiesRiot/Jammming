import './Playlist.css'
import Tracklist from '../Tracklist/Tracklist.jsx' 

function Playlist({ playlistName, playlistTracks }) {
  return (
    <div className="playlist-container">
      {/* An editable input for the playlist name */}
      <input 
        className="playlist-title-input" 
        value={playlistName} 
        onChange={() => { /* We will handle changes here later */ }}
      />
      
      {/* The Tracklist component, passing down the custom tracks */}
      <Tracklist tracks={playlistTracks} />

      {/* A button to eventually save the playlist to Spotify */}
      <button className="save-playlist-btn">SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist;