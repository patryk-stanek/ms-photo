//Importing modules
import React from "react";

//Importing components
import { Navigation } from "../Navigation/Navigation";
import { Socialbar } from "../Socialbar/Socialbar";

//Importing styles
import "./Menubar.scss"

//Menubar component
export class Menubar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            size: "menubar",
            font: "menubar__span"
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent)
    }

    listenScrollEvent = e => {
        if (window.scrollY > 30) {
            this.setState({
                size: "menubar menubar__bg",
                font: "menubar__span menubar__span--off"
            })
        } else {
            this.setState({
                size: "menubar",
                font: "menubar__span"
            })
        }
    }
    
    render() {
        return (
            <div className={this.state.size}>
                <div className="menubar__wrap">
                    <div className="menubar__logo">
                        <h1 className="menubar__text">Ms. Photo</h1>
                        <span className={this.state.font}>Photography</span>
                    </div>
                </div>
                <Navigation />
                <Socialbar />
            </div>
        )
    }
}