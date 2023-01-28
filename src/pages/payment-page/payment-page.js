import React from "react";
import { Link } from "react-router-dom";
import "../../styles/payment-page/payment-page.css";
import Navbar from "../../components/organisms/navbar";
import Footer from "../../components/organisms/footer";
import { useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const navigate = useNavigate();
  const [paymentSelected, setPaymentSelected] = React.useState(null);
  const checkProfile = localStorage.getItem("profile")
    ? JSON.parse(localStorage.getItem("profile"))
    : null;
  const [profile, setProfile] = React.useState(checkProfile);
  console.log(paymentSelected);

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
      id="payment-page"
      className="container-fluid"
      style={{ paddingLeft: "0", paddingRight: "0", fontFamily: "inherit" }}
    >
      {/* NAVBAR */}
      <Navbar />
      {/* END OF NAVBAR */}

      {/* PAYMENT PAGE ALL */}
      <section
        className="container-fluid payment"
        style={{ backgroundColor: "#F5F6F8", paddingBottom: "100px" }}
      >
        <div className="container pt-5" style={{ marginTop: "80px" }}>
          <div className="row">
            {/* LEFT SIDE */}
            <div className="col-8">
              <h4 className="sub-title pb-2">Movie Selected</h4>
              <div
                className="side-left p-5 shadow-sm"
                style={{ width: "100%" }}
              >
                <div className="row border-bottom date mb-3">
                  <div className="col-3">
                    <p style={{ color: "#6B6B6B" }}>Date & time</p>
                  </div>
                  <div className="col-9 text-end">
                    <p>Tuesday, 07 July 2020 at 02:00 </p>
                  </div>
                </div>
                <div className="row border-bottom movie-title mb-3">
                  <div className="col-3">
                    <p style={{ color: "#6B6B6B" }}>Movie title</p>
                  </div>
                  <div className="col-9 text-end">
                    <p>Spider-Man: Homecoming</p>
                  </div>
                </div>
                <div className="row border-bottom cinema-name mb-3">
                  <div className="col-3">
                    <p style={{ color: "#6B6B6B" }}>Cinema name</p>
                  </div>
                  <div className="col-9 text-end">
                    <p>CineOne21 Cinema</p>
                  </div>
                </div>
                {/* <div className="row border-bottom number-ticket mb-3">
                  <div className="col-3">
                    <p style={{ color: "#6B6B6B" }}>Number of tickets</p>
                  </div>
                  <div className="col-9 text-end">
                    <p>3 pieces</p>
                  </div>
                </div> */}
                <div className="row border-bottom total-payment mb-3">
                  <div className="col-3">
                    <p style={{ color: "#6B6B6B" }}>Total payment</p>
                  </div>
                  <div className="col-9 text-end fw-bold">
                    <p style={{ fontSize: "18px" }}>$30,00</p>
                  </div>
                </div>
              </div>
              {/* Choose a Payment Method */}
              <h4 className="sub-title pb-2 mt-5">Choose a Payment Method</h4>
              <div
                className="side-left p-5 shadow-sm"
                style={{ width: "100%" }}
              >
                <div className="row mb-4 payment-method">
                  <div className="col-3">
                    <button
                      type="button"
                      className={`btn btn-outline-secondary ${
                        paymentSelected === "Gpay" ? "payment-selected" : ""
                      }`}
                      onClick={() => {
                        setPaymentSelected("Gpay");
                      }}
                    >
                      <img
                        src={require("../../asset/Gpay.png")}
                        alt="Gpay"
                      ></img>
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      type="button"
                      className={`btn btn-outline-secondary ${
                        paymentSelected === "visa" ? "payment-selected" : ""
                      }`}
                      onClick={() => {
                        setPaymentSelected("visa");
                      }}
                    >
                      <img
                        src={require("../../asset/visa.png")}
                        alt="visa"
                      ></img>
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      type="button"
                      className={`btn btn-outline-secondary ${
                        paymentSelected === "gopay" ? "payment-selected" : ""
                      }`}
                      onClick={() => {
                        setPaymentSelected("gopay");
                      }}
                    >
                      <img
                        src={require("../../asset/GoPay.png")}
                        alt="gopay"
                      ></img>
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      type="button"
                      className={`btn btn-outline-secondary ${
                        paymentSelected === "paypal" ? "payment-selected" : ""
                      }`}
                      onClick={() => {
                        setPaymentSelected("paypal");
                      }}
                    >
                      <img
                        src={require("../../asset/paypal.png")}
                        alt="paypal"
                        style={{ width: "20px" }}
                      ></img>
                    </button>
                  </div>
                </div>
                <div className="row payment-method">
                  <div className="col-3">
                    <button
                      type="button"
                      className={`btn btn-outline-secondary ${
                        paymentSelected === "DANA" ? "payment-selected" : ""
                      }`}
                      onClick={() => {
                        setPaymentSelected("DANA");
                      }}
                    >
                      <img
                        src={require("../../asset/DANA.png")}
                        alt="DANA"
                      ></img>
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      type="button"
                      className={`btn btn-outline-secondary ${
                        paymentSelected === "BCA" ? "payment-selected" : ""
                      }`}
                      onClick={() => {
                        setPaymentSelected("BCA");
                      }}
                    >
                      <img src={require("../../asset/BCA.png")} alt="BCA"></img>
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      type="button"
                      className={`btn btn-outline-secondary ${
                        paymentSelected === "BRI" ? "payment-selected" : ""
                      }`}
                      onClick={() => {
                        setPaymentSelected("BRI");
                      }}
                    >
                      <img
                        src={require("../../asset/BRI.png")}
                        alt="BRI"
                        style={{ width: "30px" }}
                      ></img>
                    </button>
                  </div>
                  <div className="col-3">
                    <button
                      type="button"
                      className={`btn btn-outline-secondary ${
                        paymentSelected === "OVO" ? "payment-selected" : ""
                      }`}
                      onClick={() => {
                        setPaymentSelected("OVO");
                      }}
                    >
                      <img src={require("../../asset/OVO.png")} alt="OVO"></img>
                    </button>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="mb-4" style={{ color: "#A0A3BD" }}>
                    or
                  </p>
                  <p style={{ color: "#6E7191" }}>
                    Pay via cash.
                    <Link
                      className="text-decoration-none"
                      style={{ color: "#5F2EEA" }}
                    >
                      See how it work
                    </Link>
                  </p>
                </div>
              </div>
              {/* BUTTON */}
              <div className="row button-checkout mt-5">
                <div className="col-4">
                  <Link to="/Order-page">
                    <button
                      type="button"
                      className="btn btn-primary pt-2 pb-2 Previous"
                      style={{ width: "100%" }}
                    >
                      Previous step
                    </button>
                  </Link>
                </div>
                <div className="col-4 offset-4">
                  <Link to="/Ticket-ready">
                    <button
                      type="button"
                      className="btn btn-primary pt-2 pb-2 Pay"
                      style={{ width: "100%" }}
                    >
                      Pay your order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* RIGHT SIDE */}
            <div className="col-4 right">
              <h4 className="sub-title-selected pb-2">Personal Info</h4>
              <div
                className="card p-4 shadow-sm"
                style={{
                  backgroundColor: "white",
                  border: "0",
                }}
              >
                <div className="Full-name mb-4">
                  <label for="exampleFormControlInput1" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder={`${profile.firstname} ${profile.lastname}`}
                    disabled
                  />
                </div>
                <div className="email mb-4 p-0">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder={profile.email}
                    disabled
                  />
                </div>
                <div className="phone p-0">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder={profile.phone}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF PAYMENT PAGE ALL */}

      {/* FOOTER */}
      <Footer />
      {/* END OF FOOTER */}
    </div>
  );
}
