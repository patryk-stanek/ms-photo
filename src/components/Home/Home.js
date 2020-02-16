//Importing modules
import React from "react";
import BackgroundSlider from "react-background-slider"
import { Link } from "react-router-dom";

//Importing components
import { OfferComponent } from "../Offer/Offer.component"

//Importing images for background slideshow
import image1 from "../../assets/images/person-1.jpg";
import image2 from "../../assets/images/landscape-3.jpg";
import image3 from "../../assets/images/landscape-5.jpg";

//Importing styles
import './Home.scss';

//Home component
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <header className="home__header">
                    <BackgroundSlider 
                        images={[
                            image1,
                            image2,
                            image3,
                        ]}
                        duration={7}
                        timeout={2}
                    />
                </header>
                <section className="home__welcome">
                    <div className="home__container container">
                        <h1 className="heading heading__1">
                            Fotografia Ciążowa i Noworodkowa Lelystad
                        </h1>
                        <p className="paragraph paragraph__1">
                            Witaj na mojej stronie! Jestem tutaj, aby pomóc Ci zachować piękne wspomnienia! Oferuję profesjonalne sesje zdjęciowe, a ich efektem są fotografie pełne emocji, subtelności i delikatności.
                            Moim królestwem jest moje domowe studio, w którym realizuję sesje ciążowe, noworodkowe, dziecięce i rodzinne. Wykonuję również sesje tematyczne. 
                            Drugą miłością są sesje plenerowe – kolory, zachód słońca, przepiękne miejsca – to coś, co pokochałam miłością odwzajemnioną!
                            Zapraszam do kontaktu telefonicznego, mailowego lub poprzez formularz zamieszczony na stronie. Nie mogę się doczekać naszego spotkania!
                        </p>
                    </div>
                </section>
                <section className="home__offer-gallery">
                    <div className="home__wrap">
                        <div className="home__main">
                            <span className="home__title home__title--big">
                                Fotografia noworodkowa
                                <span className="home__description">
                                Upamiętnia ten krótki moment w życiu dziecka, kiedy jest ono tak bardzo niewinne i bezbronne, a jednocześnie najsłodsze na świecie.
                                </span>
                            </span>
                        </div>
                        <div className="home__row">
                            <div className="home__sub home__sub--first">
                                <span className="home__title">
                                    Fotografia dziecięca
                                    <span className="home__description">
                                    Pozwala uchwycić niepowtarzalne momenty życia. Sesje te wywołują uśmiech i entuzjazm w każdym okresie czasu wśród rodziców, dziadków oraz dalszej rodziny.
                                    </span>
                                </span>
                            </div>
                            <div className="home__sub home__sub--second">
                                <span className="home__title">
                                    Fotografia rodzinna
                                    <span className="home__description">
                                    Dobra zabawa i pamiątka na całe życie. Udokumentuje uczucia, pokaże emocje, radość a co najważniejsze - Waszą miłość.
                                    </span>
                                </span>
                            </div>
                            <div className="home__sub home__sub--third">
                                <span className="home__title">
                                    Fotografia tematyczna
                                    <span className="home__description">
                                    Skierowana do początkujących oraz profesjonalnych fotomodelek. W ofercie również zdjęcia portretowe.
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <OfferComponent />
                <div className="home__button">
                    <Link
                        to="/contact"
                        className="home__link"
                    >
                        Napisz do mnie!
                    </Link>
                </div>
                <section className="home__gallery">
                    {[1,2,3,4,5,6,7,8].map((x,i) => 
                        <img src={`../../images/landscape-${i+1}.jpg`} alt={i} key={i} className="home__img"/>
                    )}
                </section>
            </div>
        )
    }
}

export default Home