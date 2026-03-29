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

export const portfolioDb = {
    personalInfo: {
        name: "Yaron Serlin",
        title: "Full Stack Developer & Computer Science Student",
        education: "Open University - B.Sc. Computer Science",
        bio: "I'm a passionate software developer focused on creating intelligent, efficient systems. With expertise in full-stack web development and algorithmic problem-solving, I enjoy turning complex challenges into elegant solutions. Currently pursuing my degree in Computer Science while building real-world projects.",
        longBio: "As a full-stack developer, I combine strong fundamentals in computer science with practical experience in modern web technologies. I'm particularly interested in building scalable applications, exploring AI algorithms, and creating tool applications that solve real problems. When I'm not coding, you'll find me diving the world's oceans or catching wind on a kite board.",
        about: "Software developer passionate about building smart and efficient systems. Beyond coding, I'm also a certified Dive Master and a kitesurfing enthusiast.",
        image: "src/assets/profile.png"
    },
    skills: [
        {
            category: "Frontend",
            items: [
                { name: "React" },
                { name: "JavaScript" },
                { name: "HTML/CSS" },
                { name: "Bootstrap" }
            ]
        },
        {
            category: "Backend",
            items: [
                { name: "Node.js" },
                { name: "Python" },
                { name: "Java" }
            ]
        },
        {
            category: "Tools & Languages",
            items: [
                { name: "Git & Version Control" },
                { name: "C++" },
                { name: "C" }
            ]
        }
    ],
    projects: [
        // {
        //     id: 1,
        //     title: "Reversi (Othello) AI",
        //     description: "A fully-featured Reversi game implementing minimax algorithm with alpha-beta pruning. Developed as a university project demonstrating AI decision-making and game tree traversal.",
        //     technologies: ["Java", "AI Algorithms", "Game Development"],
        //     url: "https://github.com/yaronserlin/reversi-ai",
        //     liveUrl: null,
        //     media: "https://raw.githubusercontent.com/yaronserlin/reversi-ai/refs/heads/main/screenshot.png"
        // },

        // {
        //     id: 2,
        //     title: "P2P File Sharing Application",
        //     description: "A peer-to-peer file sharing system supporting direct connection between users. Implements socket programming and network protocols for efficient data transfer.",
        //     technologies: ["Python", "Networking", "Socket Programming"],
        //     url: "https://github.com/yaronserlin/p2p-file-sharing",
        //     liveUrl: null,
        //     media: "https://raw.githubusercontent.com/yaronserlin/p2p-file-sharing/refs/heads/main/screenshot.png"
        // },
        {
            id: 1,
            title: "Automata Visualization Tool123",
            description: "Interactive web-based tool for drawing and visualizing finite automata and state machines. Helps computer science students understand automata theory concepts visually.",
            technologies: ["React", "JavaScript", "Canvas API"],
            url: "https://github.com/yaronserlin/automata-editor",
            liveUrl: "https://yaronserlin.github.io/automata-editor/",
            image: "https://raw.githubusercontent.com/yaronserlin/automata-editor/refs/heads/main/screenshot.png",
            gif: "src/assets/automata-editor.gif",
            video: "src/assets/Automata-editor.mov"  // Add your .mov or .mp4 here: "src/assets/automata-editor.mp4"
        },
        // {
        //     id: 4,
        //     title: "Code Project Visualizer",
        //     description: "Full-stack tool that analyzes code repositories and generates visual maps of project structure. Useful for understanding large codebases and visualizing dependencies.",
        //     technologies: ["React", "Node.js", "Express"],
        //     url: "https://github.com/yaronserlin/code-visualizer",
        //     liveUrl: null,
        //     media: "https://raw.githubusercontent.com/yaronserlin/code-visualizer/refs/heads/main/screenshot.png"
        // }
    ],
    contactInfo: {
        email: "yaron.serlin.dev@gmail.com",
        phone: +972542570203,
        facebook: "https://www.facebook.com/yaron.serlin",
        linkedin: "https://www.linkedin.com/in/yaron-serlin",
        github: "https://github.com/yaronserlin"
    }
};
