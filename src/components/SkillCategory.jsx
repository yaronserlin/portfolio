/**
 * PREVIEW: Card component grouping related language and technology badges into logical domains.
 */

import { Col } from "react-bootstrap";
import SkillItem from "./SkillItem";

/**
 * Renders an elevated interactive card containing a mapped array of specific technical skills.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.category - The conceptual bucket name (e.g., "Frontend", "Backend").
 * @param {Array<Object>} props.items - Array of individual skill data objects.
 * @returns {JSX.Element} The rendered skill category column.
 */
const SkillCategory = ({ category, items }) => {
    return (
        <Col lg={4} md={6} className="mb-4">
            <div
                className="h-100 p-5 bg-white rounded"
                style={{
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
                    borderTop: '4px solid var(--bs-primary)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.06)';
                }}
            >
                <h2 className="h4 mb-4 fw-bold text-primary">
                    {category}
                </h2>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    justifyContent: 'flex-start'
                }}>
                    {items.map((skill, index) => (
                        <SkillItem key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </Col>
    );
};

export default SkillCategory;
