import { useEffect, useState, useRef } from "react";
import logo from "../assets/images/logo-scroll.svg";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/components/Header.css";

function Header() {
  const location = useLocation();
  const navigationRef = useRef();
  const navButtonTop = useRef();
  const navButtonMiddle = useRef();
  const navButtonBottom = useRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function navAnimation() {
    window.document.body.classList.toggle("scroll-block");
    navigationRef.current.classList.toggle("open");
    navButtonTop.current.classList.toggle("open");
    navButtonMiddle.current.classList.toggle("open");
    navButtonBottom.current.classList.toggle("open");
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (isMenuOpen) {
      navAnimation();
    }
  }, [location.pathname]);

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav ref={navigationRef}>
          <ul className="nav-items">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link exact="true" to="/">
                Anasayfa
              </Link>
            </li>
            <li className={location.pathname === "/hakkimizda" ? "active" : ""}>
              <Link to="/hakkimizda">Hakkımızda</Link>
            </li>
            <li className={location.pathname === "/hizmetlerimiz" ? "active" : ""}>
              <Link to="/hizmetlerimiz">Hizmetlerimiz</Link>
            </li>
            <li className={location.pathname === "/ortaklarimiz" ? "active" : ""}>
              <Link to="/ortaklarimiz">Ortaklarımız</Link>
            </li>
            <li className={location.pathname === "/blog" ? "active" : ""}>
              <Link to="/blog">Yayınlar</Link>
            </li>
            <li className={location.pathname === "/iletisim" ? "active" : ""}>
              <Link to="/iletisim">İletişim</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-menu-button" onClick={navAnimation}>
          <span
            ref={navButtonTop}
            className="rectangle rectangle--top rectangle--small"
          ></span>
          <span
            ref={navButtonMiddle}
            className="rectangle rectangle--middle"
          ></span>
          <span
            ref={navButtonBottom}
            className="rectangle rectangle--bottom rectangle--small"
          ></span>
        </div>
      </header>
    </>
  );
}

export default Header;
