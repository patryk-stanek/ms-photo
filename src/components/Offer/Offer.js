//Importing modules
import React from "react";

//Importing components
import { OfferComponent } from "./Offer.component";

//Importing styles
import "./Offer.scss"

//Offer component
class Offer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <OfferComponent/>
                <div className="offer-extra">
                    <div className="offer-table__box">
    {/* --------------------------------------------------------------------------------PŁÓTNO */}
                        <div className="offer-table__option">
                            <div className="offer-table__alternative">
                                <span className="offer-table__choice">
                                    Obraz na płótnie
                                </span>
                            </div>
                            <ul className="offer-table__list">
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        20x30cm - <b>40e</b>
                                    </span>
                                </li>
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        30x40cm - <b>55e</b>
                                    </span>
                                </li>
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        40x60cm - <b>65e</b>
                                    </span>
                                </li>
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        60x90cm - <b>95e</b>
                                    </span>
                                </li>
                            </ul>
                        </div>
    {/* --------------------------------------------------------------------------------AKRYL */}
                        <div className="offer-table__option">
                            <div className="offer-table__alternative">
                                <span className="offer-table__choice">
                                    Obraz akrylowy
                                </span>
                            </div>
                            <ul className="offer-table__list">
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        20x30cm - <b>55e</b>
                                    </span>
                                </li>
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        30x40cm - <b>65e</b>
                                    </span>
                                </li>
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        40x60cm - <b>95e</b>
                                    </span>
                                </li>
                            </ul>
                        </div>
    {/* --------------------------------------------------------------------------------FOTOKSIĄŻKA */}
                        <div className="offer-table__option">
                            <div className="offer-table__alternative">
                                <span className="offer-table__choice">
                                    Fotoksiążka
                                </span>
                            </div>
                            <ul className="offer-table__list">
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        19x19cm - <b>45e</b>
                                    </span>
                                </li>
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        28x28cm - <b>65e</b>
                                    </span>
                                </li>
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        42x28cm - <b>110e</b>
                                    </span>
                                </li>
                            </ul>
                        </div>
    {/* --------------------------------------------------------------------------------ODBITKI */}
                        <div className="offer-table__option">
                            <div className="offer-table__alternative">
                                <span className="offer-table__choice">
                                    Dodatkowe odbitki
                                </span>
                            </div>
                            <ul className="offer-table__list">
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        10x15cm - <b>1e</b>
                                    </span>
                                </li>
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        15x23cm - <b>3e</b>
                                    </span>
                                </li>
                                <li className="offer-table__item">
                                    <span className="offer-table__text">
                                        30x45cm - <b>10e</b>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Offer