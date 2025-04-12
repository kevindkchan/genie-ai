import { useEffect } from "react";
import Navbar from "./components/Navbar";
import MagicHeader from "./components/Header";
import PromptArea from "./components/Prompt";
import StepsSection from "./components/Steps";

import "./styles/style.css";
import "./styles/animations.css";
import "./styles/navbar.css";
import "./styles/waitlistbtn.css";
import "./styles/header.css";
import "./styles/button.css";
import "./styles/marble.css";
import "./styles/prompt.css";
import "./styles/steps.css";
import "./styles/divider.css";
import "./styles/mobile.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const GenieLandingPage = () => {
  useEffect(() => {
    const PARTICLES = document.querySelectorAll(".particle");
    PARTICLES.forEach((P) => {
      P.setAttribute("style", `
        --x: ${random(20, 80)};
        --y: ${random(20, 80)};
        --duration: ${random(6, 20)};
        --delay: ${random(1, 10)};
        --alpha: ${random(40, 90) / 100};
        --origin-x: ${Math.random() > 0.5 ? random(300, 800) * -1 : random(300, 800)}%;
        --origin-y: ${Math.random() > 0.5 ? random(300, 800) * -1 : random(300, 800)}%;
        --size: ${random(40, 90) / 100};
      `);
    });

    const stars = document.getElementsByClassName("magic-star");
    const magic = document.querySelector(".magic");
    let timeouts = [];
    let intervals = [];

    const animate = (star) => {
      star.style.setProperty("--star-left", `${random(-10, 100)}%`);
      star.style.setProperty("--star-top", `${random(-40, 80)}%`);
      star.style.animation = "none";
      void star.offsetHeight;
      star.style.animation = "";
    };

    magic?.addEventListener("mouseenter", () => {
      let index = 1;
      for (const star of stars) {
        timeouts.push(setTimeout(() => {
          animate(star);
          intervals.push(setInterval(() => animate(star), 1000));
        }, index++ * 300));
      }
    });

    magic?.addEventListener("mouseleave", () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
      timeouts = [];
      intervals = [];
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="container">
      <Navbar />
      <MagicHeader />
      <div className="marble"></div>
      <PromptArea />
      <div className="line container-entrance">
        <div className="line-shadow shadow-entrance"></div>
      </div>
      <StepsSection />
    </div>
  );
};

export default GenieLandingPage;
