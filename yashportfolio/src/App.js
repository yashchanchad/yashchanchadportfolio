import React from 'react';
import Navigationbar from "./Components/Navbar/Navigationbar";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import ContactMe from "./Components/Contact/ContactMe";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Experience from "./Components/Experience/Experience";
import Divider from "./Components/Divider";

function App() {

    return (
        <div className="App">
            <Navigationbar/>
            <div>
                <Home
                    id = "Home"
                />
                <Divider/>
                <Education
                    id="Education"
                />
                <Divider/>
                <Experience
                    id="Experience"
                />
                <Divider/>
                <Projects
                    id="Projects"
                />
                <Divider/>
                <ContactMe
                    id="ContactMe"
                />
            </div>
            <Footer/>
        </div>
    );
}

export default App;
