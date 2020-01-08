//Importing modules
import React from "react";

//Importing components

//Importing styles
import "./Footer.scss"

//Footer component
export class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__container container">
                    <span className="footer__text">Ms. Photo Photography</span>
                    <span className="footer__text">+12 234 567 890</span>
                    <span className="footer__text">ms.photo@photos.com</span>
                    <span className="footer__signature">Designed and created by Patryk Stanek, Copyright 2020</span>
                </div>
            </footer>
        )
    }
}