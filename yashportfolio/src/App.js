import React, {useEffect} from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import ContactMe from "./Components/Contact/ContactMe";

function App() {

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.scrollspy');
            document.M.ScrollSpy.init(elems, {});
        });
    })

    return (
        <div className="App">
            <Navbar/>
            <h1> Yash Chanchad Welcomes you! </h1>
            <Projects/>
            <Education/>
            <ContactMe/>
            <footer className="center"> Designed By Yash Chanchad. </footer>
        </div>
    );
}

export default App;
