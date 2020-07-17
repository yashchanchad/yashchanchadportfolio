import React from "react";

export default function EducationCard({education}) {
    return(
        <div className="container">
            <h3>{ education.university }</h3>
            <p>{ education.timeline }</p>
        </div>
    );
}