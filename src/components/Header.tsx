import { NavLink } from "react-router-dom";


import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  return (
<header className="header sticky-top">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between p-4">

        <NavLink className="nav-link fs-3" to="/">
          My portfolio
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarContent"
          aria-expanded={expanded}
          aria-label="Toggle navigation"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarContent"
        >
          <ul className="navbar-nav ms-auto flex-lg-row gap-3 gap-lg-5 list-unstyled">

            <li className="nav-item">
              <NavLink
                className="nav-link fs-3"
                to="/projects"
                onClick={() => setExpanded(false)}
              >
                Prosjekter
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link fs-3"
                to="/experience"
                onClick={() => setExpanded(false)}
              >
                Jobb erfaring
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link fs-3"
                to="/education"
                onClick={() => setExpanded(false)}
              >
                Utdanning
              </NavLink>
            </li>


          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Header;
