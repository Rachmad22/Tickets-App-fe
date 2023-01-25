import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import * as movieReducer from "../../store/movies/index";
import { useNavigate } from "react-router-dom";

export default function AllMoviesCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
          <button
            className="btn btn-outline-primary d-grid gap-2"
            style={{ width: "100%" }}
            onClick={() => {
              axios
                .get(
                  `${process.env.REACT_APP_URL_BACKEND}/movies/search/${name}`
                )
                .then(({ data }) => {
                  dispatch(
                    movieReducer.setDetail({
                      data: data?.data?.[0],
                      slug: url,
                    })
                  );
                  navigate(`/Detail-movies/${url}`);
                });
            }}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
