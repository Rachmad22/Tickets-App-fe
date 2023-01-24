import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Profile/profile.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";

export default function profile() {
  return (
    <div
      id="profile"
      className=" container-fluid clearfix"
      style={{ paddingLeft: "0", paddingRight: "0" }}
    >
      {/* NAVBAR */}
      <Navbar />
      {/* END OF NAVBAR */}

      {/* PROFILE */}
      <section
        className="container-fluid"
        style={{ backgroundColor: "#F5F6F8", paddingBottom: "100px" }}
      >
        <div className="container pt-5" style={{ marginTop: "80px" }}>
          <div className="row">
            {/* CARD PROFILE */}
            <div className="col-3">
              <div
                className="card-profile p-4 shadow-sm text-center rounded"
                style={{
                  backgroundColor: "white",
                  border: "0",
                }}
              >
                <img
                  src={require("../../asset/photo.png")}
                  alt="photo-profile"
                  style={{ width: "150px" }}
                  className="shadow-sm rounded-circle"
                ></img>
                <h5 className="username mt-2">Jonas El Rodriguez</h5>
                <p
                  className="role border-bottom pb-4"
                  style={{ color: "#4E4B66" }}
                >
                  Moviegoers
                </p>
                <button type="button" class="btn btn-primary btn-logout">
                  Logout
                </button>
              </div>
            </div>
            {/* CARD PROFILE DETAIL INFORMATION */}
            <div className="col-9 right">
              {/* NAVBAR PROFILE */}
              <div
                className="card-profile p-4 pb-2 shadow-sm rounded mb-4"
                style={{
                  backgroundColor: "white",
                  border: "0",
                }}
              >
                <ul navbar-profile>
                  <li className="d-inline-block me-5 order">Order History</li>
                  <li className="d-inline-block"></li>
                </ul>
              </div>
              {/* HISTORY ORDER */}
              <div
                className="history-order p-5 shadow-sm rounded mb-4"
                style={{
                  backgroundColor: "white",
                  border: "0",
                }}
              >
                <div className="row d-flex align-items-center border-bottom pb-4">
                  <div className="col-8">
                    <p className="date-order">
                      Tuesday, 07 July 2020 - 04:30pm
                    </p>
                    <h4 className="title-movie">Spider-Man: Homecoming</h4>
                  </div>
                  <div className="col-4 text-end">
                    <img
                      src={require("../../asset/cineone.21.png")}
                      alt="cinema"
                      style={{ width: "150px" }}
                    ></img>
                  </div>
                </div>
                <div className="row d-flex mt-4">
                  <div className="col-8">
                    <Link to="/Ticket-ready">
                      <button
                        type="button"
                        class="btn btn-primary btn-ticket-active"
                      >
                        Ticket in active
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* HISTORY ORDER NONACTIVE */}
              <div
                className="history-order-nonactive p-5 shadow-sm rounded"
                style={{
                  backgroundColor: "white",
                  border: "0",
                }}
              >
                <div className="row d-flex align-items-center border-bottom pb-4">
                  <div className="col-8">
                    <p className="date-order">Monday, 14 June 2020 - 02:00pm</p>
                    <h4 className="title-movie">Avengers: End Game</h4>
                  </div>
                  <div className="col-4 text-end">
                    <img
                      src={require("../../asset/ebu.id.png")}
                      alt="cinema"
                      style={{ width: "150px" }}
                    ></img>
                  </div>
                </div>
                <div className="row d-flex mt-4">
                  <div className="col-8">
                    <Link to="/Ticket-used">
                      <button
                        type="button"
                        class="btn btn-primary btn-ticket-active"
                      >
                        Ticket used
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF PROFILE */}

      {/* FOOTER */}
      <Footer />
      {/* END OF FOOTER */}
    </div>
  );
}
