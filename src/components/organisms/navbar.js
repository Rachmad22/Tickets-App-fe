import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar/navbar.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  let [movie, setMovie] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState(true);
  const checkProfile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  const [isSignIn, setIsSignIn] = React.useState(
    localStorage.getItem("isSignIn")
  );
  const [profile, setProfile] = React.useState(checkProfile);
  let [keyword, setKeyword] = React.useState("");

  const fetchByKeyword = () => {
    setMovie([])
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/movies/search/${keyword}`
      )
      .then(({ data }) => {
        
        setMovie(data?.data);
      })
      .catch(() => setMovie([]))
      .finally(() => setIsLoading(false));
  }

  return (
    <div id="navbar" style={{ fontFamily: "inherit" }}>
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
                    onChange={(event) => {
                      setKeyword(event.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        navigate("/View-all");
                        fetchByKeyword();
                      }
                    }}
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
              <>
                <form className="d-flex" role="Sign In">
                  <Link
                    to="/Sign-in"
                    className="btn btn-outline-primary me-2 Sign-In"
                    type="submit"
                  >
                    Sign In
                  </Link>
                </form>
                <form className="d-flex" role="Sign Up">
                  <Link
                    to="/Sign-up"
                    className="btn btn-primary Sign-Up"
                    type="submit"
                  >
                    Sign Up
                  </Link>
                </form>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}
