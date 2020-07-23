import React from "react";
import YashAvatar from '../../img/Yash_bitmoji.png'

export default function Home({id}) {
    return(
        <div>
            <div id={id} className="d-flex  min-vh-100 mt-n5">
                <div className="container-fluid text-center my-auto">
                {/*<div className="container center-align" style={{minHeight: "85vh"}}>*/}
                    <h1> Hi! I'm Yash Chanchad.</h1>
                    <img src={YashAvatar} alt="Yash's Avatar"/>
                    <h3> Designer, Developer and Enthusiast</h3>
                    <h5> Let's keep it simple and straight forward.</h5>
                    <br/>
                </div>
            </div>
            {/*<div className="divider grey"></div>*/}
        </div>

    );
}