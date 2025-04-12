import logo from '../assets/logo2.png';

const Navbar = () => (
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
);

export default Navbar;
