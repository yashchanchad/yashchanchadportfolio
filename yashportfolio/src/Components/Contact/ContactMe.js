import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactMe() {
    return(
        <div className="row">
            <div className="col s12 m6">
                <ContactDetails/>
            </div>
            <div className="col s12 m6">
                <ContactForm/>
            </div>

        </div>
    );
}