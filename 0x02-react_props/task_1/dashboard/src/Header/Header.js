import React from "react";
import "./Header.css";
import holberton_logo from "../assets/logo.jpg";
export default function Header() {
  return (
    <header className="App-header">
      <img src={holberton_logo} alt="logo" />
      <h1>School dashboard</h1>
    </header>
  );
}
