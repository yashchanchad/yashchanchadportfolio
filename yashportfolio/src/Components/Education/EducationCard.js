import React from "react";

export default function EducationCard({education}) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-auto"/>
                <div className="card border-0 z-depth-0 col-sm-12 col-lg-9 mx-auto">
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
                <div className="col-auto"/>
            </div>
        </div>
    );
}