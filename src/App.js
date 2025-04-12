import { useEffect, useRef } from "react";
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
import logo from './assets/logo2.png';
import figma from './assets/figma.svg'

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const GenieLandingPage = () => {
  const sparkleButtonRef = useRef(null);

  useEffect(() => {
    const PARTICLES = document.querySelectorAll(".particle");
    PARTICLES.forEach((P) => {
      P.setAttribute(
        "style",
        `
        --x: ${random(20, 80)};
        --y: ${random(20, 80)};
        --duration: ${random(6, 20)};
        --delay: ${random(1, 10)};
        --alpha: ${random(40, 90) / 100};
        --origin-x: ${Math.random() > 0.5 ? random(300, 800) * -1 : random(300, 800)}%;
        --origin-y: ${Math.random() > 0.5 ? random(300, 800) * -1 : random(300, 800)}%;
        --size: ${random(40, 90) / 100};
      `
      );
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
        timeouts.push(
          setTimeout(() => {
            animate(star);
            intervals.push(setInterval(() => animate(star), 1000));
          }, index++ * 300)
        );
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
    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <div className="container">
      <div className="navbar nav-entrance">
        <a className="logo" href="#">
          <img src={logo} alt="logo" /> Genie
        </a>
        <div className="navlinks">
          <a href="#">Models</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">About</a>
        </div>
        <div className="top-shadow shadow-entrance"></div>
        <a className="waitlist" href="#">
          <span>Join the Waitlist</span>
        </a>
      </div>
      <h1 className="container-entrance">
        Dream it. Wish it.{' '}
        <span className="magic">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="magic-star">
              <svg viewBox="0 0 512 512">
                <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
              </svg>
            </span>
          ))}
          <span className="magic-text">Genie</span>
        </span>{' '}
        grants it.
      </h1>

      <div className="marble"></div>
      <div className="prompt container-entrance">
        <div className="textarea-wrapper">
          <div className="textarea-gradient shadow-entrance"></div>
          <textarea
            className="textarea"
            rows={4}
            placeholder="I wish for a landing page for an e-commerce website..."
          ></textarea>
          <div className="textarea-gradient2"></div>
        </div>
        <div className="buttons container-entrance">
          <div className="sparkle-button">
            <button ref={sparkleButtonRef}>
              <span className="spark"></span>
              <span className="backdrop"></span>
              <svg className="sparkle" viewBox="0 0 24 24">
                <path d="M14.187 8.096L15 5.25..." />
              </svg>
              <span className="text">Generate</span>
            </button>
            <div className="bodydrop"></div>
            <span aria-hidden="true" className="particle-pen">
              {[...Array(15)].map((_, i) => (
                <svg
                  key={i}
                  className="particle"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.937 3.846L7.75 1L8.563 3.846..." />
                </svg>
              ))}
            </span>
          </div>

          <button className="figma">
            <img src={figma} width="15" height="15" alt="Figma" />
            <span className="text">Import from Figma</span>
          </button>
        </div>
      </div>

      <div className="line container-entrance">
        <div className="line-shadow shadow-entrance"></div>
      </div>

      <div className="steps-container">
        <h1 className="scroll-animate">From Wish to Reality — Instantly.</h1>
        <div className="steps">
          {[
            { title: "✨ Make a Wish", subtitle: "Type your wish into the prompt.", icon: "fa-terminal" },
            { title: "🪄 Watch the Magic", subtitle: "Poof! Genie conjures up the code.", icon: "fa-window-restore" },
            { title: "💫 Grant Your Wish", subtitle: "Tweak it, remix it, or deploy it.", icon: "fa-cloud-arrow-up" }
          ].map((step, index) => (
            <div key={index} className="step scroll-animate">
              <div className="step-text">
                <h1>{step.title}</h1>
                <div className="step-subheader">{step.subtitle}</div>
              </div>
              <div className="step-icon">
                <i className={`fa-solid ${step.icon}`}></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenieLandingPage;
