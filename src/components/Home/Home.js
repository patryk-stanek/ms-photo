//Importing modules
import React from "react";
import BackgroundSlider from "react-background-slider"
import { Link } from "react-router-dom";

//Importing components

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
                        <h1 className="home__heading home__heading--1">
                            English Photographer in Warsaw
                        </h1>
                        <p className="home__paragraph home__paragraph--1">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                    </div>
                </section>
                <section className="home__offer">
                    <div className="home__container container">
                        <h2 className="home__heading home__heading--2">
                            What Do I offer
                        </h2>
                        <div className="home__box">
                            <div className="home__wrap">
                                <h3 className="home__heading home__heading--3">
                                    Lorem Ipsum
                                </h3>
                                <p className="home__paragraph home__paragraph--2">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                </p>
                            </div>
                            <img 
                                src="../../images/concert-1.jpg" 
                                alt="landscape"
                                className="home__photo"
                            />
                        </div>
                        <div className="home__box">
                            <img 
                                src="../../images/concert-2.jpg" 
                                alt="landscape"
                                className="home__photo"
                            />
                            <div className="home__wrap">
                                <h3 className="home__heading home__heading--3">
                                    Lorem Ipsum
                                </h3>
                                <p className="home__paragraph home__paragraph--2">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                                </p>
                            </div>
                        </div>
                        <Link
                            to="/contact"
                            className="home__link"
                        >
                            Contact me!
                        </Link>
                    </div>
                </section>
                <section className="home__gallery">
                    {[1,2,3,4,5,6,7,8].map((x,i) => 
                        <img src={`../../images/landscape-${i+1}.jpg`} alt={i} className="home__img"/>
                    )}
                </section>
            </div>
        )
    }
}

export default Home