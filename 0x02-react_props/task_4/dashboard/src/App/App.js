import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
export default function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </div>
        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propType = {
  isLoggedIn: PropTypes.bool,
}
