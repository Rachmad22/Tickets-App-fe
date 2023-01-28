import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Profile/profile-history.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const checkProfile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  const [profile, setProfile] = React.useState(checkProfile);

  // CHECK IS ALREADY LOGIN
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isSignIn");
    const token = localStorage.getItem("token");

    if (!isLogin && !token) {
      navigate("/Sign-in");
    }
  }, []);

  return (
    <div
      id="profile-history"
      className=" container-fluid clearfix"
      style={{ paddingLeft: "0", paddingRight: "0", fontFamily: "inherit" }}
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
                  src={profile?.photo}
                  alt="photo-profile"
                  style={{ width: "140px" }}
                  className="shadow-sm rounded-circle mb-2"
                ></img>
                <h5 className="username mt-2">
                  {profile.firstname} {profile.lastname}
                </h5>
                <p
                  className="role border-bottom pb-4"
                  style={{ color: "#4E4B66" }}
                >
                  {profile.role}
                </p>
                <Link to="/Logout">
                  <button type="button" class="btn btn-primary btn-logout">
                    Logout
                  </button>
                </Link>
              </div>
            </div>
            {/* CARD PROFILE DETAIL INFORMATION */}
            <div className="col-9 right">
              {/* NAVBAR PROFILE */}
              <div
                className="p-4 pb-2 shadow-sm rounded mb-4"
                style={{
                  backgroundColor: "white",
                  border: "0",
                }}
              >
                <ul className="navbar-profile">
                  <Link to="/Profile-setting">
                    <li className="d-inline-block me-5 setting">
                      Account Settings
                    </li>
                  </Link>
                  <li className="d-inline-block order">Order History</li>
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
