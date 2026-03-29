/**
 * Preview: A styling bucket to visually group related skills (e.g., Frontend, Backend) within structural cards.
 */

import { Col } from "react-bootstrap";
import SkillItem from "./SkillItem";

/**
 * Implements a display card with an interactive hover effect, formatting an array of skill items appropriately.
 * @param {Object} props - Element attributes.
 * @param {string} props.category - The formatted name of this collection.
 * @param {Array<Object>} props.items - Sequence of specific skill entities.
 * @returns {JSX.Element} Grid column presenting categorized skill entities.
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
