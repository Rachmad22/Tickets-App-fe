import React from "react";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div style={{ fontFamily: "inherit" }}>
      <footer className="container footer">
        <div
          className="container"
          style={{ paddingTop: "100px", paddingBottom: "20px" }}
        >
          <div className="row">
            <div className="col-4">
              <img
                className="mb-3"
                src={require("../../asset/icon-nav.webp")}
                alt="icon-app"
                style={{ width: "140px" }}
              />
              <p style={{ color: "#6E7191", fontSize: "15px" }}>
                Stop waiting in line. Buy tickets
                <br />
                conveniently, watch movies quietly.
              </p>
            </div>
            <div className="col-2">
              <p className="fw-bold">Explore</p>
              <ul
                class="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ color: "#6E7191", fontSize: "15px" }}
              >
                <li class="nav-item">
                  <Link
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                    href="list-movie"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/View-all"
                    className="nav-link active"
                    aria-current="page"
                  >
                    List Movie
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <p className="fw-bold mb-4">Our Sponsor</p>
              <img
                src={require("../../asset/ebu.id.png")}
                alt="ebu.id"
                className="mb-4"
              ></img>
              <img
                src={require("../../asset/cineone.21.png")}
                alt="cineone21"
                className="mb-4"
              ></img>
              <img
                src={require("../../asset/hiflix.png")}
                alt="hiflix"
                className="mb-4"
              ></img>
            </div>
            <div className="col-3 offset-1">
              <p className="fw-bold mb-4">Follow us</p>
              <div style={{ color: "#6E7191", fontSize: "15px" }}>
                <p>
                  Facebook :
                  <Link style={{ textDecoration: "none", color: "#5F2EEA" }}>
                    Tickitz Cinema id
                  </Link>
                </p>
                <p>
                  Instagram :
                  <Link style={{ textDecoration: "none", color: "#5F2EEA" }}>
                    tickitz.id
                  </Link>
                </p>
                <p>
                  Twitter :
                  <Link style={{ textDecoration: "none", color: "#5F2EEA" }}>
                    tickitz.id
                  </Link>
                </p>
                <p>
                  YouTube :
                  <Link style={{ textDecoration: "none", color: "#5F2EEA" }}>
                    Tickitz Cinema id
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <p
                style={{
                  color: "#6E7191",
                  fontSize: "15px",
                  marginTop: "60px",
                }}
              >
                © 2023 Tickitz. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
