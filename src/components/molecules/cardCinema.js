import React from "react";

export default function cardCinema() {
  return (
    <div>
      <div
        className="card"
        style={{ backgroundColor: "white", height: "380px", border: "0" }}
      >
        {/* CINEMA NAME*/}
        <div
          className="row pt-4 pe-4 pb-2 ps-3 border-bottom ms-1"
          style={{ width: "350px" }}
        >
          <div className="col-5">
            <img
              src={require("../../asset/ebu.id.png")}
              alt="ebu.id"
              className="mt-3"
            ></img>
          </div>
          <div className="col-6 offset-1">
            <h4 className="CINEMA-name">ebv.id</h4>
            <p
              className="address"
              style={{ fontSize: "12px", color: "#6E7191" }}
            >
              Whatever street No.12, South Purwokerto
            </p>
          </div>
        </div>
        {/* TIME */}
        <div className="row pt-4 pe-4 pb-2 ps-4 time">
          <div className="col-3">
            <p
              style={{
                fontSize: "15px",
                marginBottom: "25px",
                color: "#4E4B66",
              }}
            >
              08:30am
            </p>
          </div>
          <div className="col-3">
            <p style={{ fontSize: "15px", color: "#6E7191" }}>10:30pm</p>
          </div>
          <div className="col-3">
            <p style={{ fontSize: "15px", color: "#A0A3BD" }}>12:00pm</p>
          </div>
          <div className="col-3">
            <p style={{ fontSize: "15px", color: "#6E7191" }}>02:00pm</p>
          </div>
          <div className="col-3">
            <p style={{ fontSize: "15px", color: "#6E7191" }}>04:30pm</p>
          </div>
          <div className="col-3">
            <p style={{ fontSize: "15px", color: "#A0A3BD" }}>07:00pm</p>
          </div>
          <div className="col-3">
            <p style={{ fontSize: "15px", color: "#6E7191" }}>08:30pm</p>
          </div>
        </div>
        {/* PRICE */}
        <div className="price">
          <div className="row pt-2 pe-4 ps-4 price">
            <div className="col-3">
              <p style={{ fontSize: "17px", color: "#6B6B6B" }}>Price</p>
            </div>
            <div className="col-5 offset-4">
              <p
                className="ms-3"
                style={{
                  fontSize: "18px",
                  color: "black",
                  fontWeight: "500",
                }}
              >
                $10.00/seat
              </p>
            </div>
          </div>
        </div>
        {/* BUTTON */}
        <div className="row pt-3 pe-4 pb-2 ps-4 btn">
          <div className="col-12">
            <div class="d-grid gap-2">
              <button
                class="btn btn-primary shadow "
                style={{ backgroundColor: "#5F2EEA" }}
                type="button"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
