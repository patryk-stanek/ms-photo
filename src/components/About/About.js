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
                <div className="about__xxx">
                    <h1 className="about__title">
                        Jestem Patrycja Wysowska
                    </h1>
                    <div className="about__yyy">
                        <p className="about__text">
                            Fotografia od dawna odgrywała ogromną rolę w moim życiu. Pamiętam jak za dziecka dostałam pierwszy aparat od rodziców pod gwiazdkę. Cieszyłam się niezmiernie, fotografowałam wtedy dosłownie wszystko! Największą satysfakcją dawało mi uwiecznienia pięknych i ulotnych momentów prawdziwego życia. Moja pasja przeobraziła się w wielką miłość do pracy. Po wielu miesiącach i setkach wykonanych zdjęć przyszedł końcu taki moment gdy poczułam, że fotografia jest dokładnie tym, czym chcę się zajmować profesjonalnie. Jeżeli ktokolwiek zapyta mnie czym ona dla mnie jest - choć zabrzmi to jak banał – odpowiem całkowitym spełnienie. 
                        </p>
                        <p className="about__text">
                            Poznając techniczne aspekty fotografii zawsze starałam się krytycznie podchodzić do moich prac i cały czas się doskonalić, jednocześnie zachowując maksimum kreatywności podczas każdej sesji. Moje domowe przytulne studio jest wyposażone w najróżniejsze i najsłodsze rekwizyty do sesji zdjęciowych, które za każdym razem wybieram z największą dokładnością i dzięki którym tworzę niezapomniane ujęcia. Fotografowanie sprawia mi ogromną satysfakcję, a zadowolenie klientów daje ogromną motywację do jeszcze cięższej pracy i ciągłego doskonalenia umiejętności.
                        </p>
                    </div>
                </div>
                {/* <div className="about__header">
                    <h1 className="about__title">
                        Patrycja Wysowska
                    </h1>
                </div>
                <div className="container about__container">
                    <h2 className="heading heading__1">
                        O mnie
                    </h2>
                    <p className="paragraph paragraph__1">
                    Fotografia od dawna odgrywała ogromną rolę w moim życiu. Pamiętam jak za dziecka dostałam pierwszy aparat od rodziców pod gwiazdkę. Cieszyłam się niezmiernie, fotografowałam wtedy dosłownie wszystko! Największą satysfakcją dawało mi uwiecznienia pięknych i ulotnych momentów prawdziwego życia. Moja pasja przeobraziła się w wielką miłość do pracy. Po wielu miesiącach i setkach wykonanych zdjęć przyszedł końcu taki moment gdy poczułam, że fotografia jest dokładnie tym, czym chcę się zajmować profesjonalnie. Jeżeli ktokolwiek zapyta mnie czym ona dla mnie jest - choć zabrzmi to jak banał – odpowiem całkowitym spełnienie. 
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
                            Poznając techniczne aspekty fotografii zawsze starałam się krytycznie podchodzić do moich prac i cały czas się doskonalić, jednocześnie zachowując maksimum kreatywności podczas każdej sesji. Moje domowe przytulne studio jest wyposażone w najróżniejsze i najsłodsze rekwizyty do sesji zdjęciowych, które za każdym razem wybieram z największą dokładnością i dzięki którym tworzę niezapomniane ujęcia. Fotografowanie sprawia mi ogromną satysfakcję, a zadowolenie klientów daje ogromną motywację do jeszcze cięższej pracy i ciągłego doskonalenia umiejętności.
                            </p>
                        </div>
                    </div>
                </div> */}
            </section>
        )
    }
}

export default About