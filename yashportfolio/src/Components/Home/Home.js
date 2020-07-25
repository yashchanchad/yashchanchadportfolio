import React from "react";
import YashAvatar from '../../img/Yash_bitmoji.png'
// import Yash from '../../img/Yash.jpg'
// import { Image } from "react-bootstrap"

export default function Home({id}) {
    return(
        <div>
            <div id={id} className="d-flex  min-vh-100 mt-n5">
                <div className="container-fluid text-center my-auto">
                {/*<div className="container center-align" style={{minHeight: "85vh"}}>*/}
                    <h1> Hi! I'm Yash Chanchad.</h1>
                    <br/>
                    <img src={YashAvatar} alt="Yash's Avatar"/>
                    <br/>
                    <br/>
                    <br/>
                    {/*<div className="img-thumbnail">*/}
                    {/*    <img src={Yash} alt="Yash" width="50%"/>*/}
                    {/*</div>*/}
                    {/*<div className="row">*/}
                    {/*    <div className="col-9">*/}
                    {/*        <img src={Yash} alt="Yash" width="50%"/>*/}
                    {/*        /!*<Image src={Yash} roundedCircle/>*!/*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <h3> Designer, Developer and Enthusiast</h3>
                    <h5> Let's keep it simple and straight forward.</h5>
                    <br/>
                </div>
            </div>
            {/*<div className="divider grey"></div>*/}
        </div>

    );
}