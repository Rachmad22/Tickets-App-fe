import React from "react";
import { Link } from "react-router-dom";

export default function novMovieCard(props) {
  const { image, name, genre, url } = props;
  return (
    <div>
      <div
        class="card p-3 text-center"
        style={{ width: "190px", height: "390px" }}
      >
        <img
          src={image}
          class="card-img-top"
          alt="photo Movie"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div class="card-body">
          <h5
            class="card-title title-movie"
            style={{
              overflow: "hidden",
              whiteSpace: "pre-line",
              textOverflow: "ellipsis",
            }}
          >
            {name}
          </h5>
          <p class="card-text genre">{genre}</p>
          <Link
            to={`/Detail-movies/${url}`}
            class="btn btn-outline-primary d-grid gap-2"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
