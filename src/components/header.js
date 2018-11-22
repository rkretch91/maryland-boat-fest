import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
      <nav className="navbar" role="navigation" aria-label="main navigation" style={{display: "none"}}>
        <div className="navbar-brand">
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu" style={{justifyContent: 'center'}}>
          <div className="navbar-start" style={{marginRight: 0}}>
            <a className="navbar-item">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                About Us
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Photo Gallery
                </a>
              </div>
            </div>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Annual Festival
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Registration Form
                </a>
                <a className="navbar-item">
                  Directions
                </a>
                <a className="navbar-item">
                  Calendar
                </a>
              </div>
            </div>
            <a className="navbar-item">
              Sponsors
            </a>
            <a className="navbar-item">
              Membership
            </a>
            <a className="navbar-item">
              Shop
            </a>
          </div>
        </div>
      </nav>
)

export default Header
