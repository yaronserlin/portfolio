import { describe, it, expect } from 'vitest';
import { STORAGE_KEY, DEFAULT_PREFS, FONT_STEPS, loadPrefs, applyPrefs, computeBottomOffset } from './accessibility';

const storageWith = (value) => ({ getItem: (key) => (key === STORAGE_KEY ? value : null) });

describe('loadPrefs', () => {
    it('falls back to defaults on missing or bad data', () => {
        expect(loadPrefs(storageWith(null))).toEqual(DEFAULT_PREFS);
        expect(loadPrefs(storageWith('{oops'))).toEqual(DEFAULT_PREFS);
        expect(loadPrefs(null)).toEqual(DEFAULT_PREFS);
    });

    it('restores saved values and clamps the font step', () => {
        expect(loadPrefs(storageWith(JSON.stringify({ fontStep: 1, underlineLinks: true }))))
            .toEqual({ fontStep: 1, highContrast: false, underlineLinks: true });
        expect(loadPrefs(storageWith(JSON.stringify({ fontStep: 42 }))).fontStep).toBe(FONT_STEPS.length - 1);
    });
});

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
