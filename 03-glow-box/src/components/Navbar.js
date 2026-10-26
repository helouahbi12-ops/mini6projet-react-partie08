import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Accueil", href: "#accueil" },
    { label: "Produits", href: "#produits" },
  ];

  return (
    <nav className="glow-navbar">
      <div className="glow-navbar-inner">
        <a href="#accueil" className="glow-navbar-brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Glow Box" className="glow-navbar-logo" />
          <span>Glow Box</span>
        </a>

        <button
          className="glow-navbar-toggle"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={open ? "glow-navbar-links glow-navbar-open" : "glow-navbar-links"}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#produits" className="glow-navbar-cta" onClick={() => setOpen(false)}>
              Trouver mon soin
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;