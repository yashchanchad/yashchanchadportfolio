import React from "react";
import YashAvatar from '../../Static/img/Yash_bitmoji.png'

export default function Home({id}) {
    return(
        <div>
            <div id={id} className="d-flex  min-vh-100 mt-n5">
                <div className="container-fluid text-center my-auto">
                    <h1> Hi! I'm Yash Chanchad.</h1>
                    <br/>
                    <img src={YashAvatar} alt="Yash's Avatar"/>
                    <br/><br/><br/>
                    <h3> Designer, Developer and Tech Enthusiast</h3>
                    <h5> Let's keep it simple and straight forward.</h5>
                    <br/>
                </div>
            </div>
        </div>
    );
}