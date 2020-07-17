import React from 'react';
import Navigationbar from "./Components/Navbar/Navigationbar";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import ContactMe from "./Components/Contact/ContactMe";
import Home from "./Components/Home/Home";

function App() {

    return (
        <div className="App">

            <Navigationbar/>
            <Home
                id = "Home"
            />
            <Projects
                id="Projects"
            />
            <Education
                id="Education"
            />
            <ContactMe
                id="ContactMe"
            />
            <footer className="center"> Designed By Yash Chanchad. </footer>
        </div>
    );
}

export default App;
