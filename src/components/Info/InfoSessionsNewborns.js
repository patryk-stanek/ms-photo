//Importing modules
import React from "react";

//Importing components

//Importing styles
import "./Info.scss"

//InfoSessionsNewborns component
export const InfoSessionsNewborns = props => {
    return (
        <React.Fragment>
            <div className="info">
                <div className="info__center">
                    <h1 className="info__header">
                        Informacje o sesji noworodkowej
                    </h1>
                </div>
            </div>
            <div className="info__wall">
                <div className="info__box">
                    <ul className="info__list">
                        <li className="info__item">
                            <h2 className="info__title">
                                Kiedy wykonać sesję noworodkową?
                            </h2>
                            <p className="info__text">
                                Najlepiej między 5 a 12 dniem życia Maleństwa. Dziecko w tym czasie częściej i głębiej śpi oraz chętniej poddaje się układaniu do zdjęcia. Sesje wykonuję w godzinach rannych, kiedy dziecko jest jeszcze spokojne po nocy.
                            </p>
                        </li>
                        <li className="info__item">
                            <h2 className="info__title">
                                Gdzie odbywa się sesja noworodkowa?
                            </h2>
                            <p className="info__text">
                                Sesje noworodkowe wykonuję w spokojnej atmosferze w moim domowym studio w Lelystad. Jest ono wyposażone w przewijak wraz z niezbędnymi akcesoriami (pieluszki, mokre chusteczki, pampersy) Podczas sesji pomieszczenie jest odpowiednio nagrzane (25-28 st.C), tak żeby maluszkowi zawsze było ciepło.
                            </p>
                        </li>
                        <li className="info__item">
                            <h2 className="info__title">
                                Ile czasu trwa sesja noworodkowa?
                            </h2>
                            <p className="info__text">
                                Sesja noworodkowa trwa zwykle ok 3h, ale może przedłużyć się do 4-5h, gdy maluch wymaga częstszego lub dłuższego karmienia lub gdy w sesji uczestniczy starsze rodzeństwo. Najlepiej na ten dzień nie planować innych spraw.
                            </p>   
                        </li>
                        <li className="info__item">
                            <h2 className="info__title">
                                Kiedy zarezerwować termin?
                            </h2>
                            <p className="info__text">
                                Sesję noworodkową najlepiej zarezerwować będąc jeszcze w ciąży, ok 1-2 miesiące przed planowaną datą porodu. Można to zrobić poprzez formularz kontaktowy, wysyłając maila, kontaktując się poprzez Facebook lub Instagram bądź telefonicznie.
                            </p>
                        </li>
                        <li className="info__item">
                            <h2 className="info__title">
                                Czy mam wpływ na stylizację?
                            </h2>
                            <p className="info__text">
                                Decydując się na sesję u mnie akceptujesz moją stylistykę zdjęć. Oczywiście jeśli masz specjalne życzenia co do kolorów proszę o taką informację wcześniej.
                            </p>
                        </li>
                        <li className="info__item">
                            <h2 className="info__title">
                                Czy podczas sesji robione są zdjęcia rodzinne?
                            </h2>
                            <p className="info__text">
                                Na każdej sesji noworodkowej wykonuję również ujęcia rodzinne (z rodzicami oraz ze starszym rodzeństwem). Wspólne zdjęcia z rodzeństwem są możliwe jedynie na początku sesji, gdyż trwa ona do 3-4 godzin, a obecność innych małych dzieci utrudniłaby znacząco jej przebieg.
                            </p>
                        </li>
                        <li className="info__item">
                            <h2 className="info__title">
                                Co należy zabrać ze sobą na sesję?
                            </h2>
                            <p className="info__text">
                                Na każdą sesję przygotowuję odpowiednie akcesoria i wszelkie dodatki, które są pięknym uzupełnieniem sesji.
                                Zabierzcie ze sobą jedynie podstawowe akcesoria do opieki nad Maleństwem, takie jak:
                                <ul className="info__roll">
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            mleko – czasem lepiej pomaga w zaśnięciu; jeśli karmisz piersią – odciągnij pokarm laktatorem do butelki
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            butelkę do karmienia
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            kilka pieluszek tetrowych/ flanelowych
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            smoczek uspokajający – nawet, jeżeli maluch jest “niesmoczkowy” na sesji jest on zazwyczaj bardzo pomocny
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            pieluchy
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            chusteczki nawilżane
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            kocyk do przykrycia, aby czuł znajomy zapach
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            dla siebie gładkie czarne lub białe koszulki do wspólnego zdjęcia z maluszkiem
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <p className="info__paragraph2">
                                            na wszelki wypadek ubrania na zmianę, szczególnie koszulki 
                                        </p>
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}