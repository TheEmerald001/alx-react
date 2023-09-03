import "./App.css";
import holberton_logo from "./logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";
export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holberton_logo} alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
      </div>

      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </footer>
    </div>
  );
}
