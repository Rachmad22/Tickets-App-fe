import React from "react";
import Navbar from "../../components/organisms/navbar";
import "../../styles/View-all page/view-all.css";
import MonthBtn from "../../components/organisms/month-btn";
import AllMoviesCard from "../../components/molecules/allMoviesCard";
import Footer from "../../components/organisms/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import dropdown in bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";
import $ from "jquery";
import Popper from "popper.js";

export default function ViewAll() {
  const navigate = useNavigate();
  let [movie, setMovie] = React.useState([]);
  let [isLoading, setIsLoading] = React.useState(true);
  let [keyword, setKeyword] = React.useState("");
  let [currentPage, setCurrentPage] = React.useState(1);
  let [totalPage, setTotalPage] = React.useState(1);

  // PAGINATION PAGE AND LIMIT
  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/movies?page=1&limit=8`)
      .then(({ data }) => {
        let totalPage = Math.ceil(data?.all_pagination / 8);
        setMovie(data?.data);
        setTotalPage(totalPage);
      })
      .catch(() => setMovie([]))
      .finally(() => setIsLoading(false));
  }, []);

  // PAGINATION PAGE AND LIMIT
  const fetchPagination = (pageParam) => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/movies?page=${pageParam}&limit=8`
      )
      .then(({ data }) => {
        let totalPage = Math.ceil(data?.all_pagination / 8);
        setMovie(data?.data);
        setTotalPage(totalPage);
        setCurrentPage(pageParam);
      })
      .catch(() => setMovie([]))
      .finally(() => setIsLoading(false));
  };

  // FEATURE SORT
  const fetchBySort = (sort) => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}/movies?sort=${sort}`)
      .then(({ data }) => {
        setMovie(data?.data);
        setTotalPage(0);
      })
      .catch(() => setMovie([]))
      .finally(() => setIsLoading(false));
  };

  // CHECK IS ALREADY LOGIN
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isSignIn");
    const token = localStorage.getItem("token");

    if (!isLogin && !token) {
      navigate("/Sign-in");
    }
  }, []);

  // FEATURE SEARCH MOVIE
  const fetchByKeyword = () => {
    if (keyword && keyword !== "") {
      axios
        .get(`${process.env.REACT_APP_URL_BACKEND}/movies/search/${keyword}`)
        .then(({ data }) => {
          console.log(data?.data);
          setMovie(data?.data);
          setTotalPage(0);
        })
        .catch(() => setMovie([]))
        .finally(() => setIsLoading(false));
    } else {
      axios
        .get(`${process.env.REACT_APP_URL_BACKEND}/movies?page=1&limit=8`)
        .then(({ data }) => {
          let totalPage = Math.ceil(data?.all_pagination / 8);
          setMovie(data?.data);
          setTotalPage(totalPage);
        })
        .catch(() => setMovie([]))
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div
      id="view-all"
      className="container-fluid"
      style={{
        paddingLeft: "0",
        paddingRight: "0",
        backgroundColor: "#f1f1f1",
      }}
    >
      {/* NAVBAR */}
      <Navbar />
      {/* END OF NAVBAR */}

      {/* SEARCH MOVIES */}
      <section
        id="list-movie"
        className="container-fluid search"
        style={{
          marginTop: "80px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-2">
              <p className="fw-bold mb-4 sub-title">List Movie</p>
            </div>
            <div className="col-2 offset-5">
              <div className="dropdown">
                <div class="dropdown">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      fetchBySort(e.target.value);
                    }}
                  >
                    <option selected disabled>
                      Sort
                    </option>
                    <option value="name_asc">A - Z</option>
                    <option value="name_desc">Z - A</option>
                    <option value="release_asc">Oldest Release</option>
                    <option value="release_desc">Newest Release</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-3 search-movie">
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Search Movie Name ..."
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    fetchByKeyword();
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* END OF SEARCH MOVIES */}

      {/* MONTH */}
      <section className="container pt-2 month">
        <MonthBtn />
      </section>
      {/* END OF MONTH */}

      {/* MOVIES */}
      <section className="container movies text-center shadow-sm">
        <div className="row card-movies mb-1">
          {movie.map((item, key) => {
            return (
              <div className="col-3" key={key}>
                <AllMoviesCard
                  image={item?.photo}
                  name={item?.name}
                  genre={item?.genre}
                  url={item?.slug}
                />
              </div>
            );
          })}
        </div>
      </section>
      {/* END OF MOVIES */}

      {/* PAGINATION */}
      <div className="container paginat mt-4 mb-5">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            {[...new Array(totalPage)].map((item, key) => {
              let position = ++key;
              return (
                <li class="page-item me-2" key={key}>
                  <button
                    className={`page-link rounded ${
                      currentPage === position ? "active" : ""
                    }`}
                    onClick={() => {
                      fetchPagination(position);
                    }}
                  >
                    {position}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* END OF PAGINATION */}

      {/* FOOTER */}
      <div style={{ backgroundColor: "white" }}>
        <Footer />
      </div>
      {/* END OF FOOTER */}
    </div>
  );
}
