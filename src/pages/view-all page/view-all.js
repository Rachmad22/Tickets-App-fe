import React from "react";
import Navbar from "../../components/organisms/navbar";
import "../../styles/View-all page/view-all.css";
import MonthBtn from "../../components/organisms/month-btn";
import AllMoviesCard from "../../components/molecules/allMoviesCard";
import Footer from "../../components/organisms/footer";
// import dropdown in bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/dist/dropdown";
import $ from "jquery";
import Popper from "popper.js";

export default function viewAll() {
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
            <div className="col-1 offset-6">
              <div className="dropdown">
                <div class="dropdown">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected disabled>
                      Sort
                    </option>
                    <option value="1">A - Z</option>
                    <option value="2">Z - A</option>
                    <option value="3">Latest Release</option>
                    <option value="4">Longest Release</option>
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
      <section className="container movies text-center">
        <div className="row card-movies mb-5">
          <div className="col-3">
            <AllMoviesCard />
          </div>
          <div className="col-3">
            <AllMoviesCard />
          </div>
          <div className="col-3">
            <AllMoviesCard />
          </div>
          <div className="col-3">
            <AllMoviesCard />
          </div>
        </div>
        <div className="row card-movies">
          <div className="col-3">
            <AllMoviesCard />
          </div>
          <div className="col-3">
            <AllMoviesCard />
          </div>
          <div className="col-3">
            <AllMoviesCard />
          </div>
          <div className="col-3">
            <AllMoviesCard />
          </div>
        </div>
      </section>
      {/* END OF MOVIES */}

      {/* PAGINATION */}
      <div className="container paginat mt-4 mb-5">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link active rounded" href="#">
                1
              </a>
            </li>
            <li class="page-item ms-2">
              <a class="page-link rounded" href="#">
                2
              </a>
            </li>
            <li class="page-item ms-2">
              <a class="page-link rounded" href="#">
                3
              </a>
            </li>
            <li class="page-item ms-2">
              <a class="page-link rounded" href="#">
                4
              </a>
            </li>
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
