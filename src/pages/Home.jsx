

import Section from "../components/Section/Section";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutMe from "../components/AboutMe/AboutMe";
import Container from "../components/Container/Container";
import ExperienceAndEducation from "../components/ExperienceAndEducation/ExperienceAndEducation";
import SkillsProficiencies from "../components/SkillsProficiencies/SkillsProficiencies";
import SampleWork from "../components/SampleWork/SampleWork";
import ContactSection from "../components/ContactSection/ContactSection";

import projects from "../data/projects";
import experience from "../data/experience";
import { contactInfo, heroInfo, aboutMeInfo } from "../data/contactInfo";
import skills from "../data/skills";

function Home() {


    return (

        <Container className="home-container">

            <Section variant="light" className="hero-section">
                <HeroSection {...heroInfo} />
            </Section>

            <Section variant="alt" className="about-me-section">
                <AboutMe {...aboutMeInfo} />
            </Section>

            <Section variant="light" className="experience-and-education-section">
                <ExperienceAndEducation experienceAndEducation={experience} />
            </Section>

            <Section variant="alt" className="skills-proficiencies-section">
                <SkillsProficiencies skills={skills} />
            </Section>

            <Section variant="light" className="sample-work-section">
                <SampleWork projects={projects} />
            </Section>

            <Section variant="dark" className="reach-out-section">
                <ContactSection {...contactInfo} />
            </Section>
        </Container>

    );
}

export default Home;