import React from "react";
import "../../styles/account/sign-in.css";
import { Link } from "react-router-dom";
import SideLeftAccount from "../../components/molecules/SideLeftAccount";

export default function Signup() {
  return (
    <div id="Sign-in" className="container-fluid clearfix">
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
                <h1>Sign In</h1>
                <p className="mt-2">
                  Sign in with your data that you entered during your
                  registration
                </p>
              </div>
              {/* <!-- FORM REGISTER --> */}
              <div className="form mt-3 register">
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
                    Sign In
                  </button>
                </div>
              </Link>
              <p className="question text-center">
                Forgot your password? <Link to="/login">Reset now</Link>
              </p>
              <p className="question text-center">
                Don’t have an account? <Link to="/Sign-up">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
