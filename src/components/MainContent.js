import React from "react";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Projects from "./Projects";

const MainContent = () => {
    console.log("Hello MainContent");
    return (
        <div>
            <Home />
            <About />
            <Resume />
            <Projects />
            <Contact />
        </div>
    );
};

export default MainContent;