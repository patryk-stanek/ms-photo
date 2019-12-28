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
            <div>
                <h1>Header</h1>
                <Navigation />
                <Socialbar />
            </div>
        )
    }
}