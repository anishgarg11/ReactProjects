import React from "react";
import "./style.css";
const Navbar = () => {
  const name = "Anish Garg";
  return (
    <>
      <nav>
        <div className="container">
          <h1 className="brand">
            {name}
          </h1>
          <ul className="nav-menu" >
            <li>
              <a href="/add">Home</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Subscribers</a>
            </li>
            <li class="login">
              <a href="#">Login</a>
            </li>
            <li class="signup">
              <a href="#">Signup</a>
            </li>
            <div className="close_btn" >
              <span className="material-symbols-outlined">Close</span>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
