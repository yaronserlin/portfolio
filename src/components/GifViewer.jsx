/**
 * PREVIEW: Modal component providing animated media (GIF/Video) playback capabilities with speed controls.
 */

import { useState, useRef, useEffect } from 'react';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import { FaPlay, FaPause } from 'react-icons/fa';

/**
 * Renders a full-screen modal allowing users to inspect rich media files. Provides custom
 * player controls for video formats to toggle playback speed and pause/play states.
 * 
 * @param {Object} props - Component properties.
 * @param {string} props.gifSrc - The source URL or path of the media file.
 * @param {string} props.title - Title header of the media modal.
 * @param {Function} props.onClose - Triggered callback to unmount or hide the modal.
 * @returns {JSX.Element} The rendered media modal interface.
 */
const GifViewer = ({ gifSrc, title, onClose }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const [speed, setSpeed] = useState(1);
    const videoRef = useRef(null);

    // Determines if media should be treated as a video file requiring explicit HTML5 playback handling
    const isVideo = gifSrc && (gifSrc.endsWith('.mp4') || gifSrc.endsWith('.mov') || gifSrc.endsWith('.webm'));

    /**
     * Synchronizes local state changes to real DOM actions on the video element.
     */
    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play().catch(() => {});
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    /**
     * Synchronizes playback rate state mapping it back to the video ref.
     */
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
        }
    }, [speed]);

    /**
     * Toggles boolean media state.
     */
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    /**
     * Mutates the speed scaler state.
     * @param {number} newSpeed - Target playback multiplier.
     */
    const handleSpeedChange = (newSpeed) => {
        setSpeed(newSpeed);
    };

    /**
     * Allows closing the modal directly via the Escape key shortcut.
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
                {/* Visual rendering container bounding size dimensions */}
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

                {/* Optional HTML5 Video control interface toolbar overlaid beneath the container */}
                {isVideo && (
                    <div className="d-flex gap-3 align-items-center flex-wrap justify-content-center">
                        <Button
                            variant={isPlaying ? 'outline-dark' : 'success'}
                            size="sm"
                            onClick={handlePlayPause}
                            title={isPlaying ? 'Pause' : 'Play'}
                        >
                            {isPlaying ? <FaPause /> : <FaPlay />}
                            {isPlaying ? ' Pause' : ' Play'}
                        </Button>

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
