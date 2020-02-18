//Importing modules
import React from "react";

//Importing components

//Importing styles
import "./Contact.scss"

//Contact component
class Contact extends React.Component {
    render() {
        return (
            <section className="contact">
                <div className="container">
                    {/* <h1 className="heading heading__1">
                        Napisz do mnie!
                    </h1> */}
                    <div className="contact__box">
                        <form
                            className="contact__form"
                        >
                            <div className="contact__line">
                                <input 
                                    className="contact__input contact__input--half"
                                    type="text"
                                    id="name"
                                    placeholder="Twoje imię"
                                    minLength="3"
                                    required
                                />
                                <input 
                                    className="contact__input contact__input--half"
                                    type="email"
                                    id="email"
                                    placeholder="Twój email"
                                    minLength="3"
                                    required
                                />
                            </div>
                            <input 
                                type="text" 
                                className="contact__input contact__input--full"
                                id="topic"
                                placeholder="Temat"
                                minLength="3"
                                required
                            />
                            <textarea
                                className="contact__input contact__input--textarea"
                                id="message"
                                placeholder="Twoja wiadomość"
                                rows="10"
                                required
                                autoComplete="none"
                            ></textarea>
                            <button
                                className="contact__button"
                                type="submit"
                            >
                                Wyślij
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact