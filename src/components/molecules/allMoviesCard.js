import React from "react";
import { Link } from "react-router-dom";

export default function allMoviesCard(props) {
  const { image, name, genre, url } = props;
  return (
    <div>
      <div
        class="card p-2 text-center"
        style={{ width: "180px", marginLeft: "15px", height: "390px" }}
      >
        <img
          src={image}
          class="card-img-top"
          alt="movie photo"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div class="card-body">
          <h5 class="card-title title-movie">{name}</h5>
          <p class="card-text genre">{genre}</p>
          <Link
            to={`/Detail-movies/${url}`}
            className="btn btn-outline-primary d-grid gap-2"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
