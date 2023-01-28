import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();
  React.useState(() => {
    setTimeout(() => {
      localStorage.clear();
      navigate("/");
    }, 1500);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "inherit",
      }}
    >
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="spinner-border"
            role="status"
            style={{ width: "4rem", height: "4rem", marginBottom: "20px" }}
          >
            <span
              className="visually-hidden"
              style={{ backgroundColor: "#5F2EEA" }}
            >
              Loading...
            </span>
          </div>
        </div>
        <h1>Wait For Logout</h1>
      </div>
    </div>
  );
}
