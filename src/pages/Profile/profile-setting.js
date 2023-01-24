import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Profile/profile-setting.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";

export default function profile() {
  return (
    <div
      id="profile-setting"
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
                <ul className="navbar-profile">
                  <li className="d-inline-block me-5">Account Settings</li>
                  <Link to="/Profile-history">
                    <li className="d-inline-block me-5 order">Order History</li>
                  </Link>
                </ul>
              </div>
              {/* SETTING PROFILE */}
              <div
                className="setting-profile p-5 shadow-sm rounded mb-4"
                style={{
                  backgroundColor: "white",
                  border: "0",
                }}
              >
                <div className="row border-bottom">
                  <div className="col-12">
                    <p>Details Information</p>
                  </div>
                </div>
                <div className="row setting mt-3">
                  <div className="col-6">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control username"
                      id="inputAddress"
                      placeholder="Write your first name"
                    />
                  </div>
                  <div className="col-6">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control username"
                      id="inputAddress"
                      placeholder="Write your last name"
                    />
                  </div>
                </div>
                <div className="row setting mt-2">
                  <div className="col-6">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label mt-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control email"
                      id="exampleFormControlInput1"
                      placeholder="Write your email"
                    />
                  </div>
                  <div className="col-6">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label mt-3"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control phone"
                      id="inputAddress"
                      placeholder="Write your phone number"
                    />
                  </div>
                </div>
              </div>
              <div className="btn-update">
                <button type="button" class="btn btn-primary btn-logout">
                  Update changes
                </button>
              </div>
              {/* UPDATE PASSWORD */}
              <div
                className="setting-profile p-5 shadow-sm rounded mb-4 mt-4"
                style={{
                  backgroundColor: "white",
                  border: "0",
                }}
              >
                <div className="row border-bottom">
                  <div className="col-12">
                    <p>Account and Privacy</p>
                  </div>
                </div>
                <div className="row setting mt-3">
                  <div className="col-6">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label mt-3"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control password"
                      id="inputAddress"
                      placeholder="Write your password"
                    />
                  </div>
                  <div className="col-6">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label mt-3"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control password"
                      id="inputAddress"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>
              </div>
              <div className="btn-update">
                <button type="button" class="btn btn-primary btn-logout">
                  Update changes
                </button>
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
