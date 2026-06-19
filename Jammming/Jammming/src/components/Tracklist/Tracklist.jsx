import './Tracklist.css'

function Tracklist({ tracks }) {
  const tracksToRender = tracks || [];

  return (
    <div className="songs">
      {tracksToRender.map((song) => (
        <div 
          key={song.id} 
          className="song">
            {song.name}<br />
            {song.artist} | <span className="album">{song.album}</span>
        </div>
      ))}
    </div>
  )
};

export default Tracklist;