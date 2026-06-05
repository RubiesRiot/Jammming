import React from 'react';
import './SearchResults.css';

function SearchResults(props) {
  // Props contains whatever was passed down from the parent. In this case, it contains the {searchResults} array, which is being passed into the useState in the App.jsx
  const tracks = props.tracks;

  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      
      {/* 4. Iterate over the array and render a list for each item */}
      <div className="TrackList">
        {tracks.map(track => (
          
          // 5. IMPORTANT: Each item needs a unique KEY 
          // (We use the track.id provided in your data requirements)
          <div key={track.id} className="Track">
            
            <div className="Track-information">
              <h3>{track.name}</h3>
              <p>{track.artist} | {track.album}</p>
            </div>
            
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default SearchResults;