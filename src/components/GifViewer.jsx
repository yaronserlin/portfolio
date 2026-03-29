/**
 * Preview: A high-level media overlay modal with speed controls specifically scaled for examining animated UI demonstrations.
 */

import { useState, useRef, useEffect } from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import { FaPlay, FaPause, FaTimes } from 'react-icons/fa';

/**
 * Triggers a blocking modal dialog injecting rich media files and video timeline manipulators for targeted UI inspection.
 * @param {Object} props - View initialization values.
 * @param {string} props.gifSrc - Direct file path evaluating as an animation source stream.
 * @param {string} props.title - Modal semantic heading identifier.
 * @param {Function} props.onClose - State teardown callback triggering unmount sequences.
 * @returns {JSX.Element} Responsive overlay framework.
 */
const GifViewer = ({ gifSrc, title, onClose }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [speed, setSpeed] = useState(1);
    const videoRef = useRef(null);
    const isVideo = gifSrc && (gifSrc.endsWith('.mp4') || gifSrc.endsWith('.mov') || gifSrc.endsWith('.webm'));

    /**
     * Toggles play/pause state syncing DOM elements.
     */
    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(() => {
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    /**
     * Modifies current timeline speed when selected multipliers change.
     */
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
        }
    }, [speed]);

    /**
     * Flips underlying playing boolean.
     */
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    /**
     * Caches user selected multiplier speed.
     * @param {number} newSpeed - Speed multiplier scalar (e.g., 0.5, 1, 1.5, 2).
     */
    const handleSpeedChange = (newSpeed) => {
        setSpeed(newSpeed);
    };

    /**
     * Subscribes to document keydown inputs destroying modal if escape matched.
     */
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    return (
        <Modal
            show={true}
            onHide={onClose}
            centered
            size="lg"
            className="gif-viewer-modal"
            style={{ '--bs-modal-bg': 'rgba(255, 255, 255, 0.98)' }}
        >
            <Modal.Header closeButton className="bg-white text-dark border-bottom">
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body
                className="bg-white text-dark d-flex flex-column align-items-center"
                style={{ padding: '1.5rem' }}
            >
                {/* Media Container */}
                <div
                    style={{
                        maxWidth: '100%',
                        maxHeight: '60vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(2, 62, 138, 0.05) 0%, rgba(0, 180, 216, 0.05) 100%)',
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        overflow: 'auto',
                        marginBottom: '1rem'
                    }}
                >
                    {isVideo ? (
                        <video
                            ref={videoRef}
                            src={gifSrc}
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                            autoPlay
                            playsInline
                        />
                    ) : (
                        <img
                            src={gifSrc}
                            alt={title}
                            style={{ maxWidth: '100%', maxHeight: '100%' }}
                        />
                    )}
                </div>

                {/* Controls - Only show for videos */}
                {isVideo && (
                    <div className="d-flex gap-3 align-items-center flex-wrap justify-content-center">
                        {/* Play/Pause Button */}
                        <Button
                            variant={isPlaying ? 'outline-dark' : 'success'}
                            size="sm"
                            onClick={handlePlayPause}
                            title={isPlaying ? 'Pause' : 'Play'}
                        >
                            {isPlaying ? <FaPause /> : <FaPlay />}
                            {isPlaying ? ' Pause' : ' Play'}
                        </Button>

                        {/* Speed Controls */}
                        <ButtonGroup size="sm">
                            {[0.5, 1, 1.5, 2].map((s) => (
                                <Button
                                    key={s}
                                    variant={speed === s ? 'primary' : 'outline-dark'}
                                    onClick={() => handleSpeedChange(s)}
                                    title={`${s}x speed`}
                                >
                                    {s}x
                                </Button>
                            ))}
                        </ButtonGroup>
                    </div>
                )}
            </Modal.Body>

            <Modal.Footer className="bg-white border-top">
                <small className="text-muted w-100">Press ESC to close</small>
            </Modal.Footer>
        </Modal>
    );
};

export default GifViewer;
