import React from "react";
import EducationCard from "./EducationCard";

export default function Education({id}) {
    let educations = [
        {
            id: "1",
            university: "University fo Southern California",
            departmentName: "Viterbi School of Engineering",
            timeline: "August 2019 to Spring 2021",
            Courses: [
                {code: 'INF553', name: "Foundations and Applications of Data Mining"},
                {code: 'CSCI570', name: "Analysis of Algorithms"},
                {code: 'CSCI561', name: "Foundations of Artificial Intelligence"},
                {code: 'CSCI585', name: "Database Systems"},
                {code: 'CSCI571', name: "Web Technologies"}
            ],
            GPA: "3.68"
        },
        {
            id: "2",
            university: "Charotar University of Science and Technology",
            departmentName: "Chandubhai S. Patel Institute of Technology",
            timeline: "July 2015 to May 2019",
            Courses: [
                {code: 'CE201.02', name: "Data Structures and Algorithms"},
                {code: 'CE219.01', name: "Object Oriented Programming using Java"},
                {code: 'CE220.01', name: "Software Engineering"},
                {code: 'CE221.01', name: "Operating System"},
                {code: 'CE312.00', name: "Web Programming"},
                {code: 'CE313.00', name: "System Software"},
                {code: 'CE314.00', name: "Advanced Database Management System"},
                {code: 'CE315.00', name: "Design and Analysis of Algorithm"},
                {code: 'CE316.00', name: "Artificial Intelligence"},
                {code: 'CE306.01', name: "Theory of Computation"},
                {code: 'CE320.00', name: "Computer Network & Internetworking Layers"},
                {code: 'CE321.00', name: "Cryptography and Network Security"},
                {code: 'CE322.00', name: "Data Warehouse and Data Mining"},
                {code: 'CE323.00', name: "Advanced Web Technology"},
            ],
            GPA: "9.0"
        }
    ]

    return(
        <div className="mb-sm-5 mb-lg-0 pt-5">
            <div id={id} className="d-flex  min-vh-100">
                <div className="container-fluid text-center my-auto">
                    <h2>Education</h2>
                    <div className="row text-left">
                        { educations && educations.map(education => (
                            <div className="col-12" key={education.id}>
                                <EducationCard education={education}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}