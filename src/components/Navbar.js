import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between mt-7 uppercase">
      <div>
        <HashLink smooth to="#home" className="link-item">
          Naymur Rahman
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-1">
        <li>
          <HashLink smooth to="#home" className="link-item">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#home" className="link-item">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#home" className="link-item">
            Project
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#home" className="link-item">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#home" className="link-item">
            Contacts
          </HashLink>
        </li>
        <li>
          <a
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            className="link-item"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
