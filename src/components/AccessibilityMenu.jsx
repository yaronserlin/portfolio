/**
 * PREVIEW: Floating accessibility menu - text size, high contrast, underline links.
 * Preferences persist in localStorage. The button sits bottom-right and lifts
 * itself above the footer when it scrolls into view, so it never covers the
 * footer links.
 */

import { useEffect, useState } from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import { FaUniversalAccess, FaTimes } from 'react-icons/fa';
import {
    DEFAULT_PREFS, EDGE_GAP, FONT_STEPS, STORAGE_KEY, applyPrefs, computeBottomOffset, loadPrefs,
} from '../utils/accessibility';

const safeStorage = () => {
    try {
        return window.localStorage;
    } catch {
        return null;
    }
};

const measureBottomOffset = () => {
    const rects = Array.from(document.querySelectorAll('footer'))
        .map((el) => el.getBoundingClientRect())
        .filter((rect) => rect.height > 0);
    return computeBottomOffset(rects, window.innerHeight);
};

/**
 * @returns {JSX.Element} Floating accessibility button and panel.
 */
const AccessibilityMenu = () => {
    const [open, setOpen] = useState(false);
    const [prefs, setPrefs] = useState(() => loadPrefs(safeStorage()));
    const [bottomOffset, setBottomOffset] = useState(EDGE_GAP);

    useEffect(() => {
        applyPrefs(document.documentElement, prefs);
        try {
            safeStorage()?.setItem(STORAGE_KEY, JSON.stringify(prefs));
        } catch {
            /* storage unavailable - preferences apply for this session only */
        }
    }, [prefs]);

    useEffect(() => {
        let frame = 0;
        const schedule = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => setBottomOffset(measureBottomOffset()));
        };
        schedule();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        const observer = new MutationObserver(schedule);
        observer.observe(document.body, { childList: true, subtree: true });
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    const update = (patch) => setPrefs((prev) => ({ ...prev, ...patch }));

    return (
        <div
            className="position-fixed end-0 me-3 d-flex flex-column align-items-end"
            style={{ zIndex: 1060, bottom: `${bottomOffset}px`, transition: 'bottom 0.15s ease-out' }}
        >
            {open && (
                <div
                    role="dialog"
                    aria-label="Accessibility options"
                    className="bg-white text-dark border rounded-3 shadow p-3 mb-2"
                    style={{ width: '250px', maxHeight: `calc(100vh - ${bottomOffset + 80}px)`, overflowY: 'auto' }}
                >
                    <h2 className="h6 fw-bold mb-3">Accessibility</h2>
                    <span className="small text-secondary d-block mb-1">Text size ({FONT_STEPS[prefs.fontStep]}%)</span>
                    <ButtonGroup size="sm" className="w-100 mb-3" aria-label="Text size">
                        <Button
                            variant="outline-primary"
                            onClick={() => update({ fontStep: Math.max(0, prefs.fontStep - 1) })}
                            disabled={prefs.fontStep === 0}
                            aria-label="Decrease text size"
                        >
                            A-
                        </Button>
                        <Button
                            variant="outline-primary"
                            onClick={() => update({ fontStep: Math.min(FONT_STEPS.length - 1, prefs.fontStep + 1) })}
                            disabled={prefs.fontStep === FONT_STEPS.length - 1}
                            aria-label="Increase text size"
                        >
                            A+
                        </Button>
                    </ButtonGroup>
                    <Form.Check
                        type="switch"
                        id="a11y-contrast"
                        className="mb-2 small"
                        label="High contrast"
                        checked={prefs.highContrast}
                        onChange={(e) => update({ highContrast: e.target.checked })}
                    />
                    <Form.Check
                        type="switch"
                        id="a11y-underline"
                        className="mb-3 small"
                        label="Underline links"
                        checked={prefs.underlineLinks}
                        onChange={(e) => update({ underlineLinks: e.target.checked })}
                    />
                    <Button variant="outline-secondary" size="sm" className="w-100" onClick={() => setPrefs({ ...DEFAULT_PREFS })}>
                        Reset
                    </Button>
                </div>
            )}
            <Button
                variant="primary"
                className="rounded-circle d-flex align-items-center justify-content-center shadow"
                style={{ width: '48px', height: '48px' }}
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? 'Close accessibility menu' : 'Open accessibility menu'}
                aria-expanded={open}
            >
                {open ? <FaTimes aria-hidden="true" /> : <FaUniversalAccess size={22} aria-hidden="true" />}
            </Button>
        </div>
    );
};

export default AccessibilityMenu;
