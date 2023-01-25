import React from "react";
import { Link } from "react-router-dom";

export default function upcomingMovieCard(props) {
  const { image, name, genre, url } = props;
  return (
    <div>
      <div className="card p-3 text-center" style={{ width: "190px" }}>
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title title-movie">{name}</h5>
          <p className="card-text genre">{genre}</p>
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
