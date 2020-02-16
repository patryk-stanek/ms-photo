//Importing modules
import React from "react";
import { NavLink } from "react-router-dom";

//Importing styles
import "./Navigation.scss"

//Navigation component
export const Navigation = props => {
    let mobileChecker;

    if (props.mobileVisibility === false) {
        mobileChecker = "navigation indicator"
    } else {
        mobileChecker = "navigation mobile";
        // document.getElementById("nav").style.transform = "scaleY(1)";
        document.getElementById("nav").style.width = "100vw"
    }

    return (
        <nav className={mobileChecker} id="nav">
            <NavLink
                exact to="/"
                className="navigation__link"
                activeClassName="navigation__link--active"
                onClick={props.closeMenu}
            >
                <span className="navigation__wrap">
                    Start
                </span>
            </NavLink>
            <NavLink
                exact to="/gallery"
                className="navigation__link"
                activeClassName="navigation__link--active"
                onClick={props.closeMenu}
            >
                <span className="navigation__wrap">
                    Galeria
                </span>
            </NavLink>
            <NavLink
                exact to="/about"
                className="navigation__link"
                activeClassName="navigation__link--active"
                onClick={props.closeMenu}
            >
                <span className="navigation__wrap">
                    O mnie
                </span>
            </NavLink>
            <NavLink
                exact to="/offer"
                className="navigation__link"
                activeClassName="navigation__link--active"
                onClick={props.closeMenu}
            >
                <span className="navigation__wrap">
                    Oferta
                </span>
            </NavLink>
            <NavLink
                exact to="/info"
                className="navigation__link"
                activeClassName="navigation__link--active"
                onClick={props.closeMenu}
            >
                <span className="navigation__wrap">
                    Informacje
                </span>
            </NavLink>
            <NavLink
                exact to="/contact"
                className="navigation__link"
                activeClassName="navigation__link--active"
                onClick={props.closeMenu}
            >
                <span className="navigation__wrap">
                    Kontakt
                </span>
            </NavLink>
        </nav>
    )
}