/**
 * PREVIEW: Preference and placement helpers for the accessibility menu.
 */

export const FONT_STEPS = [100, 110, 125, 150];
export const DEFAULT_PREFS = Object.freeze({ fontStep: 0, highContrast: false, underlineLinks: false });

/** Gap in px between the floating button and whatever it sits above. */
export const EDGE_GAP = 16;

/**
 * Applies preferences to the root element.
 * @param {HTMLElement} root
 * @param {{fontStep: number, highContrast: boolean, underlineLinks: boolean}} prefs
 */
export function applyPrefs(root, prefs) {
    root.style.fontSize = `${FONT_STEPS[prefs.fontStep] ?? 100}%`;
    root.classList.toggle('a11y-high-contrast', prefs.highContrast);
    root.classList.toggle('a11y-underline-links', prefs.underlineLinks);
}

/**
 * How far from the bottom of the viewport the floating button should sit so
 * it clears every visible bottom obstacle (the footer and its links).
 * @param {{top: number, bottom: number}[]} rects
 * @param {number} viewportHeight
 * @returns {number}
 */
export function computeBottomOffset(rects, viewportHeight) {
    const covered = rects.reduce((max, rect) => {
        const visible = rect.bottom > 0 && rect.top < viewportHeight;
        return visible ? Math.max(max, viewportHeight - rect.top) : max;
    }, 0);
    return Math.max(0, covered) + EDGE_GAP;
}
