//Importing modules
import React from "react";

//Importing components
import { Navigation } from "../Navigation/Navigation";
import { Socialbar } from "../Socialbar/Socialbar";

//Importing styles
import "./Header.scss"

//Header component
export class Header extends React.Component {
    render() {
        return (
            <div className="head">
                <div className="head__wrap">
                    <div className="head__logo">
                        <h1 className="head__text">Ms. Photo</h1>
                        <span className="head__span">Photography</span>
                    </div>
                </div>
                <Navigation />
                <Socialbar />
            </div>
        )
    }
}