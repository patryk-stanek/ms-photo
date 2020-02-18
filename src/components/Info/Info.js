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
            <div className="info">
                <div className="info__center">
                    <NavLink
                        className="info__link"
                        exact to="/info/regulations"
                    >
                        Regulamin
                    </NavLink>
                    <NavLink
                        className="info__link"
                        exact to="/info/newborns"
                    >
                        Sesje noworodkowe
                    </NavLink>
                    <NavLink
                        className="info__link"
                        exact to="/info/children"
                    >
                        Sesje dziecięce
                    </NavLink>
                    <NavLink
                        className="info__link"
                        exact to="/info/pregnancy"
                    >
                        Sesje ciążowe
                    </NavLink>
                    <NavLink
                        className="info__link"
                        exact to="/info/family"
                    >
                        Sesje rodzinne
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Info