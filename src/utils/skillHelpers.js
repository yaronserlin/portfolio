/**
 * Preview: Helper functions for UI representation of skill ranks, translating numeric ranks into badges, progress sizes, and colors.
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
 * Returns the corresponding text label for a numerical skill rank.
 * @param {number} rank - The skill rank from 1 to 5.
 * @returns {string} The text label for the rank, or "Unknown" if invalid.
 */
export const getRankLabel = (rank) => {
    return RANK_LABELS[rank] || "Unknown";
};

/**
 * Returns a Bootstrap color variant string based on the given skill rank.
 * @param {number} rank - The skill rank from 1 to 5.
 * @returns {string} A Bootstrap color variant (e.g., 'success', 'info').
 */
export const getRankColor = (rank) => {
    return RANK_COLORS[rank] || "secondary";
};

/**
 * Calculates a percentage value corresponding to the numeric skill rank.
 * @param {number} rank - The skill rank from 1 to 5.
 * @returns {number} The calculated percentage (0 to 100).
 */
export const getRankPercentage = (rank) => {
    // Each rank increment represents a 20% increase
    return rank * 20;
};
