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
            showLogo: "./images/logo/logo-full.png",
            mobileMenuVisiblity: false,
            mobileMenuButton: "menubar__button"
        }

        this.openMobileMenu = this.openMobileMenu.bind(this);
        this.closeMobileMenu = this.closeMobileMenu.bind(this);
    }

    // componentDidMount() {
    //     window.addEventListener("scroll", this.listenScrollEvent);
    //     this.setState({
    //         mobileMenuVisiblity: false
    //     });
    //     if (window.innerWidth <= 576) {
    //         this.setState({
    //             showLogo: "./images/logo/logo-sub.png"
    //         })
    //     }
    // }

    // listenScrollEvent = e => {
    //     if (window.innerWidth > 576) {
    //         if (window.scrollY > 30) {
    //             this.setState({
    //                 menubarSize: "menubar menubar__bg",
    //                 showLogo: "./images/logo/logo-sub.png"
    //             })
    //         } else {
    //             this.setState({
    //                 menubarSize: "menubar",
    //                 showLogo: "./images/logo/logo-full.png"
    //             })
    //         }
    //     }
    // }

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
                    {/* <img src={this.state.showLogo} alt="logo" className="menubar__logo"/> */}
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