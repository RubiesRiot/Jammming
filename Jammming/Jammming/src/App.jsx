import { useState } from 'react'
import './App.css'
import Tracklist from './components/Tracklist/Tracklist.jsx'
import Playlist from './components/Playlist/Playlist.jsx'

function App() {
  const [playlistName, setPlaylistName] = useState('My Custom Playlist')
  const [playlistTracks, setPlaylistTracks] = useState([
    { id: 1, name: 'Poker Face', artist: 'Lady Gaga', album: 'The Fame' },
    { id: 2, name: 'Tik Tok', artist: 'Ke$ha', album: 'Monster' },
    { id: 3, name: 'Set Fire to the Rain', artist: 'Adele', album: '21' },
  ]);

  return (
    <>
    <h1>Jammming</h1>
        {/* Pass the state values down to Playlist as props */}
        <Playlist 
          playlistName={playlistName} 
          playlistTracks={playlistTracks} 
        />
    </>
  )
}

export default App