import React from "react";
import "../../styles/account/sign-in.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SideLeftAccount from "../../components/molecules/SideLeftAccount";
import axios from "axios";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  // CHECK IS ALREADY LOGIN
  React.useEffect(() => {
    const isLogin = localStorage.getItem("isSignIn");
    const token = localStorage.getItem("token");

    if (isLogin && token) {
      navigate("/");
    }
  }, []);

  return (
    <div
      id="Sign-in"
      className="container-fluid clearfix"
      style={{ fontFamily: "inherit" }}
    >
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
              <div className="alert-error">
                {isError ? (
                  <div
                    class="alert alert-danger text-center ps-0 pe-0"
                    role="alert"
                    style={{
                      fontSize: "14px",
                      border: "0",
                      borderRadius: "15px",
                      marginBottom: "-15px",
                    }}
                  >
                    {errMsg}
                  </div>
                ) : null}
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
                  onChange={(event) => setEmail(event.target.value)}
                />
                <label
                  for="exampleFormControlInput1"
                  className="form-label mt-3"
                >
                  Password
                </label>
                <input
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      setIsLoading(true);
                      axios
                        .post(
                          `${process.env.REACT_APP_URL_BACKEND}/auth/login`,
                          {
                            email,
                            password,
                          }
                        )
                        .then((res) => {
                          localStorage.setItem("isSignIn", "true");
                          localStorage.setItem(
                            "token",
                            res?.data?.data?.token ?? ""
                          );
                          localStorage.setItem(
                            "profile",
                            JSON.stringify(res?.data?.data?.profile) ?? ""
                          );
                          navigate("/");
                        })
                        .catch((err) => {
                          setIsError(true);
                          console.log(setErrMsg(err));
                          if (err?.response?.data?.message?.email?.message) {
                            setErrMsg(
                              err?.response?.data?.message?.email?.message ??
                                "System error, please try again later."
                            );
                          } else if (
                            err?.response?.data?.message?.password?.message
                          ) {
                            setErrMsg(
                              err?.response?.data?.message?.password?.message ??
                                "System error, please try again later."
                            );
                          } else {
                            setErrMsg(
                              err?.response?.data?.message ??
                                "System error, please try again later."
                            );
                          }
                        })
                        .finally(() => setIsLoading(false));
                      console.log("sbbs");
                    }
                  }}
                  type="password"
                  className="form-control password"
                  id="inputAddress"
                  placeholder="Write your password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <Link to="" className="text-decoration-none text-light">
                <div class="d-grid gap-2 creat-account">
                  <button
                    class="btn"
                    type="button"
                    disabled={isLoading}
                    onClick={() => {
                      setIsLoading(true);
                      axios
                        .post(
                          `${process.env.REACT_APP_URL_BACKEND}/auth/login`,
                          {
                            email,
                            password,
                          }
                        )
                        .then((res) => {
                          localStorage.setItem("isSignIn", "true");
                          localStorage.setItem(
                            "token",
                            res?.data?.data?.token ?? ""
                          );
                          localStorage.setItem(
                            "profile",
                            JSON.stringify(res?.data?.data?.profile) ?? ""
                          );
                          navigate("/");
                        })
                        .catch((err) => {
                          setIsError(true);
                          console.log(setErrMsg(err));
                          if (err?.response?.data?.message?.email?.message) {
                            setErrMsg(
                              err?.response?.data?.message?.email?.message ??
                                "System error, please try again later."
                            );
                          } else if (
                            err?.response?.data?.message?.password?.message
                          ) {
                            setErrMsg(
                              err?.response?.data?.message?.password?.message ??
                                "System error, please try again later."
                            );
                          } else {
                            setErrMsg(
                              err?.response?.data?.message ??
                                "System error, please try again later."
                            );
                          }
                        })
                        .finally(() => setIsLoading(false));
                    }}
                  >
                    {isLoading ? "Loading.." : "Sign In"}
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
