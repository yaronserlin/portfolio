/**
 * GifViewer Component - Modal for Viewing GIFs and Videos with Controls
 * 
 * A modal component for displaying project demos (GIFs or videos) with:
 * - Full-screen modal presentation
 * - Play/Pause controls for videos
 * - Playback speed adjustment (0.5x, 1x, 1.5x, 2x)
 * - Keyboard support (ESC to close)
 * - Dark theme styling for media focus
 * 
 * Features:
 * - Automatic video type detection (.mp4, .mov, .webm)
 * - Video controls only shown for actual videos, not GIFs
 * - Responsive media container with centered content
 * - Keyboard event listener for escape key
 * - Smooth transitions and professional styling
 * 
 * @component
 * @param {Object} props - Component props
 * @param {string} props.gifSrc - Source URL for GIF or video file
 * @param {string} props.title - Modal title (project name)
 * @param {Function} props.onClose - Callback when modal should close
 * @returns {React.ReactElement} Full-screen media viewer modal
 */

import { useState, useRef, useEffect } from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import { FaPlay, FaPause, FaTimes } from 'react-icons/fa';

const GifViewer = ({ gifSrc, title, onClose }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [speed, setSpeed] = useState(1);
    const videoRef = useRef(null);
    const isVideo = gifSrc && (gifSrc.endsWith('.mp4') || gifSrc.endsWith('.mov') || gifSrc.endsWith('.webm'));

    /**
     * Handle play/pause toggle for video playback
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
     * Handle playback speed changes
     */
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
        }
    }, [speed]);

    /**
     * Toggle video play state
     */
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    /**
     * Change video playback speed
     * @param {number} newSpeed - Speed multiplier (0.5, 1, 1.5, 2)
     */
    const handleSpeedChange = (newSpeed) => {
        setSpeed(newSpeed);
    };

    /**
     * Handle escape key press to close modal
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
