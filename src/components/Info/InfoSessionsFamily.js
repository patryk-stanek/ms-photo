//Importing modules
import React from "react";

//Importing components

//Importing styles
import "./Info.scss"

//InfoSessionsFamily component
export const InfoSessionsFamily = props => {
    return (
        <React.Fragment>
            <div className="info">
                <div className="info__center">
                    <h1 className="info__header">
                        Informacje o sesji rodzinnej
                    </h1>
                </div>
            </div>
            <div className="info__wall">
                <div className="info__box">
                    <ul className="info__list">
                        <li className="info__item">
                            <p className="info__text">
                                Sesje rodzinne przeprowadzam zarówno w studio jak i w plenerze (zależy od pogody i Twojego pomysłu). Na sesję umawiamy się zazwyczaj 4-5 tygodnie wcześniej, chyba, że możliwości pozwalają na krótsze odstępy czasu. Stroje dobieracie sami, dodatki oferuję ja. Najlepiej sprawdzą się kolory naturalne takie jak: beże, brązy, szarości, biele, jeans – zawsze będą świetnym wyborem.
                            </p>
                            <p className="info__text">
                                Warto zabrać ubrania, w których dzieci wyglądają inaczej niż zwykle, w tym bluzki bez zbędnych napisów – żeby nie odciągały uwagi od bohaterów zdjęć, czyli od Was. W przypadku sesji rodzinnych kolory powinny ze sobą współgrać. 
                            </p>
                            <p className="info__text">
                                Jeżeli Twoje dziecko ma jakiś ważny przedmiot jak ulubioną zabawkę czy kocyk, który chcecie umieścić na zdjęciu, nie ma żadnego problemu – prosiłabym tylko o wcześniejszą informację przed sesją.
                            </p>
                            <p className="info__text">
                                Na takiej sesji najważniejsze jest uchwycenie kontaktu z Malcem, dlatego też w tym przypadku nieoceniona jest pomoc Rodziców – rozśmieszanie, klaskanie, śpiewanie, wołanie. Tu liczy się moment, dlatego jako fotograf oczekuję dużego wsparcia i zaangażowania Rodziców.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}