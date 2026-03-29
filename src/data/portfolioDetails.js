/**
 * Portfolio Database - All Portfolio Content and Configuration
 * 
 * This file contains the complete portfolio data structure with:
 * - Personal information (name, title, bio, education, contact details)
 * - Technical skills organized by category with proficiency levels
 * - Project portfolio with descriptions, technologies, and links
 * - Contact information including email and social media links
 * 
 * Data Structure:
 * - portfolioDb.personalInfo: Author's profile and biographical information
 * - portfolioDb.skills: Categorized technical skills (Frontend, Backend, Tools)
 * - portfolioDb.projects: Portfolio projects with descriptions and links
 * - portfolioDb.contactInfo: Contact methods (email, phone, social)
 * 
 * Note: Currently active projects are displayed. Archived projects can be
 * uncommented from the projects array to make them visible.
 */
import profileImg from '../assets/profile.png';

export const portfolioDb = {
    // projects: [
    //     // {
    //     //     id: 1,
    //     //     title: "Reversi (Othello) AI",
    //     //     description: "A fully-featured Reversi game implementing minimax algorithm with alpha-beta pruning. Developed as a university project demonstrating AI decision-making and game tree traversal.",
    //     //     technologies: ["Java", "AI Algorithms", "Game Development"],
    //     //     url: "https://github.com/yaronserlin/reversi-ai",
    //     //     liveUrl: null,
    //     //     media: "https://raw.githubusercontent.com/yaronserlin/reversi-ai/refs/heads/main/screenshot.png"
    //     // },

    //     // {
    //     //     id: 2,
    //     //     title: "P2P File Sharing Application",
    //     //     description: "A peer-to-peer file sharing system supporting direct connection between users. Implements socket programming and network protocols for efficient data transfer.",
    //     //     technologies: ["Python", "Networking", "Socket Programming"],
    //     //     url: "https://github.com/yaronserlin/p2p-file-sharing",
    //     //     liveUrl: null,
    //     //     media: "https://raw.githubusercontent.com/yaronserlin/p2p-file-sharing/refs/heads/main/screenshot.png"
    //     // },
    //     {
    //         id: 1,
    //         title: "Automata Visualization Tool123",
    //         description: "Interactive web-based tool for drawing and visualizing finite automata and state machines. Helps computer science students understand automata theory concepts visually.",
    //         technologies: ["React", "JavaScript", "Canvas API"],
    //         url: "https://github.com/yaronserlin/automata-editor",
    //         liveUrl: "https://yaronserlin.github.io/automata-editor/",
    //         image: "https://raw.githubusercontent.com/yaronserlin/automata-editor/refs/heads/main/screenshot.png",
    //         // gif: automataGif,
    //         // video: automataVid  // Add your .mov or .mp4 here: "src/assets/automata-editor.mp4"
    //     },
    //     // {
    //     //     id: 4,
    //     //     title: "Code Project Visualizer",
    //     //     description: "Full-stack tool that analyzes code repositories and generates visual maps of project structure. Useful for understanding large codebases and visualizing dependencies.",
    //     //     technologies: ["React", "Node.js", "Express"],
    //     //     url: "https://github.com/yaronserlin/code-visualizer",
    //     //     liveUrl: null,
    //     //     media: "https://raw.githubusercontent.com/yaronserlin/code-visualizer/refs/heads/main/screenshot.png"
    //     // }
    // ],
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
