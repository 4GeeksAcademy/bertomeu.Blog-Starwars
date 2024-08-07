import React from 'react';

const AudioComponent = () => {
    
   
 
    
  return (
    <div>
      <audio controls autoPlay loop >
        <source
          id="audio-player"
          name="audio-player"
          src={"https://res.cloudinary.com/dyvut6idr/video/upload/v1722898729/B_S_O_STAR_WARS_yest3d.mp4"}
          type="audio/mp4"
        />
        {/* Fallback content */}
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default AudioComponent