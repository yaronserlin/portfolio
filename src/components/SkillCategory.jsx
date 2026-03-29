/**
 * SkillCategory Component - Skill Category Card Container
 * 
 * Displays a group of related skills within a styled card container.
 * Typically used for categories like Frontend, Backend, Tools, etc.
 * 
 * Layout:
 * - Category title as bold heading
 * - Skills displayed as flex items in a row
 * - Responsive grid: 4 columns on desktop, 1 on mobile
 * 
 * Styling:
 * - White background with subtle shadow
 * - Top border accent in primary color
 * - Rounded corners (12px)
 * - Hover effect: lifts upward with enhanced shadow
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.category - Category name (e.g., "Frontend", "Backend")
 * @param {Array} props.items - Array of skill objects with name property
 * @returns {React.ReactElement} Skill category card with skill items
 */

import { Col } from "react-bootstrap";
import SkillItem from "./SkillItem";

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
