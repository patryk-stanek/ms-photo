//Importing modules
import React from "react";

//Importing components
import { Header } from "../Header/Header"

//Importing styles
import "./Body.scss"

//Body component
export class Body extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        )
    }
}