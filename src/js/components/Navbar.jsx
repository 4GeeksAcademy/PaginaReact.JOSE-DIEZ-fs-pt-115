
import React, { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">Naruto</a>
          
          <button
            className="navbar-toggler bg-white"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto text-white">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Konoha</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Ninjas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Maps</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};