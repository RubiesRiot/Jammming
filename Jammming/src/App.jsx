import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// An array of tracks to pull from before implementing the Spotify API. This array holds a few song objects.
const mockTracks = [
  {
    id: 1,
    name: "Dreams",
    artist: "Fleetwood Mac",
    album: "Rumours"
  },
  {
    id: 2,
    name: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV"
  },
  {
    id: 3,
    name: "Hotel California",
    artist: "Eagles",
    album: "Hotel California"
  }
];

function App() {
  const [searchResults, setSearchResults] = useState(mockTracks);

  return (
    <div className='App'>
      <h1>Jammming</h1>
      {/* This is essentially "SearchResults({ tracks: searchResults })" as react instead. It is tracking the searchResults array that we initiated in the useState comment. The useState(mockTracks) sets "searchResults" to the mock array we made. The "tracks" here is because in SearchResults, we have declared the variable props.tracks */}
      <SearchResults tracks={searchResults} />
    </div>
  )
}

export default App
