/**
 * SkillsPage Component - Technical Skills Showcase
 * 
 * This page (currently unrouted) displays all technical skills organized by category.
 * Note: Skills are also displayed on the AboutPage, so this page provides an alternative view.
 * 
 * Layout:
 * - Page header with section title and subtitle
 * - Responsive grid of skill categories
 * - Full viewport height with gradient background
 * 
 * Skill Categories:
 * - Frontend technologies (React, JavaScript, HTML/CSS, Bootstrap)
 * - Backend technologies (Node.js, Python, Java)
 * - Tools & Languages (Git, C++, C)
 * 
 * Features:
 * - Skill cards with responsive grid layout
 * - Each skill displays an icon from react-icons
 * - Hover effects and smooth transitions
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Array} props.skills - Array of skill category objects
 * @returns {React.ReactElement} Skills showcase page with categorized skill cards
 */

import { Container, Row } from 'react-bootstrap';
import SectionHeader from '../components/SectionHeader';
import SkillCategory from '../components/SkillCategory';

const SkillsPage = ({ skills }) => {
    return (
        <section id="skills" className="py-5 py-md-100" style={{
            background: 'linear-gradient(135deg, rgba(42, 157, 143, 0.05) 0%, rgba(202, 240, 248, 0.05) 100%)',
            minHeight: '100vh'
        }}>
            <Container>
                <SectionHeader
                    title="Skills"
                    subtitle="Technologies and tools I'm proficient with"
                />

                <Row>
                    {skills.map((skillGroup, index) => (
                        <SkillCategory
                            key={index}
                            category={skillGroup.category}
                            items={skillGroup.items}
                        />
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default SkillsPage;