import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-brand">
        <img
          src="http://res.freestockphotos.biz/pictures/16/16551-illustration-of-a-hotdog-pv.png"
          width="30"
          height="30"
          alt=""
        />
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button className="nav-link">
              Home
              <span className="sr-only">(current)</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link">Featured</button>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search by Zipcode"
            aria-label="Search"
          />
          <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
