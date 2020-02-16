//Importing modules
import React from "react";

//Importing components
import { NavLink } from "react-router-dom";

//Importing styles
import "./Info.scss"

//Info component
class Info extends React.Component {
    render() {
        return (
            <div>
                <NavLink
                    exact to="/info/regulations"
                >
                    Regulamin
                </NavLink>
                <NavLink
                    exact to="/info/newborns"
                >
                    Sesje noworodkowe
                </NavLink>
                <NavLink
                    exact to="/info/children"
                >
                    Sesje dziecięce
                </NavLink>
                <NavLink
                    exact to="/info/pregnancy"
                >
                    Sesje ciążowe
                </NavLink>
                <NavLink
                    exact to="/info/family"
                >
                    Sesje rodzinne
                </NavLink>
            </div>
        )
    }
}

export default Info