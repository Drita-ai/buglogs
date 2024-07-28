import React from "react";

export default function MobileNav() {
  return (
    <div className="mobile-nav">
      <button className="nav-close-btn">
        <ion-icon name="close-outline"></ion-icon>
      </button>

      <div className="wrapper">
        <p className="h3 nav-title">Main Menu</p>

        <ul>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              About Me
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="h3 nav-title">Topics</p>

        <ul>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Database
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              Accessibility
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              Web Performance
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
