/**
 * PREVIEW: Static configuration database defining the foundational personal profile constants.
 */

import profileImg from '../assets/profile.png';

export const portfolioDb = {
    personalInfo: {
        name: "Yaron Serlin",
        title: "Full Stack Software Developer | B.Sc. Computer Science",
        education: "Open University - B.Sc. Computer Science (Final Year)",

        bio: "I'm a Full Stack Developer specializing in building intelligent, interactive web applications. Recently, I've developed complex tools ranging from full-stack file-sharing systems to visual finite automata simulators. Relocating to Melbourne, Australia in April 2026 on a Working Holiday Visa, I'm eager to bring my problem-solving skills to a dynamic tech team.",

        longBio: "As a Full Stack Developer, I bridge the gap between strong theoretical computer science fundamentals and practical, modern web technologies. I thrive on creating tangible solutions to complex problems—whether that's architecting a client-server file-sharing platform with database integration, or building interactive UI tools to visually map programming code. I'm passionate about clean code, scalable architecture, and continuous learning. Beyond the screen, I am a certified Dive Master and an avid kitesurfer—pursuits that have taught me focus, adaptability, and how to perform under pressure. Fully visa-ready and arriving in Melbourne this April, I'm excited to dive into my next professional challenge.",

        about: "Software developer with a knack for building scalable web applications and interactive visual tools. Certified Dive Master, kitesurfer, and soon-to-be Melbourne resident open to new opportunities.",

        image: profileImg,

        interests: [
            "🌊 Diving & Ocean Exploration",
            "🪁 Kitesurfing",
            "💻 Full-Stack Web Development",
            "🤖 Artificial Intelligence & Algorithms"
        ]
    },
    skills: [
        {
            category: "Frontend",
            items: [
                { name: "React" },
                { name: "JavaScript" },
                { name: "HTML5" },
                { name: "CSS3" },
                { name: "Bootstrap" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js" },
                { name: "Express" },
                { name: "MongoDB" },
                { name: "SQL" },
                { name: "REST APIs" },
                { name: "Python" },
                { name: "Java" },
                { name: "JavaFX" }
            ]
        },
        {
            category: "Tools & Languages",
            items: [
                { name: "Git & GitHub" },
                { name: "Linux" },
                { name: "Client-Server Architecture" },
                { name: "C++" },
                { name: "C" }
            ]
        }
    ],
    contactInfo: {
        email: "yaron.serlin.dev@gmail.com",
        phone: +972542570203,
        facebook: "https://www.facebook.com/yaron.serlin",
        linkedin: "https://www.linkedin.com/in/yaron-serlin",
        github: "https://github.com/yaronserlin"
    }
};
