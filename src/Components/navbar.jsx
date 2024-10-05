import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav
        style={{ width: '100%' }}
        className="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0 navC"
      >
        <div className="container">
          <a className="navbar-brand d-lg-none" href="#">
            AI Restaurant Recommender
          </a>

          <button
            className="navbar-toggler ps-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="d-flex justify-content-start align-items-center">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a className="nav-link px-3" href="#!">
                  <NavLink style={{ color: '#fff' }} to="/">
                    Home
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3" href="#!">
                  <NavLink to="/results" style={{ color: '#fff' }}>
                    Find Restaurants
                  </NavLink>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-3"
                  href="#!"
                  onClick={() => {
                    window.open('https://ameyvijeesh.netlify.app');
                  }}
                >
                  About
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link px-3"
                  href="#!"
                  onClick={() => {
                    window.open('https://ameyvijeesh.netlify.app/contact');
                  }}
                >
                  {' '}
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-3"
                  href="#!"
                  onClick={() => {
                    window.open('https://github.com/AmeyVijeesh');
                  }}
                >
                  {' '}
                  More Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
