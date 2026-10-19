import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Accueil", href: "#accueil" },
    { label: "Produits", href: "#produits" },
  ];

  function closeMenu() {
    setOpen(false);
  }

  return (
    <nav className="glow-navbar">
      <div className="glow-navbar-inner">
        <a href="#accueil" className="glow-navbar-brand" onClick={closeMenu}>
          <img src={logo} alt="Glow Box" className="glow-navbar-logo" />
          <span>Glow Box</span>
        </a>

        <button
          className="glow-navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={open ? "glow-navbar-links glow-navbar-open" : "glow-navbar-links"}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#produits" className="glow-navbar-cta" onClick={closeMenu}>
              Trouver mon soin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;