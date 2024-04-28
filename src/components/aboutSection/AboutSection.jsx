"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Typed from "typed.js";

function AboutSection() {
  const getRandomImage = () => {
    const images = [
      "profile-pic (5).png",
      "profile-pic (6).png",
      "profile-pic (4).png",
      "profile-pic (3).png",
      "profile-pic (2).png",
      "profile-pic (1).png",
      "profile-pic.png",
      "mlogo.png",
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    setImageUrl(`/images/${getRandomImage()}`);
    const typed = new Typed(".typing-2", {
      strings: [
        "Sr. Sofware Engineer",
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
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About Me</h2>
          <div className="about-content">
            <div className="column left">
              <Image
                width={626}
                height={626}
                src={imageUrl}
                alt="Profile Image 626x626"
              />
            </div>
            <div className="column right">
              <div className="text">
                I&apos;m Mohit Kumar and I&apos;m a{" "}
                <span className="typing-2"></span>
              </div>
              <p>
                About 5 years of experience in software engineering using
                different programming languages with developing and deploying
                APIs. Worked as Key Developer and Team Leader in small on-site
                as well as in distributed tears.
              </p>
              <p>
                I have been working as a Node.js/Laravel backend developer, so
                the backend stack (Laravel, Node.js, PHP, SQL/NoSQL, UNIX-like
                systems etc.) is more comfortable for me. In addition to this, I
                am also into front-end development (React JS, Next JS) and
                DevOps tools (Docker, AWS).
              </p>
              <br />
              <div className="text">Why Work With Me</div>
              <p>
                Experienced full stack developer dedicated to delivering
                high-quality solutions, with a focus on efficiency, innovation,
                and client satisfaction.
              </p>

              <a href="/images/MohitKumarFullStack5YE.pdf" target="blank">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
