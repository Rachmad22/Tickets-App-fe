import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ticket-result/ticket-result-ready.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import { useNavigate } from "react-router-dom";

export default function TicketResultReady() {
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
      id="ticketReady"
      className=" container-fluid clearfix"
      style={{ paddingLeft: "0", paddingRight: "0", fontFamily: "inherit" }}
    >
      {/* NAVBAR */}
      <Navbar />
      {/* END OF NAVBAR */}

      {/* TICKET */}
      <section
        className="container-fluid payment"
        style={{ backgroundColor: "#F5F6F8", paddingBottom: "100px" }}
      >
        <div className="container pt-5" style={{ marginTop: "80px" }}>
          <div className="row">
            <div className="col-10 offset-1">
              <div
                className="card-profile p-4 shadow-sm text-center rounded"
                style={{
                  backgroundColor: "white",
                  border: "0",
                }}
              >
                <h5 className="m-4 mt-2">Proof of Payment</h5>
                <div className="row mb-5">
                  <div className="col-10 border rounded-4 p-0 offset-1 shadow">
                    <img
                      src={require("../../asset/Ticket.png")}
                      alt="ticket"
                      style={{ width: "100%" }}
                      className="shadow-sm"
                    ></img>
                    <div className="row pb-5 ps-5 pt-4 pe-2">
                      <div className="col-8 text-start">
                        <p className="mt-1 mb-2" style={{ color: "#AAAAAA" }}>
                          Movie
                        </p>
                        <h5>Spider-Man: Homecoming</h5>
                        <div className="row">
                          <div className="col-4">
                            <p
                              className="mt-4 mb-2"
                              style={{ color: "#AAAAAA" }}
                            >
                              Date
                            </p>
                            <h5>07 July</h5>
                          </div>
                          <div className="col-4">
                            <p
                              className="mt-4 mb-2"
                              style={{ color: "#AAAAAA" }}
                            >
                              Time
                            </p>
                            <h5>02:00pm</h5>
                          </div>
                          <div className="col-4">
                            <p
                              className="mt-4 mb-2"
                              style={{ color: "#AAAAAA" }}
                            >
                              Category
                            </p>
                            <h5>Action</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4">
                            <p
                              className="mt-4 mb-2"
                              style={{ color: "#AAAAAA" }}
                            >
                              Count
                            </p>
                            <h5>3 pieces</h5>
                          </div>
                          <div className="col-4">
                            <p
                              className="mt-4 mb-2"
                              style={{ color: "#AAAAAA" }}
                            >
                              Seats
                            </p>
                            <h5>C4, C5, C6</h5>
                          </div>
                          <div className="col-4">
                            <p
                              className="mt-4 mb-2"
                              style={{ color: "#AAAAAA" }}
                            >
                              Price
                            </p>
                            <h5 className="fw-bold">$30.00</h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-4 d-flex align-items-center justify-content-center">
                        <Link to="/Ticket-used">
                          <img
                            src={require("../../asset/QR Code 1.png")}
                            alt="QR"
                            style={{ width: "85%" }}
                            className=""
                          ></img>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF TICKET */}

      {/* FOOTER */}
      <Footer />
      {/* END OF FOOTER */}
    </div>
  );
}
