import React from "react";
import { Link } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import { FaBlog } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdLogin } from "react-icons/md";

function Header() {
  return (
    <header>
      <div className="fr-header">
        <div className="fr-header-logo">
          <Link to={"/"}>
            <img
              src="https://logonoid.com/images/blogger-logo.png"
              alt="Blogger Logo"
              width={"100px"}
            />
          </Link>
        </div>
        <div className="fr-header-search">
          <input
            type="text"
            placeholder="Search..."
            className="fr-header-input"
          />
        </div>
        <div className="fr-header-menu">
          <div className="fr-header-menu-item">
            <Link to={"/"}>
              <IoHomeSharp className="fr-header-icon" />
              <span className="fr-header-label">Home</span>
            </Link>
          </div>
          <div className="fr-header-menu-item">
            <Link to={"/blogs"}>
              <FaBlog className="fr-header-icon" />

              <span className="fr-header-label">Blogs</span>
            </Link>
          </div>
          <div className="fr-header-menu-item">
            <Link to={"/category"}>
              <BiSolidCategoryAlt className="fr-header-icon" />
              <span className="fr-header-label">Category</span>
            </Link>
          </div>
          {/* <div>
          <Link to={"/signup"}>
            <MdLogin />
            Sign Up
          </Link>
        </div> */}
          <div className="fr-header-menu-item">
            <Link to={"/signIn"}>
              <MdLogin className="fr-header-icon" />
              <span className="fr-header-label">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
