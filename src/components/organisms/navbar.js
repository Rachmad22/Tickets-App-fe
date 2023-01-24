import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar/navbar.css";

export default function Navbar() {
  const checkProfile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  const [isSignIn, setIsSignIn] = React.useState(
    localStorage.getItem("isSignIn")
  );
  const [profile, setProfile] = React.useState(checkProfile);

  return (
    <div id="navbar">
      <div
        className="container-fluid shadow-sm"
        style={{
          position: "fixed",
          zIndex: "1",
          backgroundColor: "white",
          marginTop: "-80px",
          height: "80px",
        }}
      >
        <nav className="container navbar navbar-expand-lg bg-body-tertiary pt-3">
          <img
            src={require("../../asset/icon-nav.webp")}
            alt="icon-app"
            style={{ width: "120px" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ps-5">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item ps-5">
                <Link
                  to="/View-all"
                  className="nav-link active"
                  aria-current="page"
                >
                  List Movie
                </Link>
              </li>
            </ul>
            {isSignIn ? (
              <>
                <div style={{ widht: "10px", marginRight: "30px" }}>
                  <input
                    type="search"
                    className="form-control d-inline"
                    id="exampleFormControlInput1"
                    placeholder="Search Movie Name..."
                  />
                </div>

                <div className="">
                  <Link to="/Profile-setting">
                    <img
                      src={profile?.photo}
                      style={{ width: "50px" }}
                      className="rounded-circle border shadow-sm"
                      alt="photo-profile"
                    />
                  </Link>
                </div>
              </>
            ) : (
              <form className="d-flex" role="Sign Up">
                <Link to="/Sign-up" className="btn btn-primary" type="submit">
                  Sign Up
                </Link>
              </form>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
