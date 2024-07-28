import React from "react";
import logoLight from "./../../assets/logo-light.svg";
import logoDark from "./../../assets/logo-dark.svg";

function LogoImage({ src, className }) {
  return (
    <img src={src} alt="DevBlog's Logo" width="150" className={className} />
  );
}

function FooterLink({ text }) {
  return (
    <li>
      <a href="#" className="footer-link">
        {text}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
          <a href="#" className="footer-logo">
            <LogoImage src={logoLight} className="logo-light" />
            <LogoImage src={logoDark} className="logo-dark" />
          </a>

          <p className="footer-text">
            Learn about Web accessibility, Web performance, and Database
            management.
          </p>
        </div>

        <div className="wrapper">
          <p className="footer-title">Quick Links</p>

          <ul>
            <FooterLink text="Advertise with us" />
            <FooterLink text="About Us" />
            <FooterLink text="Contact Us" />
          </ul>
        </div>

        <div className="wrapper">
          <p className="footer-title">Legal Stuff</p>

          <ul>
            <FooterLink text="Privacy Notice" />
            <FooterLink text="Cookie Policy" />
            <FooterLink text="Terms Of Use" />
          </ul>
        </div>
      </div>

      <p className="copyright">
        &copy; Copyright 2022 <a href="#">DevBlog</a>
      </p>
    </footer>
  );
}
