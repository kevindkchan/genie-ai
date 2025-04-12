import { useRef, useState } from "react";
import figma from '../assets/figma.svg';

const Prompt = () => {
  const sparkleButtonRef = useRef(null);
  const [showGradient, setShowGradient] = useState(false);

  return (
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
            {/* SVG & Text Content */}
            <span className="text">Generate</span>
          </button>
          <div className="bodydrop"></div>
          <span aria-hidden="true" className="particle-pen">
            {[...Array(15)].map((_, i) => (
              <svg key={i} className="particle" viewBox="0 0 15 15">
                <path d="..." />
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
  );
};

export default Prompt;
