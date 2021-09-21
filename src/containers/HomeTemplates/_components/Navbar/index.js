import React, { Component } from "react";
import { NavLink } from "react-router-dom"
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        <a className="navbar-brand">
        Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/list-movie">
                ListMovie
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/hoc">
                Hoc
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/render-props">
                Render Props
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/hooks">
                Hooks
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/material">
                Material
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/styled-cmp">
                Styled Cmp
              </NavLink>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}
