//Importing modules
import React from "react";

//Importing components

//Importing styles
import "./About.scss"

//About component
class About extends React.Component {
    render() {
        return (
            <section className="about">
                <div className="about__header">
                    <h1 className="about__title">
                        Patrycja Wysowska
                    </h1>
                </div>
                <div className="container about__container">
                    <h2 className="heading heading__1">
                        About me
                    </h2>
                    <p className="paragraph paragraph__1">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur tenetur adipisci ut molestiae, blanditiis excepturi doloremque possimus ab sed exercitationem nihil labore mollitia facere at maiores eveniet nisi neque odio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nihil eveniet commodi maxime suscipit delectus dolorum explicabo, et rem magni autem accusamus hic earum animi sed blanditiis sequi quasi illum?
                    </p>
                </div>
                <div className="about__studio">
                    <div className="about__box about__box--image">
                        <img src="./images/studio.jpg" alt="studio" className="about__image"/>
                    </div>
                    <div className="about__box about__box--text">
                        <div className="about__content">
                            <h3 className="heading heading__2">
                                My studio
                            </h3>
                            <p className="paragraph paragraph__2">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt nobis consectetur inventore laudantium maxime veritatis et nam aliquid ipsum, error voluptatem alias debitis odit repudiandae repellendus nesciunt sapiente, voluptas fugit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, qui doloribus. Eius quas nihil iure sint dolores vitae labore, quae perspiciatis perferendis quod nobis. Eum rerum provident minus facere! Ad?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About