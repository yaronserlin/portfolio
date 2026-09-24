import { describe, it, expect } from 'vitest';
import { DEFAULT_PREFS, applyPrefs, computeBottomOffset } from './accessibility';

describe('applyPrefs', () => {
    it('sets font size and classes on the root element', () => {
        const root = document.createElement('html');
        applyPrefs(root, { fontStep: 2, highContrast: true, underlineLinks: true });
        expect(root.style.fontSize).toBe('125%');
        expect(root.classList.contains('a11y-high-contrast')).toBe(true);
        expect(root.classList.contains('a11y-underline-links')).toBe(true);
        applyPrefs(root, DEFAULT_PREFS);
        expect(root.style.fontSize).toBe('100%');
        expect(root.classList.contains('a11y-high-contrast')).toBe(false);
    });
});

describe('computeBottomOffset', () => {
    it('uses the base gap when the footer is off screen', () => {
        expect(computeBottomOffset([{ top: 1200, bottom: 1400 }], 800)).toBe(16);
    });

    it('lifts above a visible footer', () => {
        expect(computeBottomOffset([{ top: 600, bottom: 900 }], 800)).toBe(216);
    });
});
