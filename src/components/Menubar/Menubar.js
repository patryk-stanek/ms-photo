//Importing modules
import React from "react";

//Importing components
import { Navigation } from "../Navigation/Navigation";
import { Socialbar } from "../Socialbar/Socialbar";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

//Importing styles
import "./Menubar.scss"

//Menubar component
export class Menubar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menubarSize: "menubar",
            showLogoFully: "menubar__span",
            mobileMenuVisiblity: false,
            mobileMenuButton: "menubar__button"
        }

        this.openMobileMenu = this.openMobileMenu.bind(this);
        this.closeMobileMenu = this.closeMobileMenu.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.listenScrollEvent);
        this.setState({
            mobileMenuVisiblity: false
        })
    }

    listenScrollEvent = e => {
        if (window.scrollY > 30) {
            this.setState({
                menubarSize: "menubar menubar__bg",
                showLogoFully: "menubar__span menubar__span--off"
            })
        } else {
            this.setState({
                menubarSize: "menubar",
                showLogoFully: "menubar__span"
            })
        }
    }

    openMobileMenu() {
        if (this.state.mobileMenuVisiblity === false) {
            this.setState({
                mobileMenuVisiblity: true,
                mobileMenuButton: "menubar__button menubar__button--open"
            });
            document.body.style.overflow = "hidden";
        } else {
            this.setState({
                mobileMenuVisiblity: false,
                mobileMenuButton: "menubar__button"
            });
            document.body.style.overflow = "unset";
        }
    }

    closeMobileMenu() {
        this.setState({
            mobileMenuVisiblity: false
        });
        document.body.style.overflow = "unset"
    }
    
    render() {
        return (
            <div className={this.state.menubarSize}>
                <div className="menubar__wrap">
                    <div className="menubar__logo">
                        <h1 className="menubar__text">Ms. Photo</h1>
                        <span className={this.state.showLogoFully}>Photography</span>
                    </div>
                </div>
                <Navigation mobileVisibility={this.state.mobileMenuVisiblity} closeMenu={() => this.closeMobileMenu()}/>
                <Socialbar />
                <button 
                    className={this.state.mobileMenuButton}
                    onClick={() => this.openMobileMenu()}
                >
                    <i className="fas fa-bars"></i>
                </button>
            </div>
        )
    }
}