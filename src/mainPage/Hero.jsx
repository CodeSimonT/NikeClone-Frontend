import React from "react";

const Hero = () => {
  return (
    <div className="hero-container">
      <video autoPlay muted loop className="hero-video">
        <source
          src="src/Greatest LeBron James commercial ever!.mp4"
          type="video/mp4"
        />
      </video>
      <div className="hero-content">
        <h1>Welcome to My Website</h1>
        <p>Enjoy the immersive experience!</p>
      </div>
    </div>
  );
};

export default Hero;
