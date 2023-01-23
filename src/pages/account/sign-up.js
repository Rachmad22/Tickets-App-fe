import React from "react";
import "../../styles/account/sign-up.css";
import { Link } from "react-router-dom";
import SideLeftAccount from "../../components/molecules/SideLeftAccount";

export default function Signup() {
  return (
    <div id="Sign-up" className="container-fluid clearfix">
      <div className="container">
        <div className="row">
          {/* LEFT-SIDE */}
          <div className="col-7 position-relative side-left text-center">
            <SideLeftAccount />
          </div>
          {/* RIGHT-SIDE */}
          <div className="col-5 right-side">
            <div className="container">
              <div className="title">
                <h1>Sign Up</h1>
                <p className="mt-2">Fill your additional details</p>
              </div>
              {/* <!-- FORM REGISTER --> */}
              <div className="form mt-3 register">
                <label for="exampleFormControlInput1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control username"
                  id="inputAddress"
                  placeholder="Write your first name"
                />
                <label for="exampleFormControlInput1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control username"
                  id="inputAddress"
                  placeholder="Write your last name"
                />
                <label
                  for="exampleFormControlInput1"
                  className="form-label mt-3"
                >
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control phone"
                  id="inputAddress"
                  placeholder="Write your phone number"
                />
                <label
                  for="exampleFormControlInput1"
                  className="form-label mt-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control email"
                  id="exampleFormControlInput1"
                  placeholder="Write your email"
                />
                <label
                  for="exampleFormControlInput1"
                  className="form-label mt-3"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control password"
                  id="inputAddress"
                  placeholder="Write your password"
                />
              </div>
              <Link to="/" className="text-decoration-none text-light">
                <div class="d-grid gap-2 creat-account">
                  <button class="btn" type="button">
                    Sign Up
                  </button>
                </div>
              </Link>
              <p className="question text-center">
                Already have account? <Link to="/sign-in">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
