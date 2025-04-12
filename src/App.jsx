import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Prompt from "./components/Prompt";
import { Sparkles } from "./components/Sparkles";
import Steps from "./components/Steps";
import { Footer } from "./components/Footer";
import { 
  Github, 
  Twitter, 
  Blocks,
  CodeXml,
  CreditCard,
  Handshake,
  Scale,
  Webhook, 
  Heart,
  Zap,
} from "lucide-react"

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
  const footerData = {
    brand: {
      name: "Genie",
      description: "Granting digital wishes, one app at a time.",
    },
    socialLinks: [
      { name: "GitHub", href: "https://github.com" },
      { name: "Twitter", href: "https://twitter.com" },
      { name: "Discord", href: "https://discord.com" },
    ],
    columns: [
      {
        title: "Product",
        links: [
          { name: "Features", href: "#", Icon: Blocks },
          { name: "Pricing", href: "#", Icon: CreditCard },
          { name: "Docs", href: "#", Icon: CodeXml },
        ],
      },
      {
        title: "Compare",
        links: [
          { name: "Bolt", href: "#", Icon: Zap },
          { name: "Lovable", href: "#", Icon: Heart },
        ],
      },
      {
        title: "Legal",
        links: [
          { name: "Privacy Policy", href: "#", Icon: Scale },
          { name: "Terms of Service", href: "#", Icon: Handshake },
        ],
      },
    ],
    copyright: "© 2025 Genie AI",
  }

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
    <div className="layout-container">
      <Navbar />
      <Header />
      <div className="marble"></div>
      <Prompt />
      <div className="shadow-entrance relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#8E27F7,transparent_70%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#7876c566] after:bg-zinc-900">
        <Sparkles
          density={1200}
          className="shadow-entrance absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
      <div className="line scroll-animate">
        <div className="line-shadow shadow-entrance"></div>
      </div>
      <Steps />
      <Footer
        brand={footerData.brand}
        socialLinks={footerData.socialLinks}
        columns={footerData.columns}
        copyright={footerData.copyright}
      />
    </div>
  );
};

export default GenieLandingPage;
