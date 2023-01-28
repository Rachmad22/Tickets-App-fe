import React from "react";
import "../../styles/account/sign-up.css";
import { Link } from "react-router-dom";
import SideLeftAccount from "../../components/molecules/SideLeftAccount";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_BACKEND}`)
      .then((res) => console.log(res));
  }, []);

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
      id="Sign-up"
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
                <h1>Sign Up</h1>
                <p className="mt-2">Fill your additional details</p>
              </div>
              {/* <!-- FORM REGISTER --> */}
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
              <div className="form mt-3 register">
                <label for="exampleFormControlInput1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control username"
                  id="inputAddress"
                  placeholder="Write your first name"
                  onChange={(event) => setFirstName(event.target.value)}
                />
                <label for="exampleFormControlInput1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control username"
                  id="inputAddress"
                  placeholder="Write your last name"
                  onChange={(event) => setLastName(event.target.value)}
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
                  onChange={(event) => setPhoneNumber(event.target.value)}
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
                        .post(`${process.env.REACT_APP_URL_BACKEND}/user/add`, {
                          firstname,
                          lastname,
                          phone: phoneNumber,
                          email,
                          password,
                        })
                        .then((res) => {
                          navigate("/Sign-in");
                        })
                        .catch((err) => {
                          setIsError(true);
                          if (
                            err?.response?.data?.message?.firstname?.message
                          ) {
                            setErrMsg(
                              err?.response?.data?.message?.firstname
                                ?.message ??
                                "System error, please try again later."
                            );
                          } else if (
                            err?.response?.data?.message?.lastname?.message
                          ) {
                            setErrMsg(
                              err?.response?.data?.message?.lastname?.message ??
                                "System error, please try again later."
                            );
                          } else if (
                            err?.response?.data?.message?.phone?.message
                          ) {
                            setErrMsg(
                              err?.response?.data?.message?.phone?.message ??
                                "System error, please try again later."
                            );
                          } else if (
                            err?.response?.data?.message?.email?.message
                          ) {
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
                        .post(`${process.env.REACT_APP_URL_BACKEND}/user/add`, {
                          firstname,
                          lastname,
                          phone: phoneNumber,
                          email,
                          password,
                        })
                        .then((res) => {
                          navigate("/Sign-in");
                        })
                        .catch((err) => {
                          setIsError(true);
                          if (
                            err?.response?.data?.message?.firstname?.message
                          ) {
                            setErrMsg(
                              err?.response?.data?.message?.firstname
                                ?.message ??
                                "System error, please try again later."
                            );
                          } else if (
                            err?.response?.data?.message?.lastname?.message
                          ) {
                            setErrMsg(
                              err?.response?.data?.message?.lastname?.message ??
                                "System error, please try again later."
                            );
                          } else if (
                            err?.response?.data?.message?.phone?.message
                          ) {
                            setErrMsg(
                              err?.response?.data?.message?.phone?.message ??
                                "System error, please try again later."
                            );
                          } else if (
                            err?.response?.data?.message?.email?.message
                          ) {
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
                    {isLoading ? "Loading..." : "Sign up"}
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
