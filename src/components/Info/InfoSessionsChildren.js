//Importing modules
import React from "react";

//Importing components

//Importing styles
import "./Info.scss"

//InfoSessionsChildren component
export const InfoSessionsChildren = props => {
    return (
        <React.Fragment>
            <div className="info">
                <div className="info__center">
                    <h1 className="info__header">
                        Informacje o sesji dziecięcej
                    </h1>
                </div>
            </div>
            <div className="info__wall">
                <div className="info__box">
                    <ul className="info__list">
                        <li className="info__item">
                            <h2 className="info__title">
                                Kiedy wykonać sesję
                            </h2>
                            <p className="info__text">
                                Sesje dziecięce podzieliłam na kilka etapów, ponieważ w każdym z nich sesja przebiega trochę inaczej:
                                <ul className="info__roll">
                                    <li className="info__points">
                                        <h3 className="info__h3">
                                            Sesja niemowlęca 4-6 miesięcy
                                        </h3>
                                        <p className="info__paragraph">
                                            To pierwszy okres, kiedy możemy wykonać sesję Maluchom zaraz po sesji noworodkowej. Dzieci zaczynają się już słodko uśmiechać, trzymają mocno główkę leżąc na brzuszku, na pleckach poleżą dłuższą chwilę bacznie obserwując otoczenie, a niejeden głodomorek w przeuroczy sposób będzie zajadać się swoim stópkami,
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <h3 className="info__h3">
                                            Sesja niemowlęca 7-9 miesięcy
                                        </h3>
                                        <p className="info__paragraph">
                                            Maluchy potrafią już samodzielnie siedzieć i są bardziej kontaktowe, co daje możliwość uchwycenia w kadrze różnorodnych emocji oraz stworzenia różnorodnych aranżacji.
                                        </p>
                                    </li>
                                    <li className="info__points">
                                        <h3 className="info__h3">
                                            Sesje dziecięce od ok 1 roku wzwyż
                                        </h3>
                                        <p className="info__paragraph">
                                            To sesje pełne zabawy, spontaniczności i emocji. W przypadku młodszych dzieci (do 5 lat) może pojawić się etap nieśmiałości, nieufności czy buntu, wówczas najlepiej potraktować sesję jako świetną zabawę i do niczego ich nie zmuszać, mając na uwadze fakt, iż w każdej chwili dziecko może przestać współpracować. Ze starszymi dziećmi praca jest dużo łatwiejsza, ponieważ rozumieją polecenia i w większości przypadków chętnie pozują.
                                            W ramach sesji dziecięcych wykonuję ujęcia rodzinne.
                                        </p>
                                    </li>
                                </ul>
                            </p>
                        </li>
                        <li className="info__item">
                            <h2 className="info__title">
                                Gdzie odbywa się sesja?
                            </h2>
                            <p className="info__text">
                                Sesje możemy wykonuje w  moim studio, w którym zapewniam różnego typu akcesoria, kocyki, koszyki, opaski i nakrycia głowy oraz jeśli tylko warunki pogodowe sprzyjają – w otoczeniu przyrody, gdzie Dzieci czują się najlepiej, co przekłada się na naturalne i spontaniczne kadry.
                            </p>
                        </li>
                        <li className="info__item">
                            <h2 className="info__title">
                                Co ubrać na sesję?
                            </h2>
                            <p className="info__text">
                                Dla Dzieci od 4 miesiąca do ok 2-3 lat mam do dyspozycji rampersy, sukienki i spódniczki oraz opaski i wianki, w przypadku chłopców liczę na Waszą garderobę. Zachęcam jednak do zabrania swoich ubrań, aby Maluch czuł się jak najbardziej naturalnie i komfortowo. Dobrze jest przygotować kilka wersji, a na miejscu wspólnie dobierzemy strój idealnie pasujący do stylizacji czy otoczenia. Najlepiej żeby ubrania nie posiadały dużych nadruków, napisów i dziecięcych emblematów (dot. również Rodziców), ponieważ takie rzeczy mogą odwracać uwagę od twarzy Modela. Dla dziewczynek świetnie sprawdzą się zwiewne sukienki, spódniczki oraz szorty. Mile widziane wszelkie tiule czy koronki (styl retro i boho). Dla chłopców jeansy, wszelkie spodnie (poza dresowymi) i proste bluzeczki czy koszule. Idealne kolory: biele, beże, szarości, brązy, granaty, pastele oraz czerń. To są moje sugestie, ważne aby Dziecko czuło się na sesji naturalnie i swobodnie.
                                Planując ujęcia rodzinne, ważne abyście wszyscy pasowali do siebie pod względem kolorystycznym oraz stylistycznym.
                            </p>   
                        </li>
                        <li className="info__item">
                            <h2 className="info__title">
                                Jak długo trwa sesja?
                            </h2>
                            <p className="info__text">
                                Sesje niemowlęce i dziecięce (do ok 2-3lat) trwają od 40 minut do 2 godzin. W tym wieku Dzieci bardzo szybko się nudzą, więc działamy bardzo intensywnie. Wszystko zależy od miejsca wykonania sesji oraz potrzeb Malucha. Na sesję umawiamy się poza porą drzemek, tak aby Dziecko było wypoczęte i w dobrej formie.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}