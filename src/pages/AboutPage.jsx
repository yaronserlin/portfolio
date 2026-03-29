/**
 * AboutPage Component - Detailed Personal & Professional Information
 * 
 * This page provides comprehensive information about the portfolio owner, including:
 * - Profile image and biography
 * - Professional title and background
 * - Education and qualification details
 * - Personal interests and hobbies
 * - Complete skills and technologies by category
 * 
 * Layout (from top to bottom):
 * - Row 1: Profile image (left) + Bio section (right)
 * - Row 2: Skills grid (full width)
 * - Row 3: Background info + Personal interests (full width)
 * 
 * Features:
 * - Responsive grid with proper mobile stacking
 * - 3D perspective effect on images
 * - Categorized skill display with icons
 * - Styled information boxes for background and interests
 * 
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.personalInfo - Contains profile image, bio, title, education
 * @param {Array} props.skills - Array of skill category objects
 * @returns {React.ReactElement} About page with biography, background, and skills
 */

import { Container, Row, Col } from 'react-bootstrap';
import ProfileImage from '../components/ProfileImage';
import AboutBio from '../components/AboutBio';
import AboutBackground from '../components/AboutBackground';
import AboutInterests from '../components/AboutInterests';
import HeroImage from '../components/HeroImage';
import SkillCategory from '../components/SkillCategory';

const AboutPage = ({ personalInfo, skills }) => {
    return (
        <section id="about" className="py-5 py-md-100" style={{
            background: 'linear-gradient(135deg, rgba(2, 62, 138, 0.05) 0%, rgba(0, 180, 216, 0.05) 100%)',
            minHeight: 'auto'
        }}>
            <Container>
                {/* Row 1: Profile Image (left) | Bio (right) */}
                <Row className="align-items-center mb-5">
                    <Col lg={6} className="mb-4 mb-lg-0">
                        <div style={{ perspective: '1000px' }}>
                            <HeroImage src={personalInfo.image} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h1 className="display-5 fw-bold mb-3" style={{ color: 'var(--bs-dark)' }}>About Me</h1>
                            <AboutBio bio={personalInfo.bio} longBio={personalInfo.longBio} />
                        </div>
                    </Col>
                </Row>
                {/* Row 2: Skills section (full width) */}
                <Row>
                    <Col xs={12}>
                        <h2 className="h3 fw-bold mb-5" style={{ color: 'var(--bs-dark)' }}>Skills & Technologies</h2>
                        <Row>
                            {skills.map((skillGroup, index) => (
                                <SkillCategory
                                    key={index}
                                    category={skillGroup.category}
                                    items={skillGroup.items}
                                />
                            ))}
                        </Row>
                    </Col>
                </Row>
                {/* Row 3: Background section (full width) */}
                <Row className="mb-5">
                    <Col xs={12}>
                        <AboutBackground education={personalInfo.education} title={personalInfo.title} />
                        <AboutInterests />
                    </Col>
                </Row>

            </Container>
        </section>
    );
};

export default AboutPage;