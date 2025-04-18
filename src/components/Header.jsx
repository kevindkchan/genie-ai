const Header = () => (
    <h1 className="header-entrance font-rubik">
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
  );
  
  export default Header;
  