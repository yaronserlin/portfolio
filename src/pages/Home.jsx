import Section from "../components/Section";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect, useState } from "react";

function Home() {



    return (
        <>
            
            <AboutMe />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;