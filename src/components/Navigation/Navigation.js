//Importing modules
import React from "react";
import { NavLink } from "react-router-dom";

//Importing styles
import "./Navigation.scss"

//Navigation component
export const Navigation = props => {
    return (
        <nav className="navigation indicator">
            <NavLink
                exact to="/"
                className="navigation__link"
                activeClassName="navigation__link--active"
            >
                <span className="navigation__wrap">
                    Home
                </span>
            </NavLink>
            <NavLink
                exact to="/gallery"
                className="navigation__link"
                activeClassName="navigation__link--active"
            >
                <span className="navigation__wrap">
                    Gallery
                </span>
            </NavLink>
            <NavLink
                exact to="/about"
                className="navigation__link"
                activeClassName="navigation__link--active"
            >
                <span className="navigation__wrap">
                    About
                </span>
            </NavLink>
            <NavLink
                exact to="/offer"
                className="navigation__link"
                activeClassName="navigation__link--active"
            >
                <span className="navigation__wrap">
                    Offer
                </span>
            </NavLink>
            <NavLink
                exact to="/contact"
                className="navigation__link"
                activeClassName="navigation__link--active"
            >
                <span className="navigation__wrap">
                    Contact
                </span>
            </NavLink>
        </nav>
    )
}