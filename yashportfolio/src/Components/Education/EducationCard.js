import React from "react";

export default function EducationCard({education, key}) {
    return(
        <div id={key} className="container">
            <div className="card z-depth-0">
                <h4>{ education.university }</h4>
                <h6>{ education.departmentName }</h6>
                <div className="row">
                    <div className="col-12">
                        <p>GPA: { education.GPA }</p>
                    </div>
                    <div className="col-md-3 col-sm-12"><p>Courses:</p></div>
                    <div className="col-md-9 col-sm-12">
                        {education.Courses && education.Courses.map((item, i) => (
                            <p key={i}>{item.code}: {item.name} </p>
                        ))}
                    </div>
                    <div className="col-12">
                        <p>Duration: { education.timeline }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}