import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    const para = document.getElementById("animatedText");
    if (para) {
      const words = para.textContent.trim().split(" ");
      para.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");
    }
  }, []);

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p id="animatedText" className="highlight-text">
        Hey there! I’m an IT engineer with a heart for creating meaningful things — from building smart,
        impactful tech solutions to capturing life’s adventures through travel. Whether I’m coding
        a project or crafting a story, my goal is simple: to make it all count and connect with people.
        Welcome to my journey.
      </p>
    </section>
  );
}

export default About;
