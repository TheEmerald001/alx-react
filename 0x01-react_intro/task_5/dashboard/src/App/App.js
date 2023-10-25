import "./App.css";
import holberton_logo from "../assets/logo.jpg";
import { getFullYear, getFooterCopy } from "../utils/utils.js";
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label style={{margin: "3px"}} htmlFor="email">Email: </label>
        <input style={{margin: "3px"}} type="email" id="email" name="email" />
        <label style={{margin: "3px"}} htmlFor="password">Password: </label>
        <input style={{margin: "3px"}} type="password" id="password" name="password" />
        <button style={{margin: "3px"}}>OK</button>
      </div>

      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </footer>
    </div>
  );
}
