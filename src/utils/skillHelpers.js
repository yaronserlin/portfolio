/**
 * Skill Utility Functions - Skill Display Helpers
 * 
 * Provides utility functions for consistent skill handling across components:
 * - Mapping skill ranks (1-5) to user-friendly labels
 * - Mapping skill ranks to Bootstrap color variants
 * - Converting skill ranks to progress bar percentages
 * 
 * Skill Rank System:
 * - 1 = Basic (20%)
 * - 2 = Beginner (40%)
 * - 3 = Intermediate (60%)
 * - 4 = Proficient (80%)
 * - 5 = Expert (100%)
 */

const RANK_LABELS = {
    5: "Expert",
    4: "Proficient",
    3: "Intermediate",
    2: "Beginner",
    1: "Basic"
};

const RANK_COLORS = {
    5: "success",
    4: "info",
    3: "warning",
    2: "secondary",
    1: "secondary"
};

/**
 * Get the label text for a skill rank
 * @param {number} rank - Skill rank (1-5)
 * @returns {string} Rank label
 */
export const getRankLabel = (rank) => {
    return RANK_LABELS[rank] || "Unknown";
};

/**
 * Get the color variant for a skill rank
 * @param {number} rank - Skill rank (1-5)
 * @returns {string} Bootstrap color variant
 */
export const getRankColor = (rank) => {
    return RANK_COLORS[rank] || "secondary";
};

/**
 * Get progress bar width percentage based on rank
 * @param {number} rank - Skill rank (1-5)
 * @returns {number} Percentage (0-100)
 */
export const getRankPercentage = (rank) => {
    return rank * 20;
};
