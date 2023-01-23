import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home-Page/home.css";
import NovMovieCard from "../../components/molecules/nowMovieCard";
import UpcomingMovieCard from "../../components/molecules/upcomingMovieCard";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import MonthBtn from "../../components/organisms/month-btn";

export default function home() {
  return (
    <div
      id="home"
      className=" container-fluid clearfix"
      style={{ paddingLeft: "0", paddingRight: "0" }}
    >
      {/* NAVBAR */}
      <Navbar />
      {/* END OF NAVBAR */}

      {/* HOME PAGE */}
      <div className="container" style={{ marginTop: "80px" }}>
        <section className="container home-page">
          <div className="row">
            <div className="col-6">
              <div className="slogan">
                <p>Nearest Cinema, Newest Movie,</p>
                <h1>Find out now!</h1>
              </div>
            </div>
            <div className="col-6">
              <div className="home-image">
                <img
                  src={require("../../asset/img-home.webp")}
                  alt="icon-app"
                  style={{ width: "500px", marginTop: "15px" }}
                ></img>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* END OF HOME PAGE */}

      {/* NOW SHOWING */}
      <div className="container-fluid now-showing">
        <section className="container">
          <div className="row mb-5">
            <div className="col-2 sub-title">
              <p className="fw-bold ">Now Showing</p>
            </div>
            <div className="col-1 offset-9 view-all">
              <Link to="/View-all" className="link">
                view all
              </Link>
            </div>
          </div>
          <div className="row card-movies">
            <div className="col-2">
              <NovMovieCard />
            </div>
            <div className="col-2" style={{ marginLeft: "45px" }}>
              <NovMovieCard />
            </div>
            <div className="col-2" style={{ marginLeft: "45px" }}>
              <NovMovieCard />
            </div>
            <div className="col-2" style={{ marginLeft: "45px" }}>
              <NovMovieCard />
            </div>
            <div className="col-2" style={{ marginLeft: "45px" }}>
              <NovMovieCard />
            </div>
          </div>
        </section>
      </div>
      {/* END OF SHOWING */}

      {/* UPCOMING MOVIES */}
      <section className="container upcoming-movies">
        <div className="container">
          <div className="row mb-3 justify-items-center">
            <div className="col-3 sub-title">
              <p className="fw-bold ">Upcoming Movies</p>
            </div>
            <div className="col-1 offset-8 view-all">
              <Link to="/View-all" className="link">
                view all
              </Link>
            </div>
          </div>
          {/* MONTH */}
          <MonthBtn />
          {/* CARD UPCOMING MOVIES */}
          <div className="row UpMovieCard mt-5">
            <div className="col-2">
              <UpcomingMovieCard />
            </div>
            <div className="col-2" style={{ marginLeft: "45px" }}>
              <UpcomingMovieCard />
            </div>
            <div className="col-2" style={{ marginLeft: "45px" }}>
              <UpcomingMovieCard />
            </div>
            <div className="col-2" style={{ marginLeft: "45px" }}>
              <UpcomingMovieCard />
            </div>
            <div className="col-2" style={{ marginLeft: "45px" }}>
              <UpcomingMovieCard />
            </div>
          </div>
        </div>
      </section>
      {/* END OF UPCOMING MOVIES */}

      {/* JOIN MEMBER */}
      <section
        className="container position-relative join-member"
        style={{ height: "600px" }}
      >
        <div className="container">
          <div
            className="container-2 position-absolute top-50 start-50 translate-middle shadow  text-center"
            style={{ height: "55vh", width: "80vw", borderRadius: "15px" }}
          >
            <div className="sub-title" style={{ marginTop: "55px" }}>
              <h5 style={{ marginBottom: "0", color: "#4E4B66" }}>
                Be the vanguard of the
              </h5>
              <h1 style={{ fontWeight: "550", color: "#5F2EEA" }}>
                Moviegoers
              </h1>
            </div>
            <div>
              <form
                className="d-flex position-absolute top-50 start-50 translate-middle"
                role="search"
              >
                <input
                  className="form-control me-2 form-email"
                  type="search"
                  placeholder="Type your email"
                  aria-label="Search"
                  style={{ width: "250px" }}
                />
                <button className="btn btn-primary" type="submit">
                  Join now
                </button>
              </form>
            </div>
            <div
              className="message"
              style={{ marginTop: "110px", color: "#6E7191", fontSize: "13px" }}
            >
              <p>
                By joining you as a Tickitz member,
                <br />
                we will always send you the latest updates via email .
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* END OF JOIN MEMBER */}

      {/* FOOTER */}
      <Footer />
      {/* END OF FOOTER */}
    </div>
  );
}
