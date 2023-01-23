import React from "react";
import { Link } from "react-router-dom";

export default function novMovieCard() {
  return (
    <div>
      <div class="card p-3 text-center" style={{ width: "190px" }}>
        <img
          src={require("../../asset/Rectangle 119.png")}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title title-movie">Spider-Man: Homecoming</h5>
          <p class="card-text genre">Action, Adventure, Sci-FI</p>
          <Link
            to="/Detail-movies"
            class="btn btn-outline-primary d-grid gap-2"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
