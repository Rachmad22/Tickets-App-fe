import React from "react";
import { Link } from "react-router-dom";

export default function upcomingMovieCard() {
  return (
    <div>
      <div className="card p-3 text-center" style={{ width: "190px" }}>
        <img
          src={require("../../asset/Rectangle 139.png")}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title title-movie">Black Widow</h5>
          <p className="card-text genre">Action, Adventure, Sci-Fi</p>
          <Link
            to="/Detail-movies"
            className="btn btn-outline-primary d-grid gap-2"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
