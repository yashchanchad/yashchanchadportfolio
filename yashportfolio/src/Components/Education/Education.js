import React from "react";
import EducationCard from "./EducationCard";

export default function Education({id}) {
    let educations = [
        {
            id: "1",
            university: "University fo Southern California",
            departmentName: "Viterbi School of Engineering",
            timeline: "Fall 2019 to May 2021"
        },
        {
            id: "2",
            university: "Charotar University of Science and Technology",
            departmentName: "Chandubhai S. Patel Institute of Technology",
            timeline: "Fall 2015 to May 2019"
        }
    ]

    return(
        <div id={ id } className="section scrollspy" >
            { educations && educations.map(education => (
                <EducationCard education={education} key={education.id}/>
            ))}
        </div>
    );
}