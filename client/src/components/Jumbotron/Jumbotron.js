import React from "react";

const Jumbotron = () => (

  
  <div className="jumbotron jumbotron-fluid text-center">
  {/* <div className="container"> */}
    <h1 className="display-4 text-center">React with New York Times</h1>
    <p className="lead text-center">Be notified of the world's happenings</p>
    <div className="navbar navbar-expand navbar-light">
      <ul className="navbar-nav m-auto">
        <li className="nav-item"> 
          <a className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} href= "/"> Home </a>
        </li>
        <li className="nav-item"> 
          <a className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"} href= "/saved"> Saved Articles </a>
        </li>
      </ul> 
    </div>
</div>
);

export default Jumbotron;
