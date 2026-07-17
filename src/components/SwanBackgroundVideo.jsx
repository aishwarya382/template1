import React from 'react';

const SwanBackgroundVideo = ({ videoSrc }) => {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-bg-red">
      {/* Fallback pattern if video is missing */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-80" />
      
      {/* Video Element */}
      {videoSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      
      {/* Gradient Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-red/80 via-bg-red/40 to-bg-red/90" />
    </div>
  );
};

export default SwanBackgroundVideo;
