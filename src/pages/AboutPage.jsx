/**
 * Preview: A detailed informational page grouping the author's biography, technical skills, background, and personal hobbies.
 */

import { Container, Row, Col } from 'react-bootstrap';
import AboutBio from '../components/AboutBio';
import AboutBackground from '../components/AboutBackground';
import AboutInterests from '../components/AboutInterests';
import HeroImage from '../components/HeroImage';
import SkillCategory from '../components/SkillCategory';

/**
 * Renders an expansive view of the portfolio owner including life story, expertise mapping, academic history, and out-of-work passions.
 * @param {Object} props - The component parameters.
 * @param {Object} props.personalInfo - The author's biographical data, including the long bio string, interests array, and education.
 * @param {Array<Object>} props.skills - Subdivided collections of technological proficiencies to map into standard UI groupings.
 * @returns {JSX.Element} The composed About page layout.
 */
const AboutPage = ({ personalInfo, skills }) => {
    return (
        <section id="about" className="py-5 py-md-100" style={{
            background: 'linear-gradient(135deg, rgba(2, 62, 138, 0.05) 0%, rgba(0, 180, 216, 0.05) 100%)',
            minHeight: 'auto'
        }}>
            <Container>
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

                <Row className="mb-5">
                    <Col xs={12}>
                        <AboutBackground education={personalInfo.education} title={personalInfo.title} />
                        <AboutInterests interests={personalInfo.interests} />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutPage;