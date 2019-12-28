//Importing modules
import React from "react";
import { NavLink } from "react-router-dom";

//Importing styles
import "./Navigation.scss"

//Navigation component
export const Navigation = props => {
    return (
        <nav className="navigation">
            <NavLink
                exact to="/"
                className="navigation__link"
                activeClassName="navigation__link--active"
            >
                Home
            </NavLink>
            <NavLink
                exact to="/gallery"
                className="navigation__link"
                activeClassName="navigation__link--active"
            >
                Gallery
            </NavLink>
            <NavLink
                exact to="/about"
                className="navigation__link"
                activeClassName="navigation__link--active"
            >
                About
            </NavLink>
            <NavLink
                exact to="/offer"
                className="navigation__link"
                activeClassName="navigation__link--active"
            >
                Offer
            </NavLink>
            <NavLink
                exact to="/contact"
                className="navigation__link"
                activeClassName="navigation__link--active"
            >
                Contact
            </NavLink>
        </nav>
    )
}