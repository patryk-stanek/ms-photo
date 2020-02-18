//Importing modules
import React from "react";

//Importing components

//Importing styles
import "./Info.scss"

//InfoSessionsPregnancy component
export const InfoSessionsPregnancy = props => {
    return (
        <React.Fragment>
            <div className="info">
                <div className="info__center">
                    <h1 className="info__header">
                        Informacje o sesji ciążowej
                    </h1>
                </div>
            </div>
            <div className="info__wall">
                <div className="info__box">
                    <ul className="info__list">
                        <li className="info__item">
                            <p className="info__text">
                                Zapraszam na sesje ciążowe zarówno do mojego studio jak i w plener. Moją pracą chcę uszczęśliwić zarówno Ciebie, Twojego partnera jak i Wasze Maleństwo.
                            </p>
                            <p className="info__text">
                                Zdjęcia ciążowe wykonuję najczęściej między 6 a 8 miesiącem, kiedy brzuszek jest już wyraźnie zarysowany, a przyszła mama czuje się komfortowo. Nie ma również problemu, abyśmy spotkały się nawet w 9-tym miesiącu. Wszystko zależy od Twojego samopoczucia. Na sesję umawiamy się zazwyczaj 3-4 tygodnie wcześniej, chyba, że możliwości pozwalają na krótsze odstępy czasu. Sesje wykonuję w studio i plenerze.
                            </p>
                            <p className="info__text">
                                Posiadam w studio mnóstwo stylizacji ciążowych (długie, eleganckie suknie, body ciążowe) oraz inne dodatki między innymi wianki na głowę. Oczywiście zachęcam do zabrania również swoich ulubionych ubrań (w stonowanych kolorach, ciekawie wyglądają rozpinane luźne koszule, kurtki skórzane lub jeansowe) czy bielizny do bardziej zmysłowych ujęć. Do wspólnych zdjęć z partnerem proponuję jeansy i białe koszulki, ew. czarną bieliznę.
                            </p>
                            <p className="info__text">
                                Standardowa sesja ciążowa trwa ok. 1 – 2h, ale jeżeli masz ochotę tego dnia czuć się wyjątkowo i zdecydujesz się na makijaż wykonany przez wizażystkę, która ze mną współpracuje, czas ten wydłuży się (standardowo makijaż również trwa ok. 1h).
                            </p>
                            <p className="info__text">
                                <b>Koszt makijażu:</b> zapytaj mnie w prywatnej wiadomości lub mailu.
                            </p>
                        </li>
                        <li className="info__item">
                            <h2 className="info__title">
                                Co należy zabrać ze sobą na sesję?
                            </h2>
                            <p className="info__text">
                                <ul className="info__roll">
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            luźną bluzeczkę umożliwiającą umalowanie dekoltu, np. hiszpankę lub na ramiączka
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            szczotkę do włosów
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            szminkę i puder do twarzy (jeżeli nie zdecydujesz się na profesjonalny makijaż)
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            swoje ulubione ubrania, w których czujesz się pięknie i komfortowo i w których chciałabyś wystąpić na sesji (oprócz sukni, do których masz dostęp w moim studio), jak np. czarna skórzana ramoneska, stylowa kurtka jeansowa, przetarte ulubione jeansy
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            najlepszą bieliznę (najlepiej gładką cielistą i czarną, możesz zabrać kilka kompletów, w tym białą na wszelki wypadek)
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            Panowie również powinni przyjść w gładkich, białych t-shirtach bez wzorów, napisów, logotypów oraz  w jeansach.
                                        </p>
                                    </li>
                                </ul>
                            </p>
                        </li>
                        <li className="info__item">
                            <h2 className="info__title">
                                Jak się przygotować?
                            </h2>
                            <p className="info__text">
                                <ul className="info__roll">
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            jeżeli rezerwujesz wizażystkę, nie rób makijażu w domu. Umyj twarz i nałóż nietłusty krem nawilżający, a dzień wcześniej nałóż swoją ulubioną maseczkę.
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            jeżeli nie chcesz skorzystać z usług naszej makijażystki, przyjedź na sesję już w makijażu, nieco mocniejszym niż na co dzień i ułóż włosy, ale na wszelki wypadek zabierz ze sobą swoje kosmetyki i akcesoria do włosów.
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            zadbaj też o wygląd paznokci u rąk i nóg, gdyż będziemy robić na nie dużo zbliżeń.
                                        </p>
                                    </li>
                                </ul>
                                <p className="info__text">
                                    Skontaktuj się ze mną kilka dni przed sesją, abyśmy ustaliły jej szczegóły.
                                </p>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}