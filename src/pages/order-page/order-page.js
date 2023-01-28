import React from "react";
import { Link } from "react-router-dom";
import "../../styles/order-page/order-page.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import { useNavigate } from "react-router-dom";

export default function OrderPage() {
  const navigate = useNavigate();

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
      id="order-page"
      className="container-fluid"
      style={{ paddingLeft: "0", paddingRight: "0", fontFamily: "inherit" }}
    >
      {/* NAVBAR */}
      <Navbar />
      {/* END OF NAVBAR */}

      {/* MOVIE SELECTED */}
      <div
        className="container-fluid order"
        style={{ backgroundColor: "#F5F6F8", paddingBottom: "100px" }}
      >
        <div className="container pt-5" style={{ marginTop: "80px" }}>
          <div className="row">
            {/* SIDE-LEFT */}
            <div className="col-8">
              <h4 className="sub-title-selected pb-2">Movie Selected</h4>
              <div
                className="movie-selected ps-5 pt-4 pb-4 pe-4 shadow-sm"
                style={{ width: "100%" }}
              >
                <div className="row">
                  <div className="col-6">
                    <h5 className="movie-title mt-1">Spider-Man: Homecoming</h5>
                  </div>
                  <div className="col-3 offset-3">
                    <Link to="/View-all">
                      <button
                        type="button"
                        className="btn btn-primary change-movie"
                      >
                        Change movie
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* CHOOSE YOUR SEAT */}
              <h4 className="sub-title-seat mt-5 mb-3">Choose Your Seat</h4>
              <div
                className="seat ps-5 pt-4 pb-4 pe-4 shadow-sm"
                style={{ width: "100%" }}
              >
                <div className="row">
                  <div className="col-6">
                    <h5>Row</h5>
                    <select
                      className="form-select row-seat"
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Select Row
                      </option>
                      <option value="1">A</option>
                      <option value="2">B</option>
                      <option value="3">C</option>
                      <option value="4">D</option>
                      <option value="5">E</option>
                      <option value="6">F</option>
                      <option value="7">G</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <h5>Seat</h5>
                    <select
                      className="form-select row-seat"
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Select Seat
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* BUTTON */}
              <div className="row button-checkout mt-5">
                <div className="col-4">
                  <Link to="/View-all">
                    <button
                      type="button"
                      className="btn btn-primary pt-2 pb-2 change"
                      style={{ width: "100%" }}
                    >
                      Change your movie
                    </button>
                  </Link>
                </div>
                <div className="col-4 offset-4">
                  <Link to="/Payment-page">
                    <button
                      type="button"
                      className="btn btn-primary pt-2 pb-2 checkout"
                      style={{ width: "100%" }}
                    >
                      Checkout now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* SIDE-RIGHT */}
            <div className="col-4">
              <h4 className="sub-title-selected pb-2">Order Info</h4>
              <div
                className="card pt-4 pb-2 shadow-sm"
                style={{
                  backgroundColor: "white",
                  border: "0",
                }}
              >
                {/* CINEMA NAME*/}
                <div
                  className="row ms-1 text-center"
                  style={{ width: "350px" }}
                >
                  <div className="col-12">
                    <img
                      src={require("../../asset/cineone.21.png")}
                      alt="ebu.id"
                      className="mb-2"
                      style={{ width: "120px" }}
                    ></img>
                    <h5 className="cinema-name">CineOne21 Cinema</h5>
                  </div>
                </div>
                {/* DETAIL ORDER */}
                <div className="row pt-4 pe-4 pb-2 ps-4 detail-order">
                  <div className="col-5 left">
                    <p className="title-movie mb-3">Movie selected</p>
                    <p className="date mb-3">Tuesday, 07 July 2020</p>
                    <p className="price mb-3">One ticket price</p>
                    <p className="seat">Seat choosed</p>
                  </div>
                  <div className="col-7 right text-end">
                    <p className="title-movie mb-3">Spider-Man: Homecoming</p>
                    <p className="time" style={{ marginBottom: "38px" }}>
                      02:00
                    </p>
                    <p className="price mb-3">$10</p>
                    <p className="seat">C6</p>
                  </div>
                </div>
                {/* PRICE */}
                <div className="price">
                  <div className="row pt-2 pe-4 ps-4 price">
                    <div className="col-3">
                      <p style={{ fontSize: "17px", color: "#6B6B6B" }}>
                        Price
                      </p>
                    </div>
                    <div className="col-5 offset-4 text-end">
                      <p
                        className="ms-3"
                        style={{
                          fontSize: "18px",
                          color: "black",
                          fontWeight: "500",
                        }}
                      >
                        $10
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END OF MOVIE SELECTED */}

      {/* FOOTER */}
      <Footer />
      {/* END OF FOOTER */}
    </div>
  );
}
