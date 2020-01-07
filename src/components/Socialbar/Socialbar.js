//Importing modules
import React from "react";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

//Importing components

//Importing styles
import "./Socialbar.scss"

//Socialbar component
export class Socialbar extends React.Component {
    render() {
        return (
            <div className="social">
                <span
                    className="social__link"
                >
                    <i className="fab fa-facebook-f social__icon"></i>
                </span>
                <span
                    className="social__link"
                >
                    <i className="fab fa-instagram social__icon"></i>
                </span>
            </div>
        )
    }
}