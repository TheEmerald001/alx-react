import React from "react";
import "./Login.css";
export default function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label style={{ margin: "3px" }} htmlFor="email">
        Email:{" "}
      </label>
      <input style={{ margin: "3px" }} type="email" id="email" name="email" />
      <label style={{ margin: "3px" }} htmlFor="password">
        Password:{" "}
      </label>
      <input
        style={{ margin: "3px" }}
        type="password"
        id="password"
        name="password"
      />
      <button style={{ margin: "3px" }}>OK</button>
    </>
  );
}
