import React from "react";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

export default function ContactMe({id}) {
    return(
        <div className="mb-sm-5 mb-lg-0 mt-sm-5 mt-md-5 mt-lg-n5">
            <div id={id} className="d-flex  min-vh-100 mt-lg-n5">
                <div className="container-fluid text-center my-auto">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <ContactDetails/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="divider grey"/>*/}
        </div>
    );
}