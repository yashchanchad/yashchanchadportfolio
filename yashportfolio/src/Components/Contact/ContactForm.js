import React from "react";

export default function ContactForm() {
    return(
        <div className="container">
            <h3>Send Mail!</h3>
            <form>
                <label htmlFor="fullName">Name</label>
                <input type="text" name="fullName"/>
            </form>
        </div>
    );
}