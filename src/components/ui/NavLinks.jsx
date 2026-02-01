import React from "react";
import navLinks from "../../app_data/navLinks";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div>
      <div className="links flex items-center gap-4">
        <img src="/public/book-bookmark 1.png" alt="" />
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink to={link.url}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavLinks;
