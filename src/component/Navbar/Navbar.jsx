import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

import navMenu from "../../data/navMenu";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="py-5 mx-auto w-11/12 flex justify-between">
          <a href="#">
            <img src={logo} className="flex w-full h-auto" alt="" />
          </a>
          <div className="md:flex align-center self-center justify-center">
            {navMenu.map((menu) => {
              return (
                <NavLink
                  to={menu.url}
                  activeClassName="text-primary font-bold"
                  exact
                  className="block ml-14 hover:text-primary font-normal transition-all duration-500"
                >
                  {menu.name}
                </NavLink>
              );
            })}
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
