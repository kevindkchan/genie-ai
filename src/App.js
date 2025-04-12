import { useEffect, useRef, useState } from "react";
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
import figma from './assets/figma.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const GenieLandingPage = () => {
  const sparkleButtonRef = useRef(null);
  const [showGradient, setShowGradient] = useState(false);

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
          <div className={`textarea-gradient2 ${showGradient ? "show" : ""}`}></div>
        </div>
        <div className="buttons container-entrance">
          <div className="sparkle-button">
            <button 
              ref={sparkleButtonRef}
              onMouseEnter={() => setShowGradient(true)}
              onMouseLeave={() => setShowGradient(false)}
            >
              <span className="spark"></span>
              <span className="backdrop"></span>
              <svg className="sparkle" viewBox="0 0 24 24">
                <path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
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
                  <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="black" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
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
