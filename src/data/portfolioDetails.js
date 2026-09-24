/**
 * PREVIEW: Static configuration database defining the foundational personal profile constants.
 */

import profileImg from '../assets/profile.jpg';

export const portfolioDb = {
    personalInfo: {
        name: "Yaron Serlin",
        title: "Junior Full-Stack Developer | React, Node.js, Java & Spring Boot",
        education: "Open University of Israel - B.Sc. Computer Science (in progress, expected July 2027)",

        bio: "Junior full-stack developer who builds complete products solo, from the database to the deployed app. My projects include a multi-tenant maintenance management system (React, Node.js, MongoDB), an Android recipe app with a Spring Boot API, a device-to-device file transfer PWA and a visual automata editor. Based in Israel / Australia and looking for an entry-level remote developer role.",

        longBio: "I'm a Computer Science student at the Open University of Israel (expected July 2027) and a junior full-stack developer. I like building things end to end: designing the data model, writing the API, building the UI, adding tests and shipping it. My main stack is React and Node.js on the web, and Java with Spring Boot on the backend and Android. Before software I worked as an agricultural mechanic and fabricator and served as a UAV pilot and operator in the IDF reserves - work that taught me to troubleshoot under pressure and finish what I start. Outside work I'm a certified Dive Master and a kitesurfer.",

        about: "Junior full-stack developer (React, Node.js, Java & Spring Boot) building complete web and mobile apps. Computer Science student at the Open University of Israel. Based in Israel / Australia, open to remote roles.",

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
                { name: "Material UI" },
                { name: "Bootstrap" },
                { name: "PWA" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js" },
                { name: "Express" },
                { name: "Java" },
                { name: "Spring Boot" },
                { name: "REST APIs" },
                { name: "JWT Auth" },
                { name: "MongoDB" },
                { name: "MySQL" },
                { name: "Redis" }
            ]
        },
        {
            category: "Tools & Languages",
            items: [
                { name: "Git & GitHub" },
                { name: "Docker" },
                { name: "GitHub Actions" },
                { name: "Jest" },
                { name: "Android (Java)" },
                { name: "Linux" }
            ]
        }
    ],
    contactInfo: {
        email: "yaronsserlin@gmail.com",
        phone: "+972-54-257-0203",
        linkedin: "https://www.linkedin.com/in/yaronserlin",
        github: "https://github.com/yaronserlin"
    }
};
