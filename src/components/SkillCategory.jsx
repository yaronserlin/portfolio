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
                className="h-100 p-5 bg-white rounded skill-category-card"
                style={{
                    borderRadius: '12px',
                    borderTop: '4px solid var(--bs-primary)'
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
