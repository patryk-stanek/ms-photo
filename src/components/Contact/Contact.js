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
                    <h1 className="heading heading__1">
                        Contact me
                    </h1>
                    <div className="contact__box">
                        <form
                            className="contact__form"
                        >
                            <div className="contact__line">
                                <input 
                                    className="contact__input contact__input--half"
                                    type="text"
                                    id="name"
                                    placeholder="Your name"
                                    minLength="3"
                                    required
                                />
                                <input 
                                    className="contact__input contact__input--half"
                                    type="email"
                                    id="email"
                                    placeholder="Your email"
                                    minLength="3"
                                    required
                                />
                            </div>
                            <input 
                                type="text" 
                                className="contact__input contact__input--full"
                                id="topic"
                                placeholder="Topic"
                                minLength="3"
                                required
                            />
                            <textarea
                                className="contact__input contact__input--textarea"
                                id="message"
                                placeholder="Your message"
                                rows="10"
                                required
                                autoComplete="none"
                            ></textarea>
                            <button
                                className="contact__button"
                                type="submit"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact