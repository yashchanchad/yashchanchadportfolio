import React from "react";
// import ContactDetails from "./ContactDetails";
// import ContactForm from "./ContactForm";
import SocialBar from "./SocialBar";
import resume from "../../resume/Resume.pdf"

export default function ContactMe({id}) {

    // function downloadResume() {
    //     fetch('http://192.168.8.186:3000/resume')
    //         .then(response => {
    //             response.blob().then(blob => {
    //                 let url = window.URL.createObjectURL(blob);
    //                 let a = document.createElement('a');
    //                 a.href = url;
    //                 a.download = 'resume.pdf';
    //                 a.click();
    //             });
    //             window.location.href = response.url;
    //         });
    // }

    function openEmail() {

    }



    return(
        <div className="mb-sm-5 mb-lg-0 mt-sm-5 mt-md-5 mt-lg-n5">
            <div id={id} className="d-flex  min-vh-100 mt-lg-n5">
                <div className="container-fluid text-center my-auto">
                    <div className="row">
                        <div className="col-md-1 col-lg-2"/>
                        <div className="col-sm-12 col-md-10 col-lg-8">
                            <h2>Get in Touch!</h2>
                            {/*<a href={`mailto:yashchanchad@gmail.com?subject=${encodeURIComponent("Hi! Yash") */}
                            {/*|| ''}&body=${encodeURIComponent("Hi Yash, ") || ''}`}>Email Me</a>*/}
                            {/*<button className="btn btn-primary my-4" onClick={openEmail}> Email </button>*/}
                            {/*<br/>*/}
                            <a href="mailto:yashchanchad@gmail.com">
                                <button className="btn amber accent-4  mx-4 my-5" onClick={openEmail}> Email </button>
                            </a>
                            <a href={resume} download="Resume_YashChanchad">
                                <button className="btn amber accent-4 mx-4 my-5" onClick={openEmail}> Resume </button>
                            </a>
                        </div>
                        <div className="col-md-1 col-lg-2"/>
                    </div>
                    <div className="row">
                        <div className="col-md-1 col-lg-2"/>
                        <div className="col-sm-12 col-md-10 col-lg-8">
                            <SocialBar/>
                        </div>
                        <div className="col-md-1 col-lg-2"/>
                    </div>
                </div>
            </div>
        </div>
    );
}