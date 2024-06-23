"use client";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";

function HomeSection() {
  const [backgroundImage, setBackgroundImage] = useState("");
  const getRandomImage = () => {
    const images = [
      "anas-alshanti-unsplash.jpg",
      "creative-designer-gadget.jpg",
      "domenico-loia-unsplash.jpg",
      "glenn-carstens-peters-unsplash.jpg",
      "ilya-pavlov-unsplash.png",
      "lauren-mancke-unsplash.jpg",
      "sabri-tuzcu-unsplash.jpg",
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
  useEffect(() => {
    setBackgroundImage(`/images/portfolio_image/${getRandomImage()}`);
    const typed = new Typed(".typing", {
      strings: [
        "Fullstack Developer",
        "Backend Developer",
        "Laravel Developer",
        "nodeJs Developer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section
        className="home"
        id="home"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, This is</div>
            <div className="text-2">Mohit Kumar</div>
            <div className="text-3">
              And I&quot;m a <span className="typing"></span>
            </div>
            <a href="#">Hire me</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeSection;
